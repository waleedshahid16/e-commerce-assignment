import React, { useState } from "react";
import {
  Button,
  Card,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Eye, EyeOff } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router";
import LogoImage from "../../assets/Logo-new.webp";
import { URLS } from "../../API_ENDPOINTS/API_ENDPOINTS.JS";
import { axiosInstance } from "../../api/axios";

const initialSignInFormValues = {
  email: "",
  password: "",
};

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialSignInFormValues,
    resolver: yupResolver(signInSchema),
  });

  const signInSubmit = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    const resp = await axiosInstance.post(URLS.signIn, payload);
    localStorage.setItem("token", resp.data.access_token)
    console.log(resp);

    // alert("Sign in successful! Check console for data.");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-4">
      <Card
        elevation={3}
        sx={{
          maxWidth: 480,
          width: "100%",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {/* Header Section */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 py-8 px-6">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <img
                src={LogoImage}
                alt="Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
          </div>
          <h1 className="text-white text-2xl font-bold text-center">
            Welcome Back
          </h1>
          <p className="text-teal-50 text-center text-sm mt-2">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleSubmit(signInSubmit)} className="space-y-5">
            {/* email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="email"
                    placeholder="you@example.com"
                    error={!!errors?.email}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#019376",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#019376",
                        },
                      },
                    }}
                  />
                )}
              />
              {errors?.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    error={!!errors?.password}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                        "&:hover fieldset": {
                          borderColor: "#019376",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#019376",
                        },
                      },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                            aria-label="toggle password visibility"
                            sx={{
                              color: "#019376",
                              "&:hover": {
                                backgroundColor: "rgba(1, 147, 118, 0.08)",
                              },
                            }}
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              {errors?.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                textTransform: "none",
                bgcolor: "#019376",
                borderRadius: 2,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(1, 147, 118, 0.3)",
                "&:hover": {
                  bgcolor: "#017a5f",
                  boxShadow: "0 6px 16px rgba(1, 147, 118, 0.4)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s",
              }}
            >
              Sign In
            </Button>

            {/* Sign Up Link */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-teal-600 hover:text-teal-700 hover:underline transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default SignIn;
