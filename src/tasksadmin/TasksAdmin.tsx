import { useEffect, useState } from 'react';
import TaskService from './services/TaskService';
import { Task } from './Task';

export default function TasksAdmin() {
  const [tasks, setTasks] = useState<Task[]>();

  useEffect(() => {
    TaskService.getAll().then((allTasks) => {
      setTasks(allTasks);
    });
  }, []);

  return (
    <>
      <p>Tasks</p>
      <ul>
        {tasks?.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </>
  );
}
