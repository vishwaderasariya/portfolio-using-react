import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import ListItemText from "@material-ui/core/ListItemText";
import Layout from "../../Layout";

function ContactDetails() {
  return (
    <Layout bg="#E0EBE8">
      <div
        style={{
          minHeight: "90vh",
          padding: "100px 200px",
        }}
      >
        <List>
          <ListItem>
            <PhoneIcon />
            <ListItemText
              primary="+91 9173562499"
              style={{ margin: "0 20px" }}
            />
          </ListItem>
          <ListItem>
            <RoomIcon />
            <ListItemText
              primary=" Navsari, Gujarat"
              style={{ margin: "0 20px" }}
            />
          </ListItem>
          <ListItem>
            <EmailIcon />
            <ListItemText
              primary=" vishwaderasariyawork@gmail.com"
              style={{ margin: "0 20px" }}
            />
          </ListItem>
          <ListItem>
            <InstagramIcon />

            <ListItemText
              primary=" vishwaderasariya"
              style={{ margin: "0 20px" }}
            />
          </ListItem>
          <ListItem>
            <LinkedInIcon />
            <Link
              href="https://www.linkedin.com/in/vishwa-derasariya-abbba317b/"
              color="inherit"
            >
              <ListItemText
                primary=" https://www.linkedin.com/in/vishwa-derasariya-abbba317b/"
                style={{ margin: "0 20px" }}
              />
            </Link>
          </ListItem>
        </List>
      </div>
    </Layout>
  );
}

export default ContactDetails;
