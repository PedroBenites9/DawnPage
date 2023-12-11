import React from "react";
import NumberFormat from "react-number-format";

const Amount = ({ value }) => {
  return (
    <NumberFormat
      value={value}
      displayType="text"
      prefix="$"
      decimalSeparator=","
      fixedDecimalScale={true}
      decimalScale={2}
    />
  );
};

export default Amount;
