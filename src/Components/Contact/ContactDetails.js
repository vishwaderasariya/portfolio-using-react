import React from "react";
import { Typography, Row, Col } from "antd";
import { InstagramOutlined } from "@ant-design/icons";
// import PhoneIcon from "@material-ui/icons/Phone";

function ContactDetails() {
  return (
    <div>
      <Row gutter={10} align="middle">
        <Col>
          {/* <PhoneFilled style={{ fontSize: 21 }} /> */}
          {/* <PhoneIcon /> */}
        </Col>
        <Col>
          <Typography.Text style={{ fontSize: 21 }}>9173562499</Typography.Text>
        </Col>
      </Row>
      <div>
        <InstagramOutlined />
      </div>
    </div>
  );
}

export default ContactDetails;
