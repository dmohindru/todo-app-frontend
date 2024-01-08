import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  styled,
} from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";

interface TodoFormProps {
  isAdd: boolean;
}

interface FormProps {
  title: string;
  description: string;
}

const initialValues: FormProps = {
  title: "",
  description: "",
};

const todoTitleSchema = yup.object().shape({
  title: yup.string().required("todo title is required"),
  description: yup.string().required("todo description is required"),
});

const StyledTypography = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 10,
});

const StyledTextField = styled(TextField)({
  marginBottom: 10,
});

const AddTodoForm: React.FC<TodoFormProps> = ({ isAdd }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: todoTitleSchema,
    onSubmit: (values, { resetForm }: FormikHelpers<FormProps>) => {
      console.log("title ", values.title);
      console.log("description ", values.description);
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
    <Box sx={{ flex: 9, mx: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ my: 5, textTransform: "uppercase", fontWeight: "bold" }}
        >
          {isAdd ? "Add" : "Update"} a todo
        </Typography>
        <form onSubmit={handleSubmit}>
          <Paper elevation={2} sx={{ p: 3, borderRadius: "15px" }}>
            <Box>
              <StyledTypography>Todo Title</StyledTypography>
              <StyledTextField
                fullWidth
                variant="filled"
                label="Todo List Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                size="small"
              />
              <StyledTypography>Todo Description</StyledTypography>
              <StyledTextField
                fullWidth
                variant="filled"
                label="Todo List Title Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                size="small"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                disabled={!(dirty && isValid)}
                href="app-page"
              >
                {isAdd ? "Create" : "Update"} a Todo
              </Button>
            </Box>
          </Paper>
        </form>
      </Box>
    </Box>
  );
};

export default AddTodoForm;
