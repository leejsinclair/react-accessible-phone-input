import React from "react";
import CountrySelect from "./countries";
import PhoneNumber from "./number";
import "./base.css";

export default class PhoneInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {}
    };

    this.selectCountry = this.selectCountry.bind(this);
    this.onValid = this.onValid.bind(this);
  }

  selectCountry(country) {
    this.setState({ country: country });
  }

  onValid(phoneNumber) {
    this.setState({ final: phoneNumber });
    this.props.onChange(phoneNumber);
  }

  render() {
    return (
      <div className="accessible-phone-input">
        <CountrySelect onchange={this.selectCountry} />
        <div className="accessible-form-group international-dial-code">
          <label>Int.</label>
          <span aria-label="International dial code">
            {this.state.country.dialCode}
          </span>
        </div>
        <PhoneNumber
          ISOCode={this.state.country.ISOCode}
          dialCode={this.state.country.dialCode}
          onValid={this.onValid}
        />
      </div>
    );
  }
}
