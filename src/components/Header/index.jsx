import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { darkMode } from '../../context/darkMode';

const Index = ({ filters, filter, onFilterChange }) => {
  const { dark, toggleDarkMode, updateDarkMode } = useContext(darkMode);
  return (
    <header className={`${styles.header} header`}>
      {dark == false ? (
        <FontAwesomeIcon
          className={styles.icon}
          icon={faMoon}
          onClick={() => {
            toggleDarkMode();
            updateDarkMode();
            localStorage.setItem('dark', JSON.stringify(true));
          }}
        />
      ) : (
        <FontAwesomeIcon
          className={styles.icon}
          icon={faSun}
          onClick={() => {
            toggleDarkMode();
            updateDarkMode();
            localStorage.setItem('dark', JSON.stringify(false));
          }}
        />
      )}
      <ul className={styles.filters}>
        {filters &&
          filters.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className={`${styles.filter} ${filter === item && styles.selected}`}
                  onClick={() => {
                    onFilterChange(item);
                  }}
                >
                  {item}
                </button>
              </li>
            );
          })}
      </ul>
    </header>
  );
};

Index.propTypes = {
  filters: PropTypes.array,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default Index;
