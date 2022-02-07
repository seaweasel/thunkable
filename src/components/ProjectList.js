import Project from "./Project";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const ProjectList = props => {
   const projects = props.projects;

   function handleOnDragEnd(result) {
      if (!result.destination) return;
      const items = Array.from(projects);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      // updateProjects(items);
   }

   return <div className="App">
      <header className="App-header">
         <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="projects">
               {(provided) => (
                  <ul {...provided.droppableProps} ref={provided.innerRef}>
                     {projects.map((project, index) => {
                        return (
                           <Draggable key={project.id} draggableId={project.id} index={index}>
                              {(provided) => (
                                 <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <Project  id={project.id} name={project.name} date={project.date}/>
                                 </li>
                              )}
                           </Draggable>
                        );
                     })}
                     {provided.placeholder}
                  </ul>
               )}
            </Droppable>
         </DragDropContext>
      </header>
   </div>

}

export default ProjectList;