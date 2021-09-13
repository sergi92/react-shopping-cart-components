import React from "react";

function Button({ submitButton, children, disabled="false", ...props }) {
  return (
    <button className="btn btn-primary" disabled={disabled} {...props} type={submitButton ? "submit" : "button"}  >
      {children}
    </button>
  );
}

export default Button;
