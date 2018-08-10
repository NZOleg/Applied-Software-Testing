import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestModule extends Component {


	checkValidity = () => {

    let isValid = true;


		if (!(this.props.customerType === "normal"
			|| this.props.customerType === "preferred")){
			isValid = false;
		}

		if (!Number.isInteger(this.props.visits) || this.props.visits < 0){
		  isValid = false;
    }

    if (this.props.prediscountPrice <= 0 || !Number.isFinite(this.props.prediscountPrice)){
      isValid = false;
    }

    return isValid;
  };

  render() {
    let discount;

    if (!this.checkValidity()){
      return <div className="discount">error</div>;
    }

    if (this.props.customerType === "normal"){
      if (this.props.prediscountPrice >= 50){
        discount = 10
      }else{
        discount = 0
      }
    }else{
      if (this.props.visits > 3){
				if (this.props.prediscountPrice >= 50){
					discount = 20
				}else{
					discount = 15
				}
      }else{
				if (this.props.prediscountPrice >= 50){
					discount = 15
				}else{
					discount = 10
				}
      }
    }




    return <div className="discount">{discount}</div>;
  }
}
TestModule.propTypes  = {
  customerType: PropTypes.string.isRequired,
  visits: PropTypes.number.isRequired,
	prediscountPrice: PropTypes.number.isRequired
};

export default TestModule;
