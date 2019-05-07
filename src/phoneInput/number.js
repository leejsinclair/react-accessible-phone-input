import React from "react";
import examples from "libphonenumber-js/examples.mobile.json";
import {
  parsePhoneNumberFromString,
  getExampleNumber
} from "libphonenumber-js";

export default class PhoneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      valid: true
    };

    this.validatePhone = this.validatePhone.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  validatePhone(event) {
    const value = event.target.value;
    this._validate(value);
  }

  updatePhone(event) {
    const value = event.target.value;
    const number = this._validate(value);

    if (number) {
      event.target.value = number;
    }
  }

  _validate(number) {
    // const number = this._getNumeric(value);
    const dialCode = this.props.dialCode || "";
    const ISOCode = this.props.ISOCode || "";
    const numberToCheck =
      (number + "").indexOf("+") === 0 ? number : `${dialCode} ${number}`;

    const phoneNumber = parsePhoneNumberFromString(numberToCheck, ISOCode);
    const valid = phoneNumber ? phoneNumber.isValid() : false;
    if (valid) {
      this.setState({ valid: true });
      this.props.onValid(phoneNumber.number);
      return phoneNumber.number;
    } else {
      this.setState({ valid: false });
      return null;
    }
  }

  _getNumeric(s) {
    return s.replace(/\D/g, "");
  }

  render() {
    let ariaProps = {
      "aria-required": true,
      "aria-label": "Phone number"
    };
    if (!this.state.valid && this.props.ISOCode) {
      const exampleNumber = getExampleNumber(this.props.ISOCode, examples);
      const phoneNumber = parsePhoneNumberFromString(
        exampleNumber.number
      ).format("NATIONAL");

      ariaProps["aria-invalid"] = true;
      ariaProps[
        "aria-label"
      ] = `Invalid phone number it should look somehting like ${phoneNumber}`;
    } else if (!this.state.valid) {
      ariaProps["aria-invalid"] = true;
      ariaProps["aria-label"] = `Invalid phone number please select a country`;
    }
    return (
      <div className="accessible-form-group accessible-phone-number">
        <label>{ariaProps["aria-label"]}</label>
        <input
          type="text"
          onChange={this.validatePhone}
          onBlur={this.updatePhone}
          aria-label="Phone number without international dial code"
          aria-required="true"
          {...ariaProps}
        />
      </div>
    );
  }
}
