import React from 'react';
import { useState } from 'react';
import AddTodo from '../AddTodo';
import Todo from '../Todo';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Index = ({ filter }) => {
  //todo 리스트
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    {
      id: '124',
      text: '공부하기',
      status: 'completed',
    },
  ]);

  //input에서 받은 값을 todos에 넣기
  const handleAdd = todo => {
    setTodos(prev => [...prev, todo]);
  };

  //todo 체크박스 업데이트
  const handleUpdate = updated => {
    setTodos(
      todos.map(item => {
        return item.id === updated.id ? updated : item;
      }),
    );
  };

  //todo 삭제
  const handleDelete = deleted => {
    setTodos(
      todos.filter(item => {
        return item.id !== deleted.id;
      }),
    );
  };

  //필터마다 보여줄 todo 아이템
  function getFilteredItems(todos, filter) {
    if (filter === 'all') {
      return todos;
    }
    return todos.filter(todo => {
      return todo.status === filter;
    });
  }

  //필터된 todo 아이템
  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={`${styles.container} container`}>
      <ul className={styles.list}>
        {filtered &&
          filtered.map(item => {
            return <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}></Todo>;
          })}
      </ul>
      <AddTodo onAdd={handleAdd}></AddTodo>
    </section>
  );
};

Index.propTypes = {
  filter: PropTypes.string,
};

export default Index;
