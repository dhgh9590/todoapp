import React from 'react';
import { useState } from 'react';
import AddTodo from '../AddTodo';
import Todo from '../Todo';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import { useEffect } from 'react';

const Index = ({ filter }) => {
  //todo 리스트
  const [todos, setTodos] = useState(() => getToto());

  //로컬스토리지에서 todo 가지고 오기
  function getToto() {
    let todolist = localStorage.getItem('todo');
    return todolist ? JSON.parse(todolist) : [];
  }

  //input에서 받은 값을 todos에 넣기
  const handleAdd = todo => {
    setTodos(prev => [...prev, todo]);
  };

  //todos가 변경될때 마다 로컬스토리지에 값 추가
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

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
    //filter 값과 all이 일치한다면 모든 todos 값을 보여줌
    if (filter === 'all') {
      return todos;
    }
    //todos의 status 값과 일치하는 filter을 찾아서 반환해줌
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
            return (
              <Todo key={item && item.id} todo={item && item} onUpdate={handleUpdate} onDelete={handleDelete}></Todo>
            );
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
