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

interface LoginFormProps {
  email: string;
  password: string;
}

const initialValues: LoginFormProps = {
  email: "",
  password: "",
};

const userLoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Valid email required")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 10,
});

const StyledTextField = styled(TextField)({
  marginBottom: 10,
});

const UserLogin: React.FC = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: userLoginFormSchema,
    onSubmit: (values, { resetForm }: FormikHelpers<LoginFormProps>) => {
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
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Paper elevation={2} sx={{ p: 3, borderRadius: "15px" }}>
          <StyledTypography>Email</StyledTypography>
          <StyledTextField
            fullWidth
            variant="filled"
            label="email"
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
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={!(dirty && isValid)}
          >
            Login
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default UserLogin;
