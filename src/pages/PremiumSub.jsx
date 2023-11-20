import React from 'react';
import  { useState } from "react";
import { Link } from 'react-router-dom';

function PremiumSub() {
    const [hovered, setHovered] = useState(false);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    
 
  };

  const descStyle = {
    textAlign: 'center', 
    marginTop: '20px',
    marginBottom: '60px',
    fontSize: '30px',
  };

  const h4BoxStyle = {
 padding: '14px',
 cursor: 'pointer',
 borderRadius: '28px',
 backgroundColor: hovered ? '#034d9e' :  '#065fd4',
 transition: 'background-color 0.3s', 
 color: 'white',
 marginBottom: '60px',
 };

const conStyle = {
    fontSize: '30px',
    alignItems: 'center',
    marginBottom: '20px',
    
}

const tanStyle = {
    fontSize: '30px',
    alignItems: 'center',
    fontSize: '15px',
    marginTop: '20px',
}

  return (
    <div className="presub" style={containerStyle}>
      <div>
        <img
          src="https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_logo_premium_desktop_552x71.png"
          alt=""
        />
      </div>

      <div className="desc" style={descStyle}>
        YouTube and YouTube Music ad-free, offline, and in the background
      </div>

      <div>
          <div style={h4BoxStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Link to={"/premium"}> <h4>Get YouTube Premium</h4></Link>
          </div>
        </div>


        <div className='con' style={conStyle}>
        Prepaid and subscription plans available.
        <p style={{textAlign: 'center'}}>Prices start at ₹129.00/month.</p>
        </div>


        <div className='tan' style={tanStyle}>
        Or save money with an annual, <a href="" style={{color:"blue"}}> family or student plan.</a>
        <p style={{textAlign: 'center',marginTop: '15px'}}>

        <a href="https://www.youtube.com/premium" style={{color:"blue"}}>Restrictions apply. Learn more here.</a>
</p>
        </div>


    </div>
  );
}

export default PremiumSub;
