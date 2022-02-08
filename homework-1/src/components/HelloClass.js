import React from "react";
import { getStringFromDate } from "./helper";

class HelloClass extends React.Component {
  render() {
    return (
      <>
        <p>
          Привет <b>{this.props.name}</b>
        </p>
        <p>Дата регистрации: {getStringFromDate(this.props.date)}</p>
      </>
    );
  }
}

export default HelloClass;
