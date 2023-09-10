import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
        <Button>Contact:mymailforabhi@gmail.com
          [Whatsapp:9899555554]
        </Button>
      </a>
    </div>
  );
};

export default Contact;