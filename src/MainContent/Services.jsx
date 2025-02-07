import { Star } from "lucide-react";
import { useState, useEffect } from "react";


export default function Services(){
    // constructeur état 
    const [services, setServices] = useState([]);
    //récuperation des objets dans services.json
    useEffect(()=>{
        fetch("data/services.json")
        .then((response)=> response.json())
        .then((data) => setServices(data))
        .catch((error) => console.error("erreur de chargement de produit : " + error))
    }, [])
    return (
      <section className=" w-full p-12 py-12 h-auto relative flex flex-col justify-start items-center">
        <h1 className="text-gray-300 text-4xl py-4 font-extrabold ">
          Our <span className="text-red-600 font-bold"> Popular </span>{" "}
          Product{" "}
        </h1>
        <p className="text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
          Explore our most sought-after services, designed to transform your
          vision into reality with creativity, expertise, and a commitment to
          excellence
        </p>
        <div className="flex justify-start flex-row py-4 flex-wrap ">
          {/* Mapping services  */}
          {services.map((service) => (
            <div key = {service.id} className="w-64 h-auto m-4 overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl  max-w-sm shadow-lg">
              {/* Image */}
              <div className="h-1/2 w-full ">
                <img
                  src={service.image}
                  alt="Product"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Contenu */}
              <div className=" p-4 pt-10">
                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                  <Star size={18} fill="currentColor" className="opacity-50" />
                  <span className="text-gray-500 text-sm ml-1">(4.5)</span>
                </div>

                {/* Titre */}
                <h3 className="text-lg font-normal text-slate-200 mt-2">
                  {service.title}
                </h3>

                {/* Prix */}
                <p className="text-xl font-bold text-blue-600 mt-1">
                  {"$" + service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}