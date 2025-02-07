import { CheckCircle, Zap, Award, Briefcase } from "lucide-react";

export default function Maincontent() {
  return (
    <div className="bg-black text-white py-16 px-8">
      {/* Titre de la section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="text-gray-400 mt-2">
          Discover the values and achievements that set us apart.
        </p>
      </div>

      {/* Conteneur des éléments */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Qualité : Expertise */}
        <div className="flex flex-col items-center">
          <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Expertise</h3>
          <p className="text-gray-400 mt-2">
            Years of experience delivering high-quality solutions.
          </p>
        </div>

        {/* Qualité : Speed */}
        <div className="flex flex-col items-center">
          <Zap className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="font-semibold text-lg">Speed</h3>
          <p className="text-gray-400 mt-2">
            Fast and efficient services for your needs.
          </p>
        </div>

        {/* Statistique : Nombre de projets */}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold text-yellow-400 mb-2">
            120+
          </span>
          <h3 className="font-semibold text-lg">Projects Completed</h3>
          <p className="text-gray-400 mt-2">
            Innovative projects delivered successfully.
          </p>
        </div>

        {/* Statistique : Années d'expérience */}
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold text-red-500 mb-2">10+</span>
          <h3 className="font-semibold text-lg">Years of Experience</h3>
          <p className="text-gray-400 mt-2">A decade of trusted services.</p>
        </div>
      </div>
    </div>
  );
}
