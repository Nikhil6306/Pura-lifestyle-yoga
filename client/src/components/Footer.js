import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '📘', label: 'Facebook', url: 'https://facebook.com' },
    { icon: '📷', label: 'Instagram', url: 'https://instagram.com' },
    { icon: '𝕏', label: 'Twitter', url: 'https://twitter.com' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: '▶️', label: 'YouTube', url: 'https://youtube.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Yoga Flow Icon & Branding */}
        <div className="footer-left">
          <div className="footer-yoga-icon">🧘</div>
          <div className="footer-brand">
            <h3>Pure Lifestyle Yoga</h3>
            <p>Transform your life, one breath at a time</p>
            <p className="footer-location">At-home sessions, Ghaziabad & Noida</p>
          </div>
        </div>

        {/* Center Section - Quick Links */}
        <div className="footer-center">
          <div className="footer-column">
            <h4>Services</h4>
            <a href="#services">Morning Flow</a>
            <a href="#services">Power Vinyasa</a>
            <a href="#services">Beginners Class</a>
            <a href="#services">Advanced Flow</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#cookie">Cookie Policy</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>

        {/* Right Section - Social Media & Contact */}
        <div className="footer-right">
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <p className="footer-email">hello@purelifestyleyoga.in</p>
            <p className="footer-phone">+91 98765 43210</p>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={social.label}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Pure Lifestyle Yoga. All rights reserved. Designed with 💚 for wellness.</p>
      </div>
    </footer>
  );
}

export default Footer;
