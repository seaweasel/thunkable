import './App.css';
import Header from "./components/Header";

function App() {
   const newProject = project => {
      console.log(project);
   }

  return <div>
     <Header newProjectHandler={newProject}/>
    </div>;
}

export default App;
