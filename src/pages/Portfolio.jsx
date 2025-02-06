const projects = [
  { id: 1, title: "Publicité TV", image: "/assets/publicite.jpg" },
  { id: 2, title: "Clip musical", image: "/assets/clip.jpg" },
  { id: 3, title: "Documentaire", image: "/assets/doc.jpg" },
];

export default function Portfolio() {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Nos Réalisations</h1>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border rounded shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl p-4">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
