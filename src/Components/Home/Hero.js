import React from "react";
import Layout from "../../Layout";
import hero from "../../hero.svg";

export default function Hero() {
  return (
    <Layout bg="#E0EBE8">
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={hero}
          allt="hero section"
          style={{
            height: "40%",
            width: "40%",
          }}
        ></img>
        <div>
          <p
            style={{
              fontSize: "5rem",
              fontFamily: `'Rouge Script', cursive`,
              color: "#3E9C87",
              margin: "auto 50px",
            }}
          >
            I'm Vishwa.
          </p>
          <p
            style={{
              fontSize: "1rem",
              fontFamily: "Roboto, sans-serif",
              color: "#3E9C87",
            }}
          >
            a computer engineer.
          </p>
        </div>
      </div>
    </Layout>
  );
}
