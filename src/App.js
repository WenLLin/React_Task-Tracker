import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "1st task",
      day: "1 feb 2020",
      reminder: true,
    },
    {
      id: 2,
      text: "2nd task",
      day: "2 mar 2020",
      reminder: true,
    },
    {
      id: 3,
      text: "3rd task",
      day: "3 Jun 2020",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
