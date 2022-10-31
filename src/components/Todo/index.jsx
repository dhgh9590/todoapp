import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Index = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;

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
    <li>
      <input type="checkbox" id={todo.id} checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor={todo.id}>{text}</label>
      <button onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </li>
  );
};

Index.propTypes = {
  todo: PropTypes.object,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Index;
