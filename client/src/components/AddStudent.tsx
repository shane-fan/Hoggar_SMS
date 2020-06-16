import * as React from "react";
import { Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import AddStudentField from "./AddStudentField";

interface Values {
  firstName: string;
  lastName: string;
  age: number;
  grade: string;
  email: string;
}

interface IAddStudentProps {
  onSubmit: (values: Values) => void;
}

export default function AddStudent({
  onSubmit,
}: IAddStudentProps): JSX.Element {
  const initialFormValues: Values = {
    firstName: "",
    lastName: "",
    age: 0,
    grade: "",
    email: "",
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name="firstName"
              placeholder="First Name"
              component={AddStudentField}
              label="First Name"
            />
          </div>
          <div>
            <Field
              name="lastName"
              placeholder="Last Name"
              component={AddStudentField}
              label="Last Name"
            />
          </div>
          <div>
            <Field
              name="age"
              placeholder="Age"
              component={AddStudentField}
              label="Age"
            />
          </div>
          <div>
            <Field
              name="grade"
              placeholder="Grade"
              component={AddStudentField}
              label="Grade"
            />
          </div>
          <div>
            <Field
              name="email"
              placeholder="E-mail"
              component={AddStudentField}
              label="E-mail"
            />
          </div>
          <Button type="submit">Submit</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
}
