import React from "react";
import axios from "axios";
import "./App.css";

import { StudentTable } from "./components";
import { StudentData } from "./types";

// interface IStudentDataResponse {
//   sex: number;
//   eyeColour: string;
//   name: string;
//   age: number;
// }

// export async function getStudents(): Promise<StudentData> {
//   const { data } = await axios.get<IStudentDataResponse>(
//     "http://API_URL/endpoint"
//   );

//   const { name, age } = data;

//   return { name, age };
// }

function App(): JSX.Element {
  const students: StudentData[] = [];
  return (
    <div className="App">
      <StudentTable
        rows={[
          {
            id: "45",
            firstName: "test",
            lastName: "last",
            age: 6,
            grade: 1,
            email: "eadwad@sadsadas.com",
          },
        ]}
      />
    </div>
  );
}

export default App;
