import React from "react";
import { Card, Col, Row, Typography } from "antd";
import Layout from "../../Layout";

function ProjectSection() {
  return (
    <div>
      <Layout bg="#E0EBE8">
        <Row gutter={20} align="middle" style={{ minHeight: "80vh" }}>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
            <Card
              hoverable
              headStyle={{ backgroundColor: "#7db8b4" }}
              bodyStyle={{
                backgroundColor: "#7db8b4",
              }}
              title="Swachhbin Project"
            >
              <Typography.Text>
                Developed an android application for disposal management of
                solid waste adapting some reusable principles.
              </Typography.Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
            <Card
              hoverable
              title="Weather Forecast app"
              headStyle={{ backgroundColor: "#7db8b4" }}
              bodyStyle={{
                backgroundColor: "#7db8b4",
              }}
            >
              <Typography.Text>
                Created weather forcast app using ReactJs which shows current
                temperature of specific place.
              </Typography.Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
            <Card
              hoverable
              title="Portfolio using React"
              headStyle={{ backgroundColor: "#7db8b4" }}
              bodyStyle={{
                backgroundColor: "#7db8b4",
              }}
            >
              <Typography.Text>
                This is the Portfolio i've created using
                ReactJS(create-react-app) and Ant design library.
              </Typography.Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
            <Card
              hoverable
              title="The sutraa Website"
              headStyle={{ backgroundColor: "#7db8b4" }}
              bodyStyle={{
                backgroundColor: "#7db8b4",
              }}
            >
              <Typography.Text>
                Developed an e-commerce website for selling denim jackets using
                wordpress CMS, Elementor page builder, and woo-commerce plugin.
              </Typography.Text>
            </Card>
          </Col>
          {/* <Col xs={24} sm={12} md={12} lg={8} xl={6} xxl={6}>
            <Card
              hoverable
              title="The sutraa website"
              headStyle={{ backgroundColor: "#679895" }}
              bodyStyle={{
                backgroundColor: "#679895",
              }}
            >
              <Typography.Text>
                Developed an e-commerce website for selling customized denim
                jackets using wordpress CMS, Elementor page builder, and
                woo-commerce plugin.
              </Typography.Text>
            </Card>
          </Col> */}
        </Row>
      </Layout>
    </div>
  );
}

export default ProjectSection;
