import * as React from "react";
import { Button, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import AddStudentField from "./AddStudentField";

export interface Values {
  firstName: string;
  lastName: string;
  age: number;
  grade: string;
  email: string;
}

export interface IAddStudentProps {
  onSubmit: (values: Values) => void;
}

export function AddStudent({ onSubmit }: IAddStudentProps): JSX.Element {
  const initialFormValues: Values = {
    firstName: "",
    lastName: "",
    age: 0,
    grade: "",
    email: "",
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "auto",
        position: "relative",
        top: "100px",
        width: "350px",
        height: "380px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "relative",
          textAlign: "left",
          top: "20px",
          left: "20px",
          padding: "15px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add a Student
        </Typography>
      </div>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {() => (
          <div
            style={{
              position: "relative",
              left: "70px",
            }}
          >
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
              <div
                style={{
                  position: "relative",
                  textAlign: "right",
                  paddingTop: "20px",
                  left: "-85px",
                }}
              >
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
