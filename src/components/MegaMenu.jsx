import React from 'react';

function MegaMenu({ featuredImage, columns = [] }) {
  return (
    <div className="mega-menu">
      <div className="container">
        {featuredImage && (
          <div className="featured-image">
            <img src={featuredImage} alt="Featured" />
          </div>
        )}
        {columns.map((col, idx) => (
          <div key={idx}>
            {col.title && <h3>{col.title}</h3>}
            {col.links && col.links.map((link, i) => (
              <a key={i} href={link.href || '/'}>{link.label}</a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;
