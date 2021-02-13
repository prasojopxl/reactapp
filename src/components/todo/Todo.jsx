import React, {useState} from "react";
import "./style.scss";

export const Todo = () => {
    const [todos, setTodos] = useState(["Belajar react","Belajar es6", "Belajar css"]);
    const [task, setTask] = useState();

    return (
        <div className="wrp-todo">
            <div className="header"><h4>ToDo List</h4></div>
            <div className="contents">
                <div className="wrp-createtodo">
                    <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
                    <button onClick={(e)=> {
                        setTodos((prev)=>{
                            const newData = [...prev];
                            newData.push(task);
                            return newData;
                        });
                        setTask("")
                    }}>Create</button>
                </div>
                <div className="wrp-listtodo">
                    {todos.map((item, i)=>{
                        return (                            
                            <div className="itemtodo">
                                <div className="desc">
                                    {i+1+ ". " + item}
                                </div>
                                <div className="action">
                                    <button onClick={()=> {
                                        setTask(item);
                                        setTodos((prev)=>{
                                            const newData = [...prev];
                                            newData.splice(i,1);
                                            return newData;
                                        })
                                    }}>Edit</button>
                                    <button onClick={()=> {
                                        setTodos((prev)=>{
                                            const newData = [...prev];
                                            newData.splice(i,1);
                                            return newData;
                                        })
                                    }}>Delete</button>
                                </div>
                                {}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="wrp-todosinfo">
                There are <strong>{todos.length}</strong> tasks
            </div>
        </div>
    )
}