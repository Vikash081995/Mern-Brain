import React from "react";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "../../core/routes";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.headers}>
      <button onClick={() => navigate(routes.home)}>Second brain </button>
    </div>
  );
};

export default Header;
