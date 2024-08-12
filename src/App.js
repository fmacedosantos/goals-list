import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all about the course main topic'},
    {id: 'cg3', text: 'Help other students in the course Q&A'},
  ]);

const addNewGoalHandler = newGoal => {
  //setCourseGoals(courseGoals.concat(newGoal)); ideal para qnd não dependemos do estado anterior
  setCourseGoals(prevCourseGoal => prevCourseGoal.concat(newGoal)) 
  // evita um estado incorreto (ordem dos elementos)
  
}

  return <div className='course-goals'>
    <h2>Course goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals} />
  </div>
}

export default App;
