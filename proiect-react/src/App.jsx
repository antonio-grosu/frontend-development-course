import React from "react";
import { useState, useEffect } from "react";

const Exercitiul1 = () => {
  const name = "Matei";
  const [age, setAge] = useState(19);
  const [admin, setAdmin] = useState(false);
  return (
    <div className="w-full p-2 bg-gray-100 flex flex-col items-center justify-center h-screen">
      <h1 className="text-black text-2xl">Hello, {name}</h1>
      <p className="mt-4">Ai varsta de {age} ani</p>

      {admin == false && (
        <button
          className="bg-red-300 p-4 mt-6 text-black text-xl rounded-md"
          onClick={() => {
            setAdmin(true);
          }}
        >
          Apasa aici pentru a deveni admin
        </button>
      )}
      {admin == true && (
        <div className="flex flex-col items-center">
          <button
            onClick={() => {
              // setAge((prev) => prev + 1);
              setAge(age + 1);
            }}
            className="bg-green-300 px-4 py-2 rounded-md font-semibold mt-4"
          >
            Creste varsta cu 1 an
          </button>

          <button
            onClick={() => {
              setAge(age - 1);
            }}
            className="bg-red-300 px-4 py-2 rounde-md font-semibold mt-4 rounded-md"
          >
            Scade varsta cu 1 an
          </button>
        </div>
      )}
    </div>
  );
};

const Exercitiul2 = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Invata React", done: false },
    { id: 2, name: "Invata Matematica", done: false },
    { id: 3, name: "Plimba cainele", done: false },
  ]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* to do app */}

      <h1 className="text-2xl font-bold text-gray-800 mb-36 ">To Do App</h1>
      {tasks.filter((task) => task.done == true).length > 0 ? (
        tasks
          .filter((task) => task.done == true)
          .map((task) => {
            return (
              <div
                key={task.id}
                className="flex  items-center justify-between bg-green-200 p-4 mt-4 w-1/2 rounded-md"
              >
                <h4>{task.name}</h4>
              </div>
            );
          })
      ) : (
        <h3 className="font-semibold text-2xl text-red-500 mb-36">
          Esti o putoare !
        </h3>
      )}
      {tasks.filter((t) => !t.done).length > 0 ? (
        tasks
          .filter((t) => !t.done)
          .map((task) => {
            return (
              <div
                key={task.id}
                className="flex  items-center justify-between bg-gray-200 p-4 mt-4 w-1/2 rounded-md"
              >
                <h4>{task.name}</h4>

                <button
                  className="bg-red-300 p-4 text-black font-semibold"
                  onClick={() => {
                    setTasks(() => {
                      let restOfTasks = tasks.filter((t) => t.id != task.id);
                      const obj = { id: task.id, name: task.name, done: true };
                      return [...restOfTasks, obj];
                    });
                  }}
                >
                  Am facut
                </button>
              </div>
            );
          })
      ) : (
        <h3 className=" mt-4 font-semibold text-lg">Nu ai nimic de facut</h3>
      )}
    </div>
  );
};

function App() {
  const dummyUser = {
    name: "Matei",
    age: 19,
    admin: false,
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser(dummyUser);
      setLoading(false);
    }, 2000);
  }, []);
  if (loading && user == null)
    return (
      <div className="flex justify-center items-center h-screen">
        <h3 className="animate-pulse">Loading...</h3>
      </div>
    );
  else
    return (
      <div className="flex justify-center h-screen items-center flex-col">
        <h3>Date Personale</h3>
        <h4>Nume | {user.name}</h4>
        <h4>Varsta | {user.age}</h4>
        <h4>Rol | {user.admin.toString()}</h4>
      </div>
    );
}

export default App;
