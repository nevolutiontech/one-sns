
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './OneSNSForm.css';
import OneSNSShare from '../OneSNSShare'



const OneSNSForm = () => {

  const [inputs, setInputs] = useState({});
  
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      share();
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const share = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
  }

return(
<form onSubmit={handleSubmit}>
  <div>
    <label>First Name</label>
    <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
    <label>Last Name</label>
    <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
  </div>
  <div>
    <label>Email Address</label>
    <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
  </div>
  
  
  <button type="submit">Sign Up</button>
</form>
);

}

OneSNSForm.propTypes = {};

OneSNSForm.defaultProps = {};

export default OneSNSForm;
