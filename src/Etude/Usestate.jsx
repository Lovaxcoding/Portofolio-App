import React from "react";
import { useState } from "react";
import {Plus} from 'lucide-react';




export default function Usestate(){

    const [Todos, SetTodos] = useState({
      todo : "Faire des courses",
      completed : "false",
    })
    const [Todo, SetTodo] = useState("");
    
    const handleclick = ()=>{
      const newTodo = { 
        id: Date.now(),
        todo : Todo,
        completed : false,
      }
      console.log(newTodo)
    }
    return (
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            value = {Todo}
            className="grow rounded-xl p-4 m-4"
            placeholder="Ajouter une tache"
            onChange={ e=>{
              const input = e.target;
              console.log(input.value)
              let Todolist = input.value
              SetTodo(Todolist)
            }}
          />
          <Plus size={16} />
          <button onClick={handleclick} className="text-lg font-bold bg-red-500 rounded-lg p-4">
            <p className="text-gray-900"> Ajouter </p>
          </button>
        </label>
        <p className="m-4 text-lg  text-gray-100"> Todo : {Todo} </p>
        
      </div>
    );
}


