export const Spacer = ({ size, axis, style = {}, ...props }) => {
  const height = size;
  return (
    <span
      style={{
        display: 'block',
        height,
        minHeight: height,
        ...style,
      }}
      {...props}
    />
  );
};
