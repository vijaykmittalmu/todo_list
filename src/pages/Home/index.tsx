import React, { ChangeEvent } from "react";
import ToDoItem from "./ToDoItem";
import { ITodos } from "../../interface/interface";

const Home: React.FC = () => {
  const [todoItem, setToDoItem] = React.useState<string>("");
  const [todoitems, setToDoItems] = React.useState<ITodos[]>([]);

  const onChangeItemHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setToDoItem(event.target.value);
  };

  const onAddItemHandler = (): void => {
    const items = {
      name: todoItem,
      id: Math.floor(Math.random() * 100),
    };
    setToDoItems([...todoitems, items]);
    setToDoItem("");
  };

  const onTaskCompleteHandler = (itemName: string): void => {
    setToDoItems(
      todoitems.filter((task: ITodos) => {
        return task.name != itemName;
      })
    );
  };

  return (
    <>
      <header className="header">
        <p>
          <input
            type="text"
            value={todoItem}
            onChange={onChangeItemHandler}
            placeholder="ToDo Item..."
          />
          <button onClick={onAddItemHandler}>Add Item</button>
        </p>
      </header>
      <main className="main-content">
        {todoitems.map((item: ITodos, key: number) => {
          return (
            <ToDoItem
              item={item}
              key={key}
              onTaskCompleteHandler={onTaskCompleteHandler}
            />
          );
        })}
      </main>
    </>
  );
};

export default Home;
