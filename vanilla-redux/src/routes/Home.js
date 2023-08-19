import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToDo,deleteToDo} from "../store";
import {Link} from "react-router-dom";

const Home = () => {
    const [text, setText] = useState('');
    const todo = useSelector((state) => state);
    const dispatch = useDispatch();
    const onClick = () =>{
        const id = Date.now();
        dispatch(deleteToDo({text,id}));
    }
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(text));
        setText("");
    }
    const btnOnClick = (e) =>{
        const targetId = parseInt(e.target.parentNode.id);
        dispatch(deleteToDo(targetId));
    }
    return (

      <>
          <h1>To Do</h1>
          <form onSubmit={onSubmit}>
                <input type={"text"} value={text} onChange={onChange}/>
                <button onClick={onClick}>Add</button>
          </form>
          <ul>
              {todo.map((state)=>(
                  <li key={state.id} id={state.id}>
                     <Link to={`${state.id}`}> {state.text}</Link>
                      <button onClick={btnOnClick}>X</button>
                  </li>
              ))}
          </ul>

      </>

    );
};

export default Home;