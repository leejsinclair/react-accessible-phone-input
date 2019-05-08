import React from "react";
import PhoneInput from "../phoneInput";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.numberChange = this.numberChange.bind(this);
  }

  numberChange(number) {
    alert(number);
  }

  render() {
    return (
      <div>
        <p>Test phone input</p>
        <PhoneInput />
      </div>
    );
  }
}
