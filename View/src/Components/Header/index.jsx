import styles from "./style.module.css";
import { Icon } from "@iconify/react";
import GetRoute from "../../Container/server";
import { Link } from "react-router-dom";
 
export default function Navbar({ bgColor,value,handleChange }) {
  return (
    <nav
      className={`navbar navbar-expand-lg py-1 fixed-top ${
        bgColor ? styles.navScrolled : styles.nav
      }`}
    >
      <div className="container p-0">
        <a className="navbar-brand p-0" href="/">
          <img
            src={GetRoute("/newupdated.png")}
            alt=""
            width="220"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className={`navbar-toggler mx-3 ${styles.btn}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <Icon icon="bx:menu-alt-right" className={styles.Icon} />
        </button>
        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <a className={`nav-link ${styles.navLink}`} href="/">
                Home
              </a>
            </li>
            <li className="nav-item px-3">
              <a className={`nav-link ${styles.navLink}`} href="/about">
                About Us
              </a>
            </li>
            <li className={`nav-item dropdown px-3 ${styles.customDropdown}`}>
              <a
                className={`nav-link ${styles.navLink} dropdown-toggle ${styles.dropArrow}`}
                href="/service"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                Service Offerings
              </a>
              <ul
                className={`dropdown-menu ${styles.dropdownMenu} `}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="/service/software-product-engineering"
                  >
                    Software Product Engineering
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/service/hardware-product-engineering"
                  >
                    Hardware Product Engineering
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/service/cloud-platform-engineering"
                  >
                    Cloud Platform Engineering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/service/cognitive-solution">
                    Cognitive Solutions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/service/salesforce-crm">
                    Salesforce CRM
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item px-3">
              <a className={`nav-link ${styles.navLink}`} href="/engagement">
                Engagement Model
              </a>
            </li>
            <li className="nav-item px-3">
              <a className={`nav-link ${styles.navLink}`} href="/careers">
                Careers
              </a>
            </li>
            <li className="nav-item px-3">
              <a className={`nav-link ${styles.navLink}`} href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
          
        </div>
        <div
          className="collapse navbar-collapse"
          id="collapsibleNavbar"
        >
      <div className="d-flex">
        <input className= {`form-control me-2 mt-1 ${styles.input}`} value={value} onChange={handleChange} type="text" placeholder="Search" />
        <button className={styles.searchButton}>
        <Link to={value==""?"#":`/search/${value}`}><i className= {`fa fa-search text-white mt-2  ${styles.icon}`}></i></Link>
        </button>
        </div>
      
        </div>
       
      </div>
    </nav>
  );
}
 