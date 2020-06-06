import React, { useState, useEffect } from "react";
import { TransitionGroup } from "react-transition-group";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

import { Skeleton, Alert } from "@material-ui/lab";
import { Snackbar, Fab } from "@material-ui/core";
import { Warning, Add } from "@material-ui/icons";
import ErrorIcon from "@material-ui/icons/Error";

const styles = {
  snackbarBack: {
    background:
      "linear-gradient(90deg, rgba(255,81,47,1) 0%, rgba(221,36,118,1) 100%)",
    opacity: 1,
    color: "white",
  },
  fab: {
    position: "absolute",
    bottom: "50px",
    right: "50px",
  },
};
export default function TaskApp({ classes, onToggleDark }) {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [noData, setNoData] = useState(false);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) {
      setTasks(data);
    }
    setNoData(true);
  }, []);

  function handleAddTask(task) {
    // console.log(task.title);
    if (task.title.length > 3) {
      setTasks([...tasks, task]);
      localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
      setNoData(false);
    } else {
      handleClick();
    }
  }
  function deleteTask(task) {
    const taskAfterDelete = tasks.filter((todo) => todo.title !== task.title);
    console.log(taskAfterDelete);
    setTasks(taskAfterDelete);
    localStorage.setItem("tasks", JSON.stringify(taskAfterDelete));
    if (!tasks.length) {
      setNoData(true);
    }
  }

  function handleCheck(task) {
    const afterCheck = tasks.map((taskIn) => {
      if (taskIn.title === task.title) {
        return Object.assign({}, task, {
          isDone: !task.isDone,
          updatedAt: +new Date(),
        });
      } else {
        return taskIn;
      }
    });
    setTasks(afterCheck);
    localStorage.setItem("tasks", JSON.stringify(afterCheck));
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  // console.log(tasks);
  const tasksView = (
    <div>
      <TransitionGroup>
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          handleCheck={handleCheck}
        />
      </TransitionGroup>
    </div>
  );
  const skeletonView = <Skeleton />;
  return (
    <div>
      <TaskForm handleAddTask={handleAddTask} />
      {tasks.length ? (
        tasksView
      ) : noData ? (
        <Alert
          icon={<Warning fontSize='inherit' style={{ color: "white" }} />}
          style={styles.snackbarBack}
          severity='warning'
        >
          No Data Found
        </Alert>
      ) : (
        skeletonView
      )}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          icon={<ErrorIcon fontSize='inherit' style={{ color: "white" }} />}
          style={styles.snackbarBack}
          onClose={handleClose}
          severity='error'
        >
          Plz Enter more than 3 character
        </Alert>
      </Snackbar>
      <Fab
        style={styles.fab}
        color='secondary'
        aria-label='add'
        onClick={onToggleDark}
      >
        <Add />
      </Fab>
    </div>
  );
}
