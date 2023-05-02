type InputType = "text" | "email" | "password";

interface AuthInputProps {
  label: string;
  value: any;
  type: InputType;
  required: boolean;
  render?: boolean;
  valueChange: (newValue: any) => void;
}

export function AuthInput({
  label,
  value,
  type,
  required,
  render = true,
  valueChange,
}: AuthInputProps) {
  return render ? (
    <div>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type={type ?? "text"}
        value={value}
        name={label.toLowerCase()}
        id={label.toLowerCase()}
        required={required}
        onChange={(e) => valueChange?.(e)}
      />
    </div>
  ) : null;
}
