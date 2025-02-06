

function Card(){
    return (
    <section className="flex justify-center flex-col .w-6\/12 pr-10 pl-10 pt-4 pb-4"> 
    <h1 className="font-bold text-2xl">
        Work<span className="text-indigo-500 font-bold">cation</span>
    </h1>
            <img className="rounded-lg mt-4 shadow-xl w-60 h-60" src="https://imgs.search.brave.com/faZavxLYye4rYaatqZow7SrWfrZNZcInUDsmdWUsEH8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vbG9uZ3VldXIt/Y29tcGxldGUtZmVt/bWUtcGxhZ2VfMTA0/ODk0NC0yNjk1MzE1/Ni5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="une femme sur la plage" />
            <h1 className="mt-4 text-2xl text-gray-800 font-bold flex flex-col "> You can work from anywhere. <span className="text-indigo-500">Take avantage of it  </span> </h1>
            <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sapiente sunt voluptatibus repellat reiciendis provident distinctio reprehenderit dicta ab eaque culpa maiores quod, ipsum ratione in laboriosam commodi esse similique? </p>
            <div className="mt-4 ">
                <a className="mt-4 uppercase px-5 py-2 bg-indigo-600
                hover:bg-indigo-700 transform transition focus:focus-outline-none hover:-translate-y-0.5 text-white rounded-lg text-sm focus:ring focus:ring-offset-2 text-center tracking-wider font-semi-bold focus:ring-indigo-700" href="#"> Book your escape</a>
            </div>
        </section>
        )
        
    
}
export default Card