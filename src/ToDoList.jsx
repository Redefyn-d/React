import React , {useState} from 'react'
import './index.css'

function ToDoList(){
    const [tasks,setTasks] = useState(["Test","Test1"]);
    const [newTask,setNewTask] = useState('');

    function addToDo(){
        if (newTask !== ''){
            setTasks((t)=>[...t,newTask]);
        }
        setNewTask('');
    }
    function handleNewTask(event){
        setNewTask(event.target.value);
    }

    function removeTask(index){
        setTasks(tasks.filter((_,i) => index !==i));
    }

    function moveDown(index){
        if(index < tasks.length -1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveUp(index){
        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return (<div className='to-do-list'>
                <h2>To Do List</h2>
                <div className='input-section'>
                    <input placeholder='Enter the tasks' className='to-do-input' value={newTask} onChange={handleNewTask}/>
                    <button className='add-todo' onClick={addToDo}>Add</button>
                </div>
                <ol className='task-element'>
                    {tasks.map((task,index)=><li key={index} className='taskname'>{task}<button className='deletetask' onClick={() => removeTask(index)}>Delete</button>
                                                <button className='moveupbutton' onClick={() => moveUp(index)}>👆</button>
                                                <button className='movedownbutton' onClick={() => moveDown(index)}>👇</button>
                    </li>)}
                    
                </ol>
            </div>)
}

export default ToDoList