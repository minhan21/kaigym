import { object, string } from "yup";

export const loginValidate = object().shape({
  email: string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/(?=.*[0-9])/, "Password must contain a number")
    .matches(/(?=.*[a-z])/, "Password must contain a lowercase letter")
    .matches(/(?=.*[A-Z])/, "Password must contain an uppercase letter")
    .matches(/(?=.*[!@#$%^&*])/, "Password must contain a special character"),
});
