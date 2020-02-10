
 import React,{useState} from 'react';
// import PropTypes from 'prop-types';
import './OneSNSForm.css';
// import "../../styles/tailwind.css";
import useOneSNSShare from '../OneSNSShare'


// Making Checkbox as seprate component
const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  // console.log("Checkbox: ", name, checked);
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

const OneSNSForm = () => {
  
  const websites = [
    {
    url: "https://www.facebook.com",
    name: "Facebook",
    },
    {
    url: "https://www.twitter.com",
    name: "Twitter",
    }
  ];
  
  const [checkedItems, setCheckedItems] = useState({});
 
  
  // handle checkbox click event
    const handleCheckClick = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
    console.log("checkedItems: ", checkedItems);
  };
  
  
    //Share to multiple site index in websites  
  const share = () => {
      let data =[]
     Object.keys(checkedItems).map(item => {
       
        data = websites.filter((eachsite) =>
           eachsite.name == item
        ).map(({url}) =>
          console.log(url));
      // todo
      // Change to share api
     });

    alert(`Input 
          Total Checked: ${Object.keys(checkedItems).length} 
          Title: ${inputs.Title} 
          Links: ${inputs.Link}
          Tags: ${inputs.Tags}`
    );
  };
  
  // using useOneSNSShare hook
   const {inputs, handleInputChange, handleSubmit} = useOneSNSShare({Title: '', Links: '', Tags: ''},share);
 
 
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
                    <ul>
                    <li key={socialmedium}>
                    <Checkbox
                      key={socialmedium}
                      name={websites[socialmedium].name}
                      checked={checkedItems[websites[socialmedium].name]}
                      onChange={handleCheckClick}
                    />
                    {websites[socialmedium].name}
                    
                    </li>
                    </ul>
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
