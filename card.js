import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CardComp = () => {
  return (
    <div id="itm">
      <Card>
        <CardImg
          top
          width="15%"
          src="https://i.insider.com/5cdb17ae021b4c57092bdbc4?width=1100&format=jpeg&auto=webp"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">The Silent Patient</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Alex Michaelides
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComp;
