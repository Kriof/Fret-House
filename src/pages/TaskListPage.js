import React, { useState, useEffect } from "react";

const TaskListPage = ({ match }) => {
  var matchParams = match.params;

  const [tasks, setTasks] = useState([]);
  const tasksArray = [];
  const fetchData = async () => {
    const getAllTasksResult = await fetch(
      "http://localhost:8000/api/getAllTasks",
      {}
    );
    const getAllTasksBody = await getAllTasksResult.json();
    Promise.all(
      getAllTasksBody.map(async (task, id) => {
        let taskTypeNameResult = await fetch(
          `http://localhost:8000/api/getTaskTypeById/${task.typeId}`
        );
        let taskTypeNameJson = await taskTypeNameResult.json();

        let repeativnessNameResult = await fetch(
          `http://localhost:8000/api/getTaskRepeativenessById/${task.repeativenessId}`
        );
        let repeativnessNameJson = await repeativnessNameResult.json();
        
        let userNameResult = await fetch(
          `http://localhost:8000/api/getUserById/${task.userId}`
        );
        let userNameJson = await userNameResult.json();
        console.log(userNameJson);
        tasks.push({
          id: task.id,
          type: taskTypeNameJson != null ? taskTypeNameJson.name : "",
          reapeativeness: repeativnessNameJson != null ? repeativnessNameJson.name : "",
          startDate: task.startDate,
          user: userNameJson != null ? userNameJson.username : ""
        });
      })
    );
    return getAllTasksBody;
  };

  fetchData();
  return (
    <>
      {tasks.map((event, key) => (
        
        <div key={key}>
          <p >Numer zadania: {event.id}</p>
          <p >Nazwa: {event.type}</p>
          <p >Powtarzalnosc: {event.reapeativeness}</p>
          <p >Data startu: {event.startDate}</p>
          <p >User: {event.user}</p>
          {/* <p>Typ: {async () => await fetch(`http://localhost:8000/api/getTaskTypeById/${event.typeId}`)}</p>
            <p>Powtarzalnosc: {async () => await fetch(`http://localhost:8000/api/tagetTaskRepeativenessByIdsk/${event.repeativenessId}`)}</p>
            <p>Data Startu: {new Date(event.startDate).toLocaleDateString()}</p>
            <p>Uzytkownik: {async () => await fetch(`http://localhost:8000/api/getUserById/${event.userId}`)}</p> */}
          <br />
        </div>
      ))}
    </>
  );
};

export default TaskListPage;
