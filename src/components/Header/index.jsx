import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ filters, /*filter */ onFilterChange }) => {
  return (
    <header>
      <ul>
        {filters &&
          filters.map((item, index) => {
            return (
              <li key={index}>
                <button
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
