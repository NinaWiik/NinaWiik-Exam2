import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HotelsItem({
  id,
  name,
  image,
  price,
  selfCatering,
  maxGuests,
  description,
}) {
  return (
    <Container>
      <Row className="hotelCard__row">
        <Col className="hotelCard__hotelsItem--col" xs={12} md={6}>
          <img className="hotelCard__col--img" alt="hotels" src={image} />
        </Col>
        <Col className="hotelCard__col--text">
          <h3>{name}</h3>
          <p className="hotelCard__col--paragraph">
            <b>Description:</b> {description}
          </p>
          <p className="hotelCard__col--paragraph">
            <b>Max Guests:</b> {maxGuests}
          </p>
          <p className="hotelCard__col--paragraph">
            <b>Self Catering:</b> {selfCatering ? "Yes" : "No"}
          </p>
          <p className="hotelCard__col--paragraph">
            <b>Price:</b> {price}$
          </p>
          <Link to={`/admin/hotels/edit/${id}`}>
            <Button>Edit</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

HotelsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  selfCatering: PropTypes.bool,
  maxGuests: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default HotelsItem;
