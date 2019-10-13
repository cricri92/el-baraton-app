import React from 'react'

import lightGreenLogo from 'assets/img/el-baraton-light-green-dark.png';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md footer__item footer-brand">
            <img src={lightGreenLogo} alt="Footer Logo" className="footer-brand__img"/>
            <small className="d-block mb-3 text-muted footer-brand__disclaimer">© 2019 Todos los derechos reservados</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="http://google.com">Cool stuff</a></li>
              <li><a className="text-muted" href="http://google.com">Random feature</a></li>
              <li><a className="text-muted" href="http://google.com">Team feature</a></li>
              <li><a className="text-muted" href="http://google.com">Stuff for developers</a></li>
              <li><a className="text-muted" href="http://google.com">Another one</a></li>
              <li><a className="text-muted" href="http://google.com">Last time</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="http://google.com">Resource</a></li>
              <li><a className="text-muted" href="http://google.com">Resource name</a></li>
              <li><a className="text-muted" href="http://google.com">Another resource</a></li>
              <li><a className="text-muted" href="http://google.com">Final resource</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="http://google.com">Business</a></li>
              <li><a className="text-muted" href="http://google.com">Education</a></li>
              <li><a className="text-muted" href="http://google.com">Government</a></li>
              <li><a className="text-muted" href="http://google.com">Gaming</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="http://google.com">Team</a></li>
              <li><a className="text-muted" href="http://google.com">Locations</a></li>
              <li><a className="text-muted" href="http://google.com">Privacy</a></li>
              <li><a className="text-muted" href="http://google.com">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;

