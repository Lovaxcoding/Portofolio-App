import { useEffect, useState } from "react";


export default function Portfolio() {
  const [projets, setProjets] = useState([])
  useEffect(()=>{
    fetch("data/projets.json")
    .then((response)=> response.json())
    .then((data) => setProjets(data))
    .catch((error) => console.error("Erreur lors de l'appel à l'API : ", error))
  })
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Nos Réalisations</h1>
      <div className="grid grid-cols-3 gap-4">
        {projets.map((project) => (
          <div
            key={project.id}
            className="border w-full relative rounded shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl text-white p-4">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
