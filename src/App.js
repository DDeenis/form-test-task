import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import UserFormContainer from './components/UserForm/UserFormContainer';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <UserFormContainer />
      </main>
    </div>
  );
}

export default App;
