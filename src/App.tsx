import React, { useRef } from "react";
// import ReactDOM from "react-dom";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { Form, FormControl, FormLabel } from "react-bootstrap";
//import "./styles.css";

const App: React.FC = () => {
  const { control, handleSubmit, watch, errors } = useForm();
  const password = useRef({});
  password.current = watch("password");
  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data));
  };
  return (
    <Form onSubmit={(e: any) => e.preventDefault()}>
      <FormLabel>Password</FormLabel>
      <Controller
        as={<FormControl />}
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        }}
      />
      <ErrorMessage name="password" errors={errors} />

      <FormLabel>Repeat password</FormLabel>
      <Controller
        as={<FormControl />}
        name="password_repeat"
        control={control}
        rules={{
          validate: (value: string) =>
            value === password.current || "The passwords do not match"
        }}
      />
      <ErrorMessage name="password_repeat" errors={errors} />

      <input type="submit" onClick={handleSubmit(onSubmit)} />
    </Form>
  );
}

export default App;
