import React from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  
const courseGoals = [
  {id: 'cg1', text: 'Finish the course'},
  {id: 'cg2', text: 'Learn all about the course main topic'},
  {id: 'cg3', text: 'Help other students in the course Q&A'},
]

  return <div className='course-goals'>
    <h2>Course goals</h2>
    <NewGoal/>
    <GoalList goals={courseGoals} />
  </div>
}

export default App;
