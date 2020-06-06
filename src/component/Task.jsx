import React, { useState } from "react";
import { Paper, Checkbox, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Transition } from "react-transition-group";
import { Delete } from "@material-ui/icons";

const duration = 200;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: {
    opacity: 1,
    transform: "translate(0, 0)",
    transition: `all ${duration}ms ease-in`,
  },
  exiting: {
    opacity: 0,
    transition: `all ${duration}ms ease-out`,
  },
  exited: {
    opacity: 0,
    transition: `all ${duration}ms ease-out`,
  },
};
const styles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "0fr 1fr 0fr",
    gridTemplateRows: "100%",
    justifyContent: "center",
    width: "90%",
    marginTop: "0.5em",
    padding: "0.5em",
  },
  div: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  flexOne: {
    justifySelf: "end",
  },
  taskName: {
    alignSelf: "center",
  },
  isDoneStyle: {
    alignSelf: "center",
    textDecoration: "line-through",
  },
});

function Task({ todo, deleteTask, handleCheckButton }) {
  const [Visible, setVisible] = useState(true);
  function handleDeleteTask() {
    setVisible(false);
  }
  function handleCheck(e) {
    handleCheckButton(todo);
  }
  const classes = styles();

  return (
    <Transition
      key={todo.title}
      in={Visible}
      timeout={{
        appear: 100,
        enter: duration,
        exit: duration,
      }}
      // onEnter={() => console.log("enter")}
      // onEntering={() => console.log("enetering")}
      // onEntered={() => console.log("entered")}
      // onExit={() => console.log("exit")}
      // onExiting={() => console.log("exiting")}
      onExited={() => deleteTask(todo)}
    >
      {(state) => (
        <div
          className={classes.div}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <Paper className={classes.root}>
            <Checkbox
              checked={todo.isDone}
              onChange={handleCheck}
              className={classes.flexOne}
              name='checkedB'
              color='primary'
            />

            <Typography
              style={{ wordWrap: "break-word " }}
              className={!todo.isDone ? classes.taskName : classes.isDoneStyle}
            >
              {todo.title || state}
            </Typography>
            <IconButton className={classes.flexOne} onClick={handleDeleteTask}>
              <Delete />
            </IconButton>
          </Paper>
        </div>
      )}
    </Transition>
  );
}
export default Task;
