import { memo } from "react";

export const ColoredMessage = memo((props) => {
  console.log("ColoredMessage");
  const contentStyle = {
    color: props.color,
    fontSize: "20px"
  };

  return (
    <>
      <p style={contentStyle}>{props.children}</p>
    </>
  );
});
