const SVGIcon = ({
  width,
  height,
  viewBox,
  content,
  fill = "none",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {content}
    </svg>
  );
};

export default SVGIcon;
