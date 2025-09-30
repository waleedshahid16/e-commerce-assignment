import { Button, Card, TextField } from "@mui/material";
import LogoImage from "../../assets/Logo-new.webp";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "./../../../node_modules/@hookform/resolvers/yup/src/yup";

const initialRegistrationFormValues = {
  name: "",
  email: "",
  password: "",
};
const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialRegistrationFormValues,
    resolver: yupResolver(registerSchema),
  });
  const registerSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Card>
        <div className="flex justify-center text-center">
          <div>
            <img src={LogoImage} alt="Logo Image" />
            <p>Register new account</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(registerSubmit)}>
          <div className="flex justify-center">
            <div>
              <label>Name</label> <br />
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField {...field} />}
              />
              <p className="text-red-500">{errors?.name?.message}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <label>Email</label> <br />
              <Controller
                name="email"
                control={control}
                render={({ field }) => <TextField {...field} />}
              />
              <p className="text-red-500">{errors?.email?.message}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <label>Password</label> <br />
              <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField {...field} />}
              />
              <p className="text-red-500">{errors?.password?.message}</p>
            </div>
          </div>
          <div className="flex justify-center my-3">
            <Button
              type="submit"
              variant="contained"
              sx={{ textTransform: "none", bgcolor: "#019376" }}
            >
              Register
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Register;
