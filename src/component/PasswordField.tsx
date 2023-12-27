import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

interface PasswordFieldProps {
  name: string;
  label: string;
  value: string;
  onBlur:
    | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error: boolean;
  helperText: React.ReactNode;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  name,
  label,
  value,
  onBlur,
  onChange,
  error,
  helperText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const adornment = (
    <InputAdornment position="end">
      <IconButton edge="end" onClick={handleTogglePassword}>
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <TextField
      label={label}
      name={name}
      type={showPassword ? "text" : "password"}
      value={value}
      variant="filled"
      fullWidth
      size="small"
      onBlur={onBlur}
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: adornment,
      }}
    />
  );
};

export default PasswordField;
