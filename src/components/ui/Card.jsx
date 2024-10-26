import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Card = ({ url = "", alt = "", technology_use = [], description = "", link = "" }) => {
  return (
    <div className="w-full h-auto font-poppins flex flex-col p-2 items-center justify-center relative">
      <Link to={link}>
        <img src={url} alt={alt} />
        {technology_use.length > 0 && technology_use.map((item) => (
          <span key={item.id}>
            {item.components} 
          </span>
        ))}
        <p>
          {description}
        </p>
      </Link>
    </div>
  );
};

export default Card;
