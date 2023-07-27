import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [ checklist, setChecklist ] = useState([]);
  
  return (
    <div>
      <Form checklist={ checklist } setChecklist={ setChecklist } />
      <Display checklist={ checklist } setChecklist={ setChecklist } />
    </div>
  );
}

export default App;
