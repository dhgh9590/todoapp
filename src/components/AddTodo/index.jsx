import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './style.module.css';
import { darkMode } from '../../context/darkMode';

const Index = ({ onAdd }) => {
  const { dark } = useContext(darkMode);
  //input 값 저장
  const [text, setText] = useState('');

  //input 값 변경
  const handleChange = e => {
    setText(e.target.value);
  };

  //submit 할 때 onAdd 함수 실행
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text: text, status: 'active' });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${dark === true && styles.dark}`}>
      <input className={styles.input} type="text" placeholder="Add Todo" value={text} onChange={handleChange} />
      <button className={styles.button}>Add</button>
    </form>
  );
};

Index.propTypes = {
  onAdd: PropTypes.func,
};

export default Index;
