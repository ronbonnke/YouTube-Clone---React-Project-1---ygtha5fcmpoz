import React from "react";
import { ArrowBackIcon, ChevronRightIcon } from "@chakra-ui/icons";
import  { useState } from "react";
import { Link } from "react-router-dom";


function Premium() {
    const [hovered, setHovered] = useState(false);
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
    // border: "2px solid black",
  };

  const headStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
    // justifyContent: 'flex-start',
     // Align content to the left
    marginBottom: '20px', // Added margin-bottom for spacing
    width:"100%"
  };

  const sectionStyle = {
    width:"100%",
    marginLeft:"10px",
    marginBottom: '20px',
    
  };

  const tableBoxStyle = {
    margin: '10px 0',
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid black',
    padding: '10px',
    width: '100%', // Adjusted width
    borderRadius: "5px", // Added border radius
  };

//   const tableRowStyle = {
//     margin: '10px 0',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     border: '1px solid black',
//     width: '100%', // Adjusted width
//   };

  const h3BoxStyle = {
     // border: '1px solid black',
  padding: '10px',
  cursor: 'pointer',
  borderRadius: '5px',
  backgroundColor: hovered ? 'lightblue' : 'lightgray',
  transition: 'background-color 0.3s', // Transition for smooth hover effect

  
  };
  

  return (
    <div className="premium" style={containerStyle}>
      <div className="head" style={headStyle}>
        <Link to={"/"}>
        
        <ArrowBackIcon />
        </Link>
        <h1 style={{ marginLeft: '8px' }}>Choose your Plan</h1>
      </div>
      <div style={sectionStyle}>
        <h1>Youtube Premium</h1>
        <div>Individual Membership</div>
      </div>
      <div style={sectionStyle}>
        <h1>Pre-paid plans</h1>
        <div>
          Pay up front. Top up anytime. We accept many forms of payment,
          including UPI.
        </div>
      </div>
      <div className="table-box" style={tableBoxStyle}>
        <div>
          <h2>
            12-month <span style={{fontSize:'5px', color: 'green'}}>Best Value</span>
          </h2>
          <span>₹1,290.00</span>
        </div>
        <div>
          <ChevronRightIcon style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="table-box" style={tableBoxStyle}>
        <div>
          <h2>
            3-month 
          </h2>
          <span>₹399.00</span>
        </div>
        <div>
          <ChevronRightIcon style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="table-box" style={tableBoxStyle}>
        <div>
          <h2>
            1-month 
          </h2>
          <span>₹139.00</span>
        </div>
        <div>
          <ChevronRightIcon style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div style={sectionStyle}>Subscription plan</div>
      <h6>
        Automatic payments such as credit are required. Billing recurs monthly.
        Cancel anytime.
      </h6>
      <div className="table-box" style={tableBoxStyle}>
        <div>
          Monthly Subscription
          <h1>1 month free</h1>
          <h1>₹129/month after trial</h1>
        </div>
        <div>
          <div style={h3BoxStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
           <h3>1 month free</h3>
          </div>
        </div>
      </div>
      <div>
        <p>Restrictions apply to certain features and vary by device, geographical location of the user, and others<a href="https://support.google.com/youtube/answer/6308116?visit_id=638354716886474255-3394101283&p=offerdetails&hl=en&rd=2" style={{color:"blue"}}> Learn more.</a> <br/>
Only first-time YouTube Red, YouTube Premium, YouTube Music Premium and Google Play Music subscribers are eligible for trials, introductory offers or promotional pricing. Except for Google Workspace Individual edition accounts, Google Workspace accounts are not eligible for trials unless they are signing up for Student subscriptions. Users can only sign up for one trial per payment method.<a href="https://support.google.com/youtube/answer/10324204?hl=en" style={{color:"blue"}}>Learn more here.</a> <br/> </p>
<p>You’ll be automatically charged the price listed unless you cancel during your trial, and then every month starting on the first billing date until you cancel your subscription. Cancel anytime. No refunds or credits for partial billing periods.<a href="https://support.google.com/youtube/answer/10324204?hl=en" style={{color:"blue"}}>Refund policy.</a> <br/> 
Family subscription: Invite up to 5 additional family members to join your Google family group and share your YouTube Music Premium and YouTube Premium subscription. All family members must be age 13 or older, have a Google Account, and reside in the same household as the family manager. Family subscriptions are available in select countries. Learn more
Student subscription: Sign up for either a YouTube Music Premium or YouTube Premium membership as a student and get all the same benefits at a discounted rate. YouTube student memberships are only available to full-time students at higher education institutions in select countries, and eligibility will be verified by a third-party verification service. Learn more
Pre-paid plans: You can make a single-time purchase of a YouTube Premium or YouTube Music Premium individual membership for a fixed time period on a non-recurring basis using the pre-paid plans. Once the time period you purchased ends, the pre-paid plan will automatically terminate and you will lose access to your benefits. To maintain access to your benefits, you will need to make another purchase with options provided by your billing platform or switch to a different plan. You may have up to 24 months of pre-paid access.</p>
<p>You may contact our support team to terminate access to the prepaid plan. Note that once your access is terminated, you will no longer have access to your benefits. No partial refunds are available. Learn more
Pre-paid plans are currently available on Android and Web in select locations. <a href="https://support.google.com/youtube/answer/11417260?hl=en" style={{color:"blue"}}> Learn more.</a><br/> 
Pre-paid plans cannot be combined with other YouTube Premium or YouTube Music Premium offers including family or student subscription and free trials. Pre-paid plans can be subject to limited time introductory offers.
Playback: You must have an Internet connection to stream videos or to download them. Supported devices
By completing your purchase, you verify that you are at least 18 years old and agree to these <a href="https://www.youtube.com/t/terms_paidservice" style={{color:"blue"}}> terms.</a><br/>
Price may vary by user. Google reserves the right to change the price at any time. For accepted payment methods<a href="https://support.google.com/youtube/answer/10239146?hl=en" style={{color:"blue"}}> see here.</a></p>
      </div>
    </div>
  );
}

export default Premium;
