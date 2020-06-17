import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

function SearchResults(props) {
  return (
    <div>
          <Row>{props.map(employee => () {
          <Col className="col img-fluid"><div><img alt={employee.name} src={employee.image}/></div></Col>
          <Col className="col"><div>{employee.id}</div></Col>
          <Col className="col">{employee.name}<div></div></Col>
          <Col className="col"><div>{employee.phone}</div></Col>
          <Col className="col"><div>{employee.email}</div></Col>}
      </Row>
    </div> 
)
}
export default SearchResults;
