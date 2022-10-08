import React from "react";
import { ITodos } from "../../interface/interface";

interface IProps {
  item: ITodos;
  onTaskCompleteHandler: (item: string) => void;
}

const ToDoItem: React.FC<IProps> = ({
  item,
  onTaskCompleteHandler,
}: IProps) => {
  return (
    <>
      <p className="todo-item">
        {item.name}
        <button onClick={() => onTaskCompleteHandler(item.name)}>X</button>
      </p>
    </>
  );
};

export default ToDoItem;
