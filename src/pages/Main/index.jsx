import React from 'react';
import TodoList from '../../components/TodoList';
import Header from '../../components/Header';
import { useState } from 'react';

const filters = ['all', 'active', 'completed']; //필터 목록
const Index = () => {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}></Header>
      <TodoList filter={filter}></TodoList>
    </>
  );
};

export default Index;
