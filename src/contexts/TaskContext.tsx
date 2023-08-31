import { PropsWithChildren, createContext, useState } from "react";
import { Alert } from "react-native";

export interface Task {
  finished?: boolean;
  message: string;
}

interface TaskContextProps {
  taskList: Task[];
  totalTasks: number;
  completeTasks: number;
  onToggle: (checked: boolean, task: Task) => void;
  onAdd: (message: string) => void;
  onDelete: (message: string) => void;
}

export const taskContext = createContext({} as TaskContextProps);

export function TaskProvider({ children }: PropsWithChildren) {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (message: string) => {
    const exists = taskList.find(
      (item) => item.message.toLowerCase() === message.toLowerCase()
    );

    if (exists) {
      Alert.alert("Essa task já foi cadastrada");
      return;
    }
    setTaskList((prev) => [...prev, { finished: false, message }]);
  };

  const toggleStatus = (checked: boolean, task: Task) => {
    setTaskList((prev: Task[]) => {
      return prev.map((item: Task) => {
        if (item.message === task.message) {
          return {
            finished: checked,
            message: task.message,
          };
        }
        return item;
      });
    });
  };

  const deleteTask = (message: string) => {
    Alert.alert(
      "Remover task",
      `Tem certeza que deseja remover a task '${message}'?`,
      [
        {
          text: "Sim",
          onPress: () => {
            setTaskList((prev) =>
              prev.filter((item) => item.message !== message)
            );
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  };

  const totalTasks = taskList.length;
  const completeTasks = taskList.filter((item) => item.finished).length;
  return (
    <taskContext.Provider
      value={{
        taskList,
        totalTasks,
        completeTasks,
        onToggle: toggleStatus,
        onAdd: addTask,
        onDelete: deleteTask,
      }}
    >
      {children}
    </taskContext.Provider>
  );
}
