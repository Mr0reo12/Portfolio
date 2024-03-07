"use client"
import ContactForm from "./Contact";


const ContactPage = () => {
  return (
    <main className="bg-custom-cream font-custom">
    <div className="container mx-auto p-6 bg-custom-cream">
      <h1 className="text-center text-3xl font-bold my-6">Contact</h1>
      <ContactForm />
      {/* Otros elementos de la página de contacto */}
    </div>
    </main>
  );
};

export default ContactPage;