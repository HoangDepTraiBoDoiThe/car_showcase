"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyle,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyle}`}
      disabled={false}
      onClick={handleClick}
      type={btnType}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
