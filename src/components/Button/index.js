import React from "react";
import PropTypes from "prop-types";

const shapes = { icbCircleBorder30: "rounded-radius30" };
const variants = {
  FillRedA200: "bg-red_A200 text-white_A700",
  OutlineBluegray900:
    "bg-bluegray_900 border-2 border-bluegray_900 border-solid",
  OutlineGray50: "border-2 border-gray_50 border-solid text-gray_50",
  FillBluegray900: "bg-bluegray_900",
  OutlineBluegray900_1:
    "border-2 border-bluegray_900 border-solid text-bluegray_900",
  OutlineBlack900: "border border-black_900 border-solid text-black_900",
  FillYellow100: "bg-yellow_100 text-bluegray_900",
  icbFillGray51: "bg-gray_51",
};
const sizes = {
  sm: "p-[3px]",
  md: "sm:p-[4px] md:p-[6px] p-[9px]",
  lg: "p-[13px] sm:p-[6px] md:p-[8px]",
  xl: "md:p-[11px] p-[17px] sm:px-[15px] sm:py-[9px]",
  "2xl": "md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px]",
  "3xl": "md:p-[17px] p-[26px] sm:px-[15px] sm:py-[13px]",
  smIcn: "md:p-[10px] p-[15px] sm:p-[7px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbCircleBorder30"]),
  variant: PropTypes.oneOf([
    "FillRedA200",
    "OutlineBluegray900",
    "OutlineGray50",
    "FillBluegray900",
    "OutlineBluegray900_1",
    "OutlineBlack900",
    "FillYellow100",
    "icbFillGray51",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "3xl", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillBluegray900",
  size: "sm",
};

export { Button };
