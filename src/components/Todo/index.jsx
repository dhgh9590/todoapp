import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';

const Index = ({ todo, onUpdate, onDelete }) => {
  const { id, text, status } = todo;

  //체크 박스 업데이트
  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status: status });
  };

  //todo 삭제
  const handleDelete = () => {
    onDelete(todo);
  };
  return (
    <li className={`${styles.todo} ${todo.status === 'completed' && styles.completed} todo`}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </span>
    </li>
  );
};

Index.propTypes = {
  todo: PropTypes.object,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Index;
