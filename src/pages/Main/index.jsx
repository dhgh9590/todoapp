import React from 'react';
import TodoList from '../../components/TodoList';
import Header from '../../components/Header';
import { useState } from 'react';
import { darkMode } from '../../context/darkMode';
import { useEffect } from 'react';

const filters = ['all', 'active', 'completed']; //필터 목록
const Index = () => {
  const [filter, setFilter] = useState(filters[0]);
  const [dark, setDark] = useState();

  const toggleDarkMode = () => {
    setDark(prev => !prev);
  };

  function updateDarkMode() {
    if (dark == true) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  updateDarkMode();

  useEffect(() => {
    let value = localStorage.getItem('dark');
    value = JSON.parse(value);
    setDark(value);
  }, []);

  return (
    <darkMode.Provider value={{ dark, setDark, toggleDarkMode, updateDarkMode }}>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}></Header>
      <TodoList filter={filter}></TodoList>
    </darkMode.Provider>
  );
};

export default Index;
