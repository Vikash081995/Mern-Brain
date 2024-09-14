import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../core/routes";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navUl}>
        <li className={styles.navLi}>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.para}>Para</Link>
        </li>
        <li>
          <Link to={routes.codeLab}>CodeLab</Link>
        </li>
        <li>
          <Link to={routes.conceptFactory}>ConceptFactory</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
