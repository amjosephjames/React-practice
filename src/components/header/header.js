import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "15vh",
        // backgroundColor: "#020c1b",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
        }}
      >
        <div style={{ fontSize: "25px", color: "#020c1b" }}>Crypto</div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            width: "700px",
          }}
        >
          <span style={{ fontSize: "15px", color: "#020c1b" }}>Save</span>
          <span style={{ fontSize: "15px", color: "#020c1b" }}>Invest</span>
          <span style={{ fontSize: "15px", color: "#020c1b" }}>Stories</span>
          <span style={{ fontSize: "15px", color: "#020c1b" }}>FAQs</span>
          <span style={{ fontSize: "15px", color: "#020c1b" }}>Resources</span>
          <span style={{ fontSize: "15px", color: "#020c1b" }}>Sign In</span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "inherit",
              border: "1px solid #020c1b",
              borderRadius: "10px",
              color: "#020c1b",
              width: "150px",
              height: "50px",
              fontSize: "15px",
            }}
          >
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
