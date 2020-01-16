import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormLabel } from "react-bootstrap";
//import "./styles.css";

const App: React.FC = () => {
  const { register, handleSubmit, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data));
  };
  return (
    <Form onSubmit={(e: any) => e.preventDefault()}>
      <FormLabel>Password</FormLabel>
      <FormControl
        name="password"
        ref={register({
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
      />
      <FormLabel>Repeat password</FormLabel>
      <FormControl
        name="password_repeat"
        ref={register({
          validate: (value: string) =>
            value === password.current || "The passwords do not match"
        })}
      />
      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </Form>
  );
}

export default App;
