import React from "react";

const Body = () => {
  const text = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "400px",
    width: "450px",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "85vh",
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
          height: "90%",
        }}
      >
        <div style={text}>
          <h1
            style={{
              fontSize: "50px",
              color: "#020c1b",
              fontWeight: "bold",
            }}
          >
            The Better Way to Save and Invest
          </h1>

          <p
            style={{
              fontSize: "15px",
              color: "#020c1b",
              width: "100%",
              marginBottom: "40px",
            }}
          >
            Piggyvest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease
          </p>
          <div
            style={{
              width: "150px",
              height: "50px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              //   backgroundColor: "#020c1b",
              fontSize: "15px",
              border: "1px solid #020c1b",
              color: "#020c1b",
            }}
          >
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
