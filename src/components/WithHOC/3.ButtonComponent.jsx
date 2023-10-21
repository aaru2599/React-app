const ButtonComponent = ({ label, width, color, borderRadius, padding, height, btnBackgroundColor, btnBorder
}) => {
  return <button
    style={{
      width: `${width}rem`,
      color, borderRadius: `${borderRadius}px`,
      padding: `${padding}px`,
      height: `${height}rem`,
      backgroundColor: btnBackgroundColor,
      border: btnBorder,
    }}>{label}</button>

}

ButtonComponent.defaultProps = {
  color: "white",
  // border: "none",
  width: 2.5,
  borderRadius: 50,
  padding: 5,
  btnBackgroundColor: "gray",
  height: 2.5

}
export default ButtonComponent