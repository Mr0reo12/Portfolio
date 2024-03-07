/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {

  i18n:{
    // Los locales que tu aplicación soporta
    locales: ['es', 'en', 'fr'],
    // El idioma por defecto cuando no se especifica uno
    defaultLocale: 'fr',
    // Opcional: rutas que se deben omitir para la generación de locales
    localeDetection: false, // Desactiva la detección automática del idioma del navegador
  },
    trailingSlash: true,
  }
