const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Copyright © <span id="year">{currentYear}</span> Built With love by
          <span> Yuvraj Gupta</span>
          💘
        </p>
      </div>
    </footer>
  );
};

export default Footer;
