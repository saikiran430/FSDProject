import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "bg-transparent border border-bluegray_100 border-solid",
};

const sizes = {
  sm: "sm:pb-[18px] md:pb-[24px] pb-[35px] sm:pt-[12px] md:pt-[16px] pt-[24px] sm:px-[15px] md:px-[16px] px-[24px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className}  ${variants[variant] || ""} ${
            sizes[size] || ""
          }`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(["OutlineBluegray100"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  variant: "OutlineBluegray100",
  size: "sm",
};
export { TextArea };
