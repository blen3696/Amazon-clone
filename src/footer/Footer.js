import React, { useState } from 'react';
import './footer.css';
import logo from '../images/logo.png'
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
      title: "Get to Know Us",
      items: [
        "Careers",
        "Blog",
        "About Amazon",
        "Investor Relations",
        "Amazon Devices",
        "Amazon Science",
      ],
    },
    {
      title: "Make Money with Us",
      items: [
        "Sell products on Amazon",
        "Sell on Amazon Business",
        "Sell apps on Amazon",
        "Become an Affiliate",
        "Advertise Your Products",
        "Self-Publish with Us",
        "Host an Amazon Hub",
        "See More Make Money with Us",
      ],
    },
    {
      title: "Amazon Payment Products",
      items: [
        "Amazon Business Card",
        "Shop with Points",
        "Reload Your Balance",
        "Amazon Currency Converter",
      ],
    },
    {
      title: "Let Us Help You",
      items: [
        "Amazon and COVID-19",
        "Your Account",
        "Your Orders",
        "Shipping Rates & Policies",
        "Returns & Replacements",
        "Manage Your Content and Devices",
        "Amazon Assistant",
        "Help",
      ],
    },
  ];

  return (
    <footer>
      <div className="footer">
        {sections.map((section, index) => (
          <div className="footer__section" key={index}>
            <div className="footer__header">
              <h4>{section.title}</h4>
              <button
                className="footer__toggle"
                onClick={() => toggleSection(index)}
              >
                {activeSection === index ? <ExpandLess /> : <ExpandMore />}
              </button>
            </div>
            <ul
              className={`footer__list ${
                activeSection === index ? "footer__list--active" : ""
              }`}
            >
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom-bar">
        <img
          src={logo}
          alt="Amazon"
          className="footer__logo"
        />
        <div className="footer__option">🌐 English</div>
        <div className="footer__option">$ USD - U.S. Dollar</div>
        <div className="footer__option">🇺🇸 United States</div>
      </div>
    </footer>
  );
};

export default Footer;

