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
          Hey there,
        </p>
        <Card
          style={{ fontFamily: "Courgette", fontSize: "25px" }}
          bordered={false}
        >
          <Typography.Text>
            I'm a computer science student studying at Uka tarsadia university. I love meeting people.I like to keep my self busy 
             
          </Typography.Text>
        </Card>
      </div>
    </Layout>
  );
};
export default Feature;
