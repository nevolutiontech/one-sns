
import React from 'react';
// import PropTypes from 'prop-types';
import './OneSNSForm.css';
// import "../../styles/tailwind.css";
import useOneSNSShare from '../OneSNSShare'



const OneSNSForm = () => {
  
  const share = () => {
    alert(`Input 
    Title: ${inputs.Title} 
    Links: ${inputs.Link}
    Tags: ${inputs.Tags}`);
    
  }
  
  const {inputs, handleInputChange, handleSubmit} = useOneSNSShare(share);
  const websites = [{
    url: "https://www.facebook.com",
    name: "Facebook"
  },
  {
    url: "https://www.twitter.com",
    name: "Twitter"
  }
];

return(
  <div >
  <form onSubmit={handleSubmit}>
  <div className="row">
    <label>Title</label>
    <input type="text" name="Title" onChange={handleInputChange} value={inputs.Title} required />
    </div>
    <div className="row">
    <label>Link</label>
    <input type="text" name="Link" onChange={handleInputChange} value={inputs.Link} required />
  </div>
  <div className="row">
    <label>Tags</label>
    <input type="text" name="Tags" onChange={handleInputChange} value={inputs.Tags} required />
  </div>
  <div className="row">
  {Object.keys(websites).map(socialmedium => {
          // window.open(websites[socialmedium].url);
        return (
          <li key={socialmedium}>
          <input key={socialmedium} 
            // onClick={props.handleCheckChieldElement} 
            type="checkbox" 
            checked={false} 
            value= {websites[socialmedium].name}
            
           />
           
          </li>
        );
      })
      }

  </div>
  {/* <button type="submit">Sign Up</button> */}
  <div className="row">
      <input type="submit" value="Submit"/>
    </div>

</form>

</div>
);

}

// OneSNSForm.propTypes = {};

// OneSNSForm.defaultProps = {};

export default OneSNSForm;
