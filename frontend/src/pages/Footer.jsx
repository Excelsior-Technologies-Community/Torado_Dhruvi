import React from "react";
import "../Footer.css";
import footerLogo from "../assets/footer-logo.svg";
import post1 from "../assets/footer1.png";
import post2 from "../assets/footer2.png";

const Footer = () => {
  return (
    <footer className="torado-footer-section">
      <div className="container">

        <div className="row torado-footer-top">

          <div className="col-lg-6 col-md-12 mb-4">
            <div className="torado-footer-logo-box">
              <img src={footerLogo} alt="logo" className="torado-footer-logo" />
            </div>

            <p className="torado-footer-desc">
              Sed ut perspiciati unde omnis iste natus error sit voluptatem
              accusanti doloremq laudantium totam rem aperiam eaque ipsa quae
              ab illo inventore veritatis architecto beatae.
            </p>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="torado-footer-subscribe">

              <h5>
                <i className="fa-regular fa-paper-plane"></i> Stay Up To Date
                With The Latest News. Subscribe Now!
              </h5>

              <div className="torado-footer-input-box">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                <button>SUBSCRIBE NOW</button>
              </div>

            </div>
          </div>
        </div>

        <div className="row torado-footer-middle">

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="torado-footer-title">Working Time</h5>

            <div className="torado-working-box">
              <ul>
                <li>Mon - Sat / 08am : 12pm</li>
                <li>Mon - Sat / 08am : 12pm</li>
                <li>Sunday Close</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="torado-footer-title">Useful Links</h5>

            <ul className="torado-footer-links">
              <li><i className="fas fa-angle-right"></i> About Us</li>
              <li><i className="fas fa-angle-right"></i> Our Team</li>
              <li><i className="fas fa-angle-right"></i> Our Projects</li>
              <li><i className="fas fa-angle-right"></i> Latest News</li>
              <li><i className="fas fa-angle-right"></i> Contact Us</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="torado-footer-title">What We Do</h5>

            <ul className="torado-footer-links">
              <li><i className="fas fa-angle-right"></i> Financial Advice</li>
              <li><i className="fas fa-angle-right"></i> Planning Strategies</li>
              <li><i className="fas fa-angle-right"></i> Taxation Planning</li>
              <li><i className="fas fa-angle-right"></i> Investment Trading</li>
              <li><i className="fas fa-angle-right"></i> Wealth Marketing</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="torado-footer-title">Recent Post</h5>

            <div className="torado-post">

              <img src={post1} alt="" />
              <div>
                <span>BUSINESS & FINANCE</span>
                <p>How To Start Getting More Of a Return From Your Savings</p>
              </div>

            </div>

            <div className="torado-post">

              <img src={post2} alt="" />
              <div>
                <span>BUSINESS & FINANCE</span>
                <p>Consulted Admitting Wooded Is Power Acuteness</p>
              </div>

            </div>
          </div>

        </div>

        <div className="torado-footer-bottom">

          <p>
            © Torado is Proudly Owned by <span>EnvyTheme</span>
          </p>

          <div className="torado-footer-policy">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;