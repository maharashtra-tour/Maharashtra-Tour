import React from "react";

const CustomInput = ({
  type,
  placeholder,
  name,
  className,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: {
  type: string;
  placeholder: string;
  name: string;
  className: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  error: any;
  touched: any;
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && touched ? (
        <p className="text-[#dc2626] text-left ml-5 text-sm">{error}</p>
      ) : null}
    </div>
  );
};

export default CustomInput;
