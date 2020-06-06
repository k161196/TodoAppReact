import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, deleteTask, handleCheck }) {
  return tasks
    .sort(function (a, b) {
      var dateA = new Date(a.updatedAt),
        dateB = new Date(b.updatedAt);
      return dateB - dateA;
    })
    .sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1))
    .map((task) => (
      <Task
        key={task.title}
        todo={task}
        deleteTask={deleteTask}
        handleCheckButton={handleCheck}
      />
    ));
}
