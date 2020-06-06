import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import { withTheme } from "@material-ui/core/styles";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      // color: "#0f0f0f",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: " rgba(255,81,47,1)",
    },
  },
})(TextField);
const styles = makeStyles({
  div: {
    display: "flex",
    margin: "1em",
  },
  button: {
    background:
      "linear-gradient(90deg, rgba(255,81,47,1) 0%, rgba(221,36,118,1) 100%)",
    margin: "0.5em",
    color: "white",
  },
});

function TaskForm(props) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmit() {
    props.handleAddTask({
      title: taskTitle,
      isDone: false,
      updatedAt: +new Date(),
    });
    if (taskTitle.length > 3) {
      setTaskTitle("");
    }
  }
  function keyPress(e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  const classes = styles();
  // console.log(props.theme);
  return (
    <div className={classes.div}>
      <CssTextField
        // color='primary'
        // className={{ focused: classes.focused }}
        label='Add'
        InputLabelProps={{
          className: classes.input,
        }}
        autoFocus
        margin='dense'
        fullWidth
        type='text'
        value={taskTitle}
        onKeyDown={keyPress}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <Button onClick={handleSubmit} className={classes.button}>
        <Add />
      </Button>
    </div>
  );
}

export default withTheme(TaskForm);
