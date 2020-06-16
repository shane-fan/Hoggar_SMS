import React, { useState } from "react";
import axios from "axios";
import { generate } from "shortid";
import "./App.css";

import { AddStudentButton, StudentTable } from "./components";

// export async function getStudents(): Promise<StudentData> {
//   const { data } = await axios.get<IStudentDataResponse>(
//     "http://API_URL/endpoint"
//   );

//   const { name, age } = data;

//   return { name, age };
// }

function App(): JSX.Element {
  const [rows, setRows] = useState([
    {
      id: "45",
      firstName: "test",
      lastName: "ladasdast",
      age: 6,
      grade: "1",
      email: "eadwad@sadsadas.com",
    },
  ]);
  return (
    <div className="App">
      <AddStudentButton
        onSubmit={(data) => {
          setRows((currentRows) => [
            {
              id: generate(),
              ...data,
            },
            ...currentRows,
          ]);
        }}
      />
      <StudentTable rows={rows} />
    </div>
  );
}

export default App;
