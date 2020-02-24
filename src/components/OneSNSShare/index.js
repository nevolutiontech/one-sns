import {useState} from 'react';
// import PropTypes from 'prop-types';
import './OneSNSShare.css';

const OneSNSShare = (initialValues,callback) => {
  const [inputs, setInputs] = useState({});
  
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
       callback();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

OneSNSShare.propTypes = {};

OneSNSShare.defaultProps = {};

export default OneSNSShare;
