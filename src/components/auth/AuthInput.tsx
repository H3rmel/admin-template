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
    <div className="flex flex-col">
      <label htmlFor={label.toLowerCase()} className="text-lg">
        {label}
      </label>
      <input
        className="px-4 py-2 rounded-md bg-light-500 dark:bg-dark-500 text-dark-500 dark:text-light-500 hover:shadow-primary-300 hover:shadow-hover duration-300"
        type={type ?? "text"}
        value={value}
        name={label.toLowerCase()}
        id={label.toLowerCase()}
        required={required}
        autoComplete="false"
        onChange={(e) => valueChange?.(e)}
      />
    </div>
  ) : null;
}
