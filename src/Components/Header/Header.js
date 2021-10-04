import React from "react";
import {Col, Container, Image} from "react-bootstrap";

//Лого игры
const Header = () => {
    return (
      <Container pt-3>
        <Col>
          <Image
            src={
              "https://stardewvalleywiki.com/mediawiki/images/6/68/Main_Logo.png"
            }
            alt={"постер"}
            fluid
          />
        </Col>
      </Container>
    );
}

export default Header;