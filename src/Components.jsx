import React from "react";

function Button(props){
    const stylebtn = "btn rounded-lg btn-primary  text-gray-900 font-bold text-2xl bg-blue-400 p-4 "
    
    return (
    <button className={stylebtn + props.className}>{props.children}</button>
    );
}

export default function Components(){
    const style = "text-blue-400 font-bold text-2xl text-center"
    return (
        <div className="w-2xl relative flex items-center justify-center flex-col gap-4">
            <h1 className={style}> hello world</h1>
            <Button className ="btn-lg hover:bg-blue-600" Text="Je suis super !"> Kidjny</Button> 
           
        </div>
        
    )
} 