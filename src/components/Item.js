import { useState } from "react";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FaTruck } from "react-icons/fa";

import { formatNumber } from '../helpers/formatNumer'

export const Item = ({ item }) => {  
  const [currentStock, setCurrentStock] = useState(item.stock);

  const restarStock = (event, newStock) => {
    event.preventDefault();

    setCurrentStock((currentStock) => currentStock - newStock);
  };

  return (
    <Card style={{ width: "14rem" }}>
      <Link to={"/itemDetail/" + item.id}>
        <Card.Img variant="top" className="animate__animated animate__fadeIn animate__slow" src={'/assets/img/' + item.image} />
      </Link>
      <Card.Body>
        <hr />
        <Link to={"/itemDetail/" + item.id}>
          <Card.Title>{item.title}</Card.Title>
        </Link>

        <FaTruck />
        <Card.Text className="float-right">{formatNumber(item.price)}</Card.Text>
        <ItemCount
          stock={currentStock}
          initial={1}
          onAdd={restarStock}
          item={item}
        />
      </Card.Body>
    </Card>
  );
};
