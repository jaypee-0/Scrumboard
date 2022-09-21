import React from 'react';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import tasks from '../data/tasks.json';

function Tasks() {
  const [taskRoll, setTaskRoll] = React.useState(tasks);
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const tasks = Array.from(taskRoll);
    const [reorderedItems] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderedItems);
    setTaskRoll(tasks);
  };

  return (
    <div
      id='tasks'
      className='container mt-1 d-flex flex-column flex-md-row justify-content-md-center'>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='tasket'>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='col-12 col-md-6 mb-4 mb-md-2'>
              <div className='col-md-11 d-flex flex-column'>
                <header className='py-3 px-2 bg-primary fw-bold text-light'>
                  Daily tasks
                </header>
                <div className='pt-2 pb-5 border border-3 text-dark'>
                  {tasks.map(({ item, id }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => {
                          return (
                            <p
                              key={id}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                              className='p_tasks'>
                              {item}
                            </p>
                          );
                        }}
                        {provided.placeholder}
                      </Draggable>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </Droppable>
        <Droppable id='taskekter'>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='col-12 col-md-6 mb-4 mb-md-2 h-100'>
              <div className='col-md-11 d-flex flex-column'>
                <header className='py-3 px-2 bg-primary fw-bold text-light'>
                  Weekly tasks
                </header>
                <div className='pt-2 pb-5 border border-3 px-2'>
                  {provided.placeholder}
                </div>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Tasks;
