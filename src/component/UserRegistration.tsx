import {
  Box,
  Typography,
  Paper,
  styled,
  TextField,
  Button,
} from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import PasswordField from "./PasswordField";

interface RegistartionFormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: RegistartionFormProps = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const registrationFormSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Valid email required")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password is required"),
});

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 10,
});

const StyledTextField = styled(TextField)({
  marginBottom: 10,
});

const UserRegistration: React.FC = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: registrationFormSchema,
    onSubmit: (values, { resetForm }: FormikHelpers<RegistartionFormProps>) => {
      console.log("values", values);
      resetForm();
    },
  });

  // destructure formik object
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isValid,
    dirty,
  } = formik;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ my: 3, fontWeight: "bold" }}>
        User Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: "15px" }}>
          <StyledTypography>First Name</StyledTypography>
          <StyledTextField
            fullWidth
            variant="filled"
            label="First Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.firstName}
            name="firstName"
            error={!!touched.firstName && !!errors.firstName}
            helperText={touched.firstName && errors.firstName}
            size="small"
          />
          <StyledTypography>Last Name</StyledTypography>
          <StyledTextField
            fullWidth
            variant="filled"
            label="Last Name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lastName}
            name="lastName"
            error={!!touched.lastName && !!errors.lastName}
            helperText={touched.lastName && errors.lastName}
            size="small"
          />
          <StyledTypography>Email</StyledTypography>
          <StyledTextField
            fullWidth
            variant="filled"
            label="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            name="email"
            error={!!touched.email && !!errors.email}
            helperText={touched.email && errors.email}
            size="small"
          />
          <StyledTypography>Password</StyledTypography>
          <PasswordField
            onBlur={handleBlur}
            onChange={handleChange}
            name="password"
            label="Password"
            value={values.password}
            error={!!touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
          <StyledTypography>Confirm Password</StyledTypography>
          <PasswordField
            onBlur={handleBlur}
            onChange={handleChange}
            name="confirmPassword"
            label="Confirm Password"
            value={values.confirmPassword}
            error={!!touched.confirmPassword && !!errors.confirmPassword}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={!(dirty && isValid)}
          >
            Register
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default UserRegistration;
