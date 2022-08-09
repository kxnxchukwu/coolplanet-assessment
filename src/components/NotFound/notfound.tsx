import React from 'react';
import styles from "./notfound.module.scss";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// custom hook to get the current pathname in React

const usePathname = () => {
  const location = useLocation();
  console.log(location.pathname);
}

const NotFound = () => {
    usePathname()
    return(
    <div className={styles.errorImageOverlay}>
        <div className={styles.errorImageContainer} />
        <h2 className={styles.errorImageText}>Caution! This User is a Ghost (Not Found), <Link to="/users">Go back to User List</Link> </h2>
    </div>
    );
};

export default NotFound;