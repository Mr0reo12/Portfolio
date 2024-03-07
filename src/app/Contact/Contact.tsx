// components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  // El formulario se manejará completamente a través de Formspree, no se necesita estado

  return (
    <div className="w-full max-w-3xl mx-auto bg-negrito p-8 shadow-md">
      {/* Asegúrate de reemplazar "yourFormId" con el ID de formulario que te proporciona Formspree */}
      <form action="https://formspree.io/f/mbjnyeyj" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <label htmlFor="prenom" className="block text-white text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="_replyto"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

