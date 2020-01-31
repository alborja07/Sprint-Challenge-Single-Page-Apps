import React from "react";
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';



export default function CharacterCard({ character }) {
  const { name, species, gender, origin, image } = character;
  return (
    <div>
      
    <Col xs="12" md="6" xl="3">
      <Card>
        <CardImg top width="50%" src={image} alt="Card image cap" />
        <CardBody>
        <CardTitle>{name}</CardTitle>

        <CardSubtitle>
            Species: <em>{species}</em>
          </CardSubtitle>
          <div>
            Gender: <strong>{gender}</strong>
          </div>
          <div>
            Origin: {origin.name}
          </div>
          {/* <div>
            <img src={image}/>
          </div> */}
          </CardBody>
      </Card>
      </Col>
      
    </div>
  );
};
