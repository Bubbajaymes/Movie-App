import React from "react";
import logo from "../assets/logo.png";
import FooterNavItems from "../components/FooterNavItems";

export default function Footer() {
  const usefulLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of Service",
    "Privacy Policy",
  ];
  const locations = [
    "Pale pale",
    "Mziza wa power",
    "Jamaa wangu",
    "Ipo siku",
    "Kaende kaende",
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            {/* Footer Info */}
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="#" className="logo d-flex align-items-center">
                <img src={logo} alt="Mibak Tv Logo" />
              </a>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Fusce lectus massa, elementum congue
                neque sed, blandit feugiat nibh.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                    <i class="bi bi-twitter-x"></i> 
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="tiktok">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="#" className="youtube">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <FooterNavItems key={link} name={link} />
                ))}
              </ul>
            </div>

            {/* Our Movies */}
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Our Movies</h4>
              <ul>
                {locations.map((link) => (
                  <FooterNavItems key={link} name={link} />
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Street Name, Kiambiu <br />
                City Name, Nairobi <br />
                Kenya <br />
                <br />
                <strong>Phone:</strong> +254 716 641 112
                <br />
                <strong>Email:</strong> jaymesbubba14@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container">
        <div className="copyright">
          © {new Date().getFullYear()} Copyright{" "}
          <strong>
            <span>Mibak Tv</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Bubba Jaymes</a>
        </div>
      </div>
    </footer>
  );
}
