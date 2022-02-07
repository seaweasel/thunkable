import Project from "./Project";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const ProjectList = props => {

   function handleOnDragEnd(result) {
      if (!result.destination) return;
      const items = Array.from(props.projects);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      props.updateProjectHandler(items);
   }

   return   <DragDropContext onDragEnd={handleOnDragEnd}>
               <Droppable droppableId="projects">
                  {(provided) => (
                     <ul style={{listStyleType: 'none', marginTop: '3rem'}}{...provided.droppableProps} ref={provided.innerRef}>
                        {props.projects.map((project, index) => {
                           return (
                              <Draggable key={project.id} draggableId={project.id} index={index}>
                                 {(provided) => (
                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                       <Project editting={props.projectToEdit===project.id}
                                                updateProjectToEditHandler={props.updateProjectToEditHandler}
                                                removeProjectHandler={props.removeProjectHandler}
                                                id={project.id} name={project.name}
                                                date={project.date}/>
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
}

export default ProjectList;