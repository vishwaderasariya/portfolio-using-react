import React from "react";
import Layout from "../../Layout";
import weatherapp from "../../assets/weatherapp.png";
import website from "../../assets/sutraashot.JPG";
import portfolio from "../../assets/portfolio.JPG";
import Card from "@material-ui/core/Card";
import { Typography, CardContent, Grid } from "@material-ui/core";

function ProjectSection() {
  return (
    <div>
      {/* <Layout bg="#fff">
        <div style={{ minHeight: "75vh", padding: "100px 200px" }}>
          <img
            src={weatherapp}
            style={{
              height: 250,
              width: 500,
              boxShadow: "5px 10px 18px #888888",
              marginBottom: "30px",
            }}
          ></img>
          <Typography variant="h3" color="textsecondary">
            Weather Forecast App
          </Typography>
          <Typography variant="h5">
            Created weather forcast app using ReactJs which shows current
            temperature of specific place.
          </Typography>
        </div>
      </Layout> */}
      <Layout bg="#E0EBE8">
        <div
          style={{
            minHeight: "75vh",
            padding: "100px 200px",
            textShadow: "2px 2px 4px #a19f9f",
          }}
        >
          <img
            src={website}
            style={{
              height: 250,
              width: 500,
              boxShadow: "5px 10px 18px #888888",
              marginBottom: "30px",
            }}
          ></img>
          <Typography variant="h3">Ecommerce website</Typography>
          <Typography variant="h5">
            Developed an e-commerce website for selling customized denim jackets
            using wordpress CMS, Elementor page builder, and woo-commerce
            plugin.
          </Typography>
        </div>
      
        <div
          style={{
            minHeight: "75vh",
            padding: "100px 200px",
            textShadow: "2px 2px 4px #a19f9f",
          }}
        >
          <img
            src={weatherapp}
            style={{
              height: 250,
              width: 500,
              boxShadow: "5px 10px 18px #888888",
              marginBottom: "30px",
            }}
          ></img>
          <Typography variant="h3">Weather Forecast App</Typography>
          <Typography variant="h5">
            Created weather forcast app using ReactJs which shows current
            temperature of specific place.
          </Typography>
        </div>
        <div
          style={{
            minHeight: "75vh",
            padding: "100px 200px",
            marginBottom: "30px",
            textShadow: "2px 2px 4px #a19f9f",
          }}
        >
          <img
            src={portfolio}
            style={{
              height: 250,
              width: 500,
              boxShadow: "5px 10px 18px #888888",
              marginBottom: "30px",
            }}
          ></img>
          <Typography variant="h3" color="textsecondary">
            Portfolio{" "}
          </Typography>
          <Typography variant="h5">
            This is the portfolio and it is created using ReactJs and
            material-ui library
          </Typography>
        </div>
      </Layout>
    </div>
  );
}

export default ProjectSection;
