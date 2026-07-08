import React, { useState, useRef, useEffect } from 'react';

import MegaMenu from './MegaMenu';
import defaultMenu from '../utils/menuData';

function Menus({ menuItems }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  const items = menuItems || defaultMenu;

  useEffect(() => {
    function onDocClick(e) {
      if (!navRef.current) return;
      if (navRef.current.contains(e.target)) return;
      // clicked outside
      setMobileOpen(false);
      setOpenIndex(null);
    }

    function onKey(e) {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setOpenIndex(null);
        btnRef.current?.focus();
      }
    }

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <button
        ref={btnRef}
        className="hamburger"
        aria-label="Toggle menu"
        aria-controls="primary-navigation"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(!mobileOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setMobileOpen(!mobileOpen);
          }
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect y="4" width="24" height="2" fill="currentColor" />
          <rect y="11" width="24" height="2" fill="currentColor" />
          <rect y="18" width="24" height="2" fill="currentColor" />
        </svg>
      </button>
      <ul id="primary-navigation" className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
        {items.map((item, idx) => (
          <li
            key={idx}
            className={`${item.megaMenu ? 'mega-parent' : ''} ${openIndex === idx ? 'open' : ''}`.trim()}
            onMouseEnter={() => item.megaMenu && setOpenIndex(idx)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <a
              href={item.href || '#'}
              onClick={(e) => {
                if (item.megaMenu && window.innerWidth <= 768) {
                  e.preventDefault();
                  setOpenIndex(openIndex === idx ? null : idx);
                  return;
                }
                if (mobileOpen) setMobileOpen(false);
              }}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && item.megaMenu && window.innerWidth <= 768) {
                  e.preventDefault();
                  setOpenIndex(openIndex === idx ? null : idx);
                }
              }}
              tabIndex={0}
            >
              {item.label}
            </a>
            {item.megaMenu && openIndex === idx && (
              <MegaMenu featuredImage={item.megaMenu.featuredImage} columns={item.megaMenu.columns} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menus;