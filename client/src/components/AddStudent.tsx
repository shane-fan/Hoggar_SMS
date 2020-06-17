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
        width: "335px",
        height: "380px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "relative",
          textAlign: "left",
          top: "15px",
          left: "0px",
          padding: "20px 10px 5px 20px",
          backgroundColor: "#3f51b59c",
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
              padding: "10px",
            }}
          >
            <Form>
              <div>
                <Field
                  name="firstName"
                  placeholder="Ex: John"
                  component={AddStudentField}
                  label="First Name"
                />
              </div>
              <div>
                <Field
                  name="lastName"
                  placeholder="Ex: Doe"
                  component={AddStudentField}
                  label="Last Name"
                />
              </div>
              <div>
                <Field
                  name="age"
                  placeholder="Ex: 3, 4, 5..."
                  component={AddStudentField}
                  label="Age"
                />
              </div>
              <div>
                <Field
                  name="grade"
                  placeholder="Ex: JK, SK, 1..."
                  component={AddStudentField}
                  label="Grade"
                />
              </div>
              <div>
                <Field
                  name="email"
                  placeholder="Ex: name@address.com"
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
