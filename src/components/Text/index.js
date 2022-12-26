import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "sm:text-[21px] md:text-[27px] text-[40px]",
  h3: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  h4: "sm:text-[28px] md:text-[30px] text-[32px]",
  h5: "sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "text-[20px]",
  body1: "text-[18px]",
  body2: "font-normal text-[16px]",
  body3: "text-[14px]",
  body4: "font-normal text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
