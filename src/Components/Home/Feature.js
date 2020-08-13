import React from "react";
import Layout from "../../Layout";
import { Card, Typography } from "antd";
import { List } from "@material-ui/core";

const Feature = () => {
  return (
    <div>
      {" "}
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
              I'm a computer science student studying at Uka tarsadia
              university. Currently looking for working in an industry to
              utilize my technical skills for the growth of the organization as
              well as to improve my present knowledge.
            </Typography.Text>
          </Card>
        </div>
      </Layout>
      <Layout bg="#E0EBE8">
        <div
          style={{
            margin: "50px 200px",
            minHeight: "65vh",
            alignItems: "center",
            justifyContent: "center",
            display: "block",
            padding: "100px 150px",
          }}
        >
          <Typography.Text
            style={{
              fontSize: "4rem",
              fontFamily: "Italianno, sans-serif",
              color: "#3E9C87",
            }}
          >
            Skills
          </Typography.Text>
          <div style={{ fontFamily: "Courgette", fontSize: "25px" }}>
            <Typography>
              Programming and scripting language: C, C++, Java, Python, HTML,
              CSS, Javascript
            </Typography>
            <Typography>
              Libraries and Frameworks: ReactJS, Ant Design, MaterialUI, Apollo
              Client
            </Typography>
            <Typography>CMS: Wordpress, Strapi</Typography>
            <Typography>IDEs: Android Studio, XCode</Typography>
            <Typography>Query languages: GraphQL, SQL</Typography>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Feature;
