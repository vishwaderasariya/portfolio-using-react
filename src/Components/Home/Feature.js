import React from "react";
import Layout from "../../Layout";
import { Card, Typography } from "antd";

const Feature = () => {
  return (
    <Layout bg="#0000">
      <div
        style={{
          margin: "50px 200px",
          minHeight: "60vh",
          alignItems: "center",
          justifyContent: "center",
          display: "block",
        }}
      >
        <p
          style={{
            fontSize: "4rem",
            fontFamily: "Italianno, sans-serif",
            color: "#3E9C87",
          }}
        >
          Hi,
        </p>
        <Card
          style={{ fontFamily: "Courgette", fontSize: "25px" }}
          bordered={false}
        >
          <Typography.Text>
            I'm a Computer science student by profession. I am a curious web
            designer living and learning in navsari.
          </Typography.Text>
        </Card>
      </div>
    </Layout>
  );
};
export default Feature;
