import React, { useState, useEffect } from "react";

const TaskListPage = ({ match }) => {
  var matchParams = match.params;

  const [tasks, setTasks] = useState([]);
  const tasksArray = [];

  return (
    <>
      <div id="add-comment-form">
        <h3>Add a task</h3>
        <label>
          Name:
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </label>
        <label>
          Comment:
          <textarea
            rows="4"
            cols="50"
            value={commentText}
            onChange={event => setCommentText(event.target.value)}
          />
        </label>
        <button onClick={() => addComment()}>Add Comment</button>
      </div>

    </>
  );
};

export default TaskListPage;
