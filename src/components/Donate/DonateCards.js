
import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import CopyToClipboard from 'react-copy-to-clipboard';

function DonateCards(props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        // You can include additional actions after copying if needed
        // For example, display a notification.
    };
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <CopyToClipboard text={props.walletAddress} onCopy={handleCopy}>
          <Button variant="primary" style={{ fontSize: '14px' }}>
              {props.walletAddress}
          </Button>
        </CopyToClipboard>
          
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/*<Button variant="primary" href={props.ghLink} target="_blank">*/}
        {/*  <BsGithub /> &nbsp;*/}
        {/*  {props.isBlog ? "Blog" : "GitHub"}*/}
        {/*</Button>*/}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default DonateCards;
