import './App.css';
import Header from "./components/Header";

import {v4 as uuidv4} from 'uuid';
import ProjectList from "./components/ProjectList";
import {useState} from "react";

const initialProjects = [
   {
      name: 'project 2',
      date: Date.now(),
      id: uuidv4()
   },
   {
      name: 'project 3',
      date: Date.now(),
      id: uuidv4()
   },
   {
      name: 'project 1',
      date: Date.now(),
      id: uuidv4()
   }
];

function App() {
   const newProjectHandler = project => {
      console.log(project);
   }

   const removeProjectHandler = id => {
      console.log(id);
   }

   const [projects, updateProjects] = useState(initialProjects);

   return <div>
      <Header newProjectHandler={newProjectHandler}/>
      <ProjectList updateProjectHandler={updateProjects} removeProjectHandler={removeProjectHandler}  projects={projects}/>
   </div>;
}

export default App;
