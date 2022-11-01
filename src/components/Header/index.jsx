import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Index = ({ filters, filter, onFilterChange }) => {
  return (
    <header className={styles.header}>
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
