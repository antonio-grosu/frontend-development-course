import React from "react";
import { useState, useEffect } from "react";
function App() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(1);

  const [myTasks, setMyTasks] = useState([]);

  const [formVisible, setFormVisible] = useState(false);

  const [loading, setLoading] = useState(true);

  // in acel array ii specific in functie de schimbarea caror variabile sa
  // execute acel call back function
  useEffect(() => {
    setLoading(true);
    const currentTasks = localStorage.getItem("tasks");
    if (currentTasks) {
      setMyTasks(JSON.parse(currentTasks));
    }
    setLoading(false);
  }, []);

  // conditional rendering => randez ceva daca altceva se intampla
  // randez o chestie daca o conditie este indeplinita
  if (loading) {
    return <div>Loading...</div>;
  } else
    return (
      <div className="relative h-screen bg-gray-50 p-2 flex flex-col gap-12 items-center justify-center">
        {myTasks.length == 0 && (
          <div>
            <h1>Nu ai niciun task</h1>
          </div>
        )}
        {myTasks.length > 0 && (
          <>
            <h1 className="text-4xl font-semibold underline">Taskurile mele</h1>
            {myTasks.map((item) => {
              return (
                <div
                  key={item.task}
                  className="bg-green-100 w-5/12 rounded-xl flex item-center justify-center flex-col gap-4 p-4 "
                >
                  <h1 className="text-center text-xl font-semibold">
                    {item.task}
                  </h1>
                  <p className="text-center">Prioritate: {item.priority}</p>
                </div>
              );
            })}
          </>
        )}

        <button
          onClick={() => setFormVisible(true)}
          className="px-12 py-2 cursor-pointer bg-blue-500 text-white rounded-md"
        >
          Adauga Task
        </button>

        {formVisible == true && (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const obj = {
                task: task,
                priority: priority,
              };

              // modific array

              let newArr = myTasks;
              //varianta 1
              setMyTasks([...newArr, obj]);
              setFormVisible(false);

              newArr.push(obj);
              localStorage.setItem("tasks", JSON.stringify(newArr));

              //varianta 2
              // newArr.push(obj);
              // setMyTasks(newArr);
            }}
            className="flex flex-col w-7/12 items-center gap-12 bg-cyan-100 p-12 absolute"
          >
            <div className="flex w-full justify-end">
              <button
                onClick={() => setFormVisible(false)}
                className="cursor-pointer p-4"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <h1 className="text-2xl text-black">Adauga task</h1>
            <input
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              type="text"
              placeholder="Nume Task"
              className="bg-gray-100 px-8 py-2 rounded-md"
            ></input>
            <input
              defaultValue={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              type="range"
              min="1"
              max="5"
              className="bg-gray-100/50 px-8 py-2 rounded-md mt-4"
            ></input>
            <button
              type="submit"
              className="bg-blue-400 text-white w-full py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
}

export default App;
