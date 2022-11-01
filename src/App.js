import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import Main from './pages/Main';
import { useEffect } from 'react';
/* prop 타입체크 */
// import PropTypes from 'prop-types';

/* 폰트어썸 */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

/* 이미지 절대경로 */
// src={`${process.env.PUBLIC_URL}/나머지 폴더 주소`}

function App() {
  useEffect(() => {
    let value = localStorage.getItem('dark');
    value = JSON.parse(value);
    value == false || value == true ? null : localStorage.setItem('dark', JSON.stringify(false));
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

/*
Index.propTypes = {
  prop이름: PropTypes.array,
};
*/

export default App;
