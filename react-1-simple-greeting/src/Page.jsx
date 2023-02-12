import { useState } from "react";
const pageStyle = {
  width: "100%",
  backgroundColor: "white",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
};
const sectionStyle = {
  width: "100%",
};
const catPic = {
  maxHeight: "250px",
  width: "100%",
  objectFit: "cover",
};
const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "grey",
  color: "white",
};

const Page = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setValue("Sveiki atvykę!");
  };

  return (
    <div style={pageStyle}>
      <section style={sectionStyle}>
        <img
          style={catPic}
          src="https://i2-prod.mirror.co.uk/incoming/article25609246.ece/ALTERNATES/s1200d/0_PUSS-IN-BOOTS.jpg"
          alt="cute-cat"
        />
      </section>
      <section>
        <button style={buttonStyle} onClick={handleClick}>
          Spustelk
        </button>
      </section>
      <section>
        <span>{value}</span>
      </section>
    </div>
  );
};

export default Page;
