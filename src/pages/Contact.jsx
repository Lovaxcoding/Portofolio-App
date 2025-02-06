import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
    // Envoyer les données à un serveur ici
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Nom :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message :
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
