// ContactPage.tsx
"use client";
import React from 'react';
import Footer from "@/component/Footer/Footer";
import ContactForm from "./Contact";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-cream font-custom">
      {/* Use flex-grow para que el contenido se estire y el footer se mantenga en la parte inferior */}
      <main className="flex-grow">
        <div className="container mx-auto p-6">
          <h1 className="text-center text-3xl font-bold my-6">Contact</h1>
          <ContactForm />
          {/* Otros elementos de la página de contacto pueden ir aquí */}
        </div>
      </main>
      {/* El footer queda fuera del main pero dentro del contenedor flex para asegurar su posición */}
      <Footer />
    </div>
  );
};

export default ContactPage;