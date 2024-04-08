function Button({
  children,
  className,
  disabled,
  type,
}: {
  children: React.ReactNode;
  className: string;
  disabled: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}) {
  return (
    <button
      disabled={disabled ? true : false}
      className={className}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
