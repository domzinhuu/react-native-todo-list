import { PropsWithChildren, createContext, useState } from "react";
import { Alert } from "react-native";

export interface Task {
  finished?: boolean;
  message: string;
}

interface TaskContextProps {
  taskList: Task[];
  onToggle: (checked: boolean, task: Task) => void;
  onAdd: (message: string) => void;
}

export const taskContext = createContext({} as TaskContextProps);

export function TaskProvider({ children }: PropsWithChildren) {
  const [taskList, setTaskList] = useState<Task[]>([
    { finished: false, message: "Aqui Ninja Jiraya, tiraria o Jiraya hafi hafi, comi te cu o daquitomevu" },
  ]);

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

  return (
    <taskContext.Provider
      value={{ taskList, onToggle: toggleStatus, onAdd: addTask }}
    >
      {children}
    </taskContext.Provider>
  );
}
