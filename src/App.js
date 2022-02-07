import './App.css';
import Header from "./components/Header";

import {v4 as uuidv4} from 'uuid';
import ProjectList from "./components/ProjectList";

const projects = [
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
   const newProject = project => {
      console.log(project);
   }

   return <div>
      <Header newProjectHandler={newProject}/>
      <ProjectList projects={projects}/>
   </div>;
}

export default App;
