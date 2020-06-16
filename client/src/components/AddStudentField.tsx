import * as React from "react";
import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";

interface IStudentParams extends FieldProps {
  label: string;
  placeholder: string;
}

export default function AddStudentField({
  label,
  placeholder,
  field,
}: IStudentParams): JSX.Element {
  return <TextField label={label} placeholder={placeholder} {...field} />;
}
