import React from 'react';

const Section = ({ title }) => {
  return (
    <div id={title.toLowerCase()} style={{ height: '500px', padding: '100px 20px', backgroundColor: '#f0f0f0', marginTop: '200px' }}>
      <h2>{title}</h2>
      <p>This is the {title} section.</p>
    </div>
  );
};

export default Section;
