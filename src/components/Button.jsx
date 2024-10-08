const Button = ({
  href,
  target = "_self",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-7 py-3 text-base font-medium transition ease-in-out";

  //   const variants = {
  //     primary: "bg-primary text-white hover:bg-blue-dark hover:border-blue-dark",
  //     secondary: "bg-secondary text-white hover:bg-[#0BB489]",
  //     transparent: "bg-white/[0.12] text-white hover:bg-white hover:text-dark",
  //     white: "bg-white text-dark hover:bg-gray-200 hover:text-body-color",
  //   };

  const finalClassName = `${baseStyles}  ${className}`;

  return (
    <a href={href} target={target} className={finalClassName} {...props}>
      {children}
    </a>
  );
};

export default Button;
