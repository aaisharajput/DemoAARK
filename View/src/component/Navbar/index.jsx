import styles from "./style.module.css";
import { Icon } from "@iconify/react";
import GetRoute from "../../container/server";
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg py-1 fixed-top ${styles.nav}`} >
      <div className="container p-0">
        <a className="navbar-brand p-0" href="/">
          <img src={GetRoute("/newupdated.png")} alt="" width="220" className="d-inline-block align-text-top" />
        </a>
        <button className={`navbar-toggler mx-3 ${styles.btn}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <Icon icon="bx:menu-alt-right" className={styles.Icon} />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <a className={`nav-link ${styles.navLink}`} href="/">
                AOS
              </a>
            </li>

            <li className="nav-item px-3">
              <a className={`nav-link ${styles.navLink}`} href="/locomotive">
                Locomotive
              </a>
            </li>

            <li className={`nav-item dropdown px-3 ${styles.customDropdown}`}>
              <a className={`nav-link ${styles.navLink} dropdown-toggle ${styles.dropArrow}`} href="#" id="navbarDropdownMenuLink"
                role="button" aria-expanded="false" >
                Next
              </a>
              <ul className={`dropdown-menu ${styles.dropdownMenu} `} aria-labelledby="navbarDropdownMenuLink" >
                <li>
                  <a className="dropdown-item" href="#" >
                    Pending
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" >
                    Pending
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item px-3">
              <a className={`nav-link ${styles.navLink}`} href="/canvas">
              Canvas
              </a>
            </li>

          </ul>

        </div>
        <div className="collapse navbar-collapse" id="collapsibleNavbar" >
          <div className="d-flex">
            <input className={`form-control me-2 mt-1 ${styles.input}`} type="text" placeholder="Search" />
            <button className={styles.searchButton}>
              <i className={`fa fa-search text-white mt-2  ${styles.icon}`}></i>
            </button>
          </div>

        </div>

      </div>
    </nav>
  );
}
