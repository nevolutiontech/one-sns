
import React,{useState} from 'react';
// import PropTypes from 'prop-types';
import './OneSNSForm.css';
// import "../../styles/tailwind.css";
import useOneSNSShare from '../OneSNSShare';

// Making Checkbox as seprate component
const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  // console.log("Checkbox: ", name, checked);
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

const OneSNSForm = () => {
    var args = {};

  let websites = [
    {
    url: "http://www.facebook.com/",
    name: "facebook",
    },
    {
    url: "https://twitter.com/",
    name: "twitter",
    },
    {
    url:
      "https://www.linkedin.com/",
      name : "linkedin"
    },
    {
    url:
      "https://www.pinterest.com/",
      name : "pinterest"
    }
  ];
  const GetSocialMediaSiteLinks_WithShareLinks = (args) => {

    const url = encodeURIComponent(args.url);
    const title = encodeURIComponent(args.title);
    const image = encodeURIComponent(args.image);
    const desc = encodeURIComponent(args.desc);
    const app_id = encodeURIComponent(args.appid);
    const redirect_url = encodeURIComponent(args.redirecturl);
    const via = encodeURIComponent(args.via);
    const hash_tags = encodeURIComponent(args.hash_tags);
    const provider = encodeURIComponent(args.provider);
    const language = encodeURIComponent(args.language);
    const user_id = encodeURIComponent(args.userid);
    const category = encodeURIComponent(args.category);
    const phone_number = encodeURIComponent(args.phonenumber);
    const email_address = encodeURIComponent(args.emailaddress);
    const cc_email_address = encodeURIComponent(args.ccemailaddress);
    const bcc_email_address = encodeURIComponent(args.bccemailaddress);

    var text = title;

    return {
      "add.this": "http://www.addthis.com/bookmark.php?url=" + url,
      blogger:
        "https://www.blogger.com/blog-this.g?u=" +
        url +
        "&n=" +
        title +
        "&t=" +
        desc,
      buffer: "https://buffer.com/add?text=" + text + "&url=" + url,
      diaspora:
        "https://share.diasporafoundation.org/?title=" + title + "&url=" + url,
      digg: "http://digg.com/submit?url=" + url + "&title=" + text,
      douban: "http://www.douban.com/recommend/?url=" + url + "&title=" + text,
      email: "mailto:" + email_address + "?subject=" + title + "&body=" + desc,
      evernote:
        "http://www.evernote.com/clip.action?url=" + url + "&title=" + text,
      getpocket: "https://getpocket.com/edit?url=" + url,
      facebook: "http://www.facebook.com/sharer.php?u=" + url,
      flattr:
        "https://flattr.com/submit/auto?user_id=" +
        user_id +
        "&url=" +
        url +
        "&title=" +
        title +
        "&description=" +
        text +
        "&language=" +
        language +
        "&tags=" +
        hash_tags +
        "&hidden=HIDDEN&category=" +
        category,
      flipboard:
        "https://share.flipboard.com/bookmarklet/popout?v=2&title=" +
        text +
        "&url=" +
        url,
      gmail:
        "https://mail.google.com/mail/?view=cm&to=" +
        email_address +
        "&su=" +
        title +
        "&body=" +
        url +
        "&bcc=" +
        bcc_email_address +
        "&cc=" +
        cc_email_address,
      "google.bookmarks":
        "https://www.google.com/bookmarks/mark?op=edit&bkmk=" +
        url +
        "&title=" +
        title +
        "&annotation=" +
        text +
        "&labels=" +
        hash_tags +
        "",
      instapaper:
        "http://www.instapaper.com/edit?url=" +
        url +
        "&title=" +
        title +
        "&description=" +
        desc,
      "line.me": "https://lineit.line.me/share/ui?url=" + url + "&text=" + text,
      linkedin:
        "https://www.linkedin.com/shareArticle?mini=true&url=" +
        url +
        "&title=" +
        title +
        "&summary=" +
        text +
        "&source=" +
        provider,
      livejournal:
        "http://www.livejournal.com/update.bml?subject=" +
        text +
        "&event=" +
        url,
      "hacker.news":
        "https://news.ycombinator.com/submitlink?u=" + url + "&t=" + title,
      "ok.ru":
        "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=" + url,
      pinterest: "http://pinterest.com/pin/create/button/?url=" + url,
      qzone:
        "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url,
      reddit: "https://reddit.com/submit?url=" + url + "&title=" + title,
      renren:
        "http://widget.renren.com/dialog/share?resourceUrl=" +
        url +
        "&srcUrl=" +
        url +
        "&title=" +
        text +
        "&description=" +
        desc,
      skype: "https://web.skype.com/share?url=" + url + "&text=" + text,
      sms: "sms:" + phone_number + "?body=" + text,
      "telegram.me":
        "https://t.me/share/url?url=" +
        url +
        "&text=" +
        text +
        "&to=" +
        phone_number,
      threema: "threema://compose?text=" + text + "&id=" + user_id,
      tumblr:
        "https://www.tumblr.com/widgets/share/tool?canonicalUrl=" +
        url +
        "&title=" +
        title +
        "&caption=" +
        desc +
        "&tags=" +
        hash_tags,
      twitter:
        "https://twitter.com/intent/tweet?text=" +
        text +
        "&url=" +
        url +
        "&hashtags=" +
        hash_tags,
      vk:
        "http://vk.com/share.php?url=" +
        url +
        "&title=" +
        title +
        "&comment=" +
        desc,
      weibo:
        "http://service.weibo.com/share/share.php?url=" +
        url +
        "&appkey=&title=" +
        title +
        "&pic=&ralateUid=",
      xing: "https://www.xing.com/spi/shares/new?url=" + url,
      yahoo:
        "http://compose.mail.yahoo.com/?to=" +
        email_address +
        "&subject=" +
        title +
        "&body=" +
        text
    };
  }
  
  const [checkedItems, setCheckedItems] = useState({});
  // handle checkbox click event
    const handleCheckClick = event => {
        setCheckedItems({
          ...checkedItems,
          [event.target.name]: event.target.checked,
        });
        // console.log("checkedItems: ", checkedItems);
  };
  
  

    //Share to multiple site index in websites  
  const share = () => {
    const keys = Object.keys(checkedItems)
    
    //assigning value to args
    args.title = inputs.Title
    args.text = inputs.Text
    args.url = inputs.Link
    args.hash_tags = inputs.Tags

    const socialmediaurls = GetSocialMediaSiteLinks_WithShareLinks(args);

    // filter the checked value i.e true only
    const filterItem = keys.filter(checked => checkedItems[checked])

    // Get url 
    // *** Note : need refactoring
    filterItem.map(item => {
      websites.filter(eachsite => {
         return (eachsite.name === item );       
      }).map(({url}) => {
         return (
          // alert(socialmediaurls[item]),
           window.open(socialmediaurls[item])
           
         );
        });
     });
   
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
