import React from 'react';

function ComingSoon() {
  const soonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    paddingTop: '120px',
  };

  const imgStyle = {
    width: '520px',
    height: '300px',
  };

  return (
    <div className="soon" style={soonStyle}>
      <img
        src="https://user-images.githubusercontent.com/6929121/87441911-486bf600-c611-11ea-9d45-94c215733cf7.png"
        alt=""
        style={imgStyle}
      />
    </div>
  );
}

export default ComingSoon;
