const footerStyle = {
  width: "100%",
  backgroundColor: "grey",
  height: "100px",
  position: "sticky",
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <span>© 2023 by Your Name. Proudly created with react.</span>
    </footer>
  );
};

export default Footer;
