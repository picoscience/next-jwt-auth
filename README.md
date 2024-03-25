Next-JWT-Auth: Autenticación sin Redux con Next.js y Django (Djoser)

Descripción:

Next-JWT-Auth es un proyecto full stack que implementa un sistema de autenticación completo utilizando las siguientes tecnologías:

    Next.js: Framework frontend para aplicaciones web modernas.
    TypeScript: Lenguaje de programación que aporta robustez y seguridad al código.
    Django: Framework backend robusto y versátil.
    Djoser: Aplicación Django que facilita la implementación de API de autenticación.
    Axios: Biblioteca para realizar peticiones HTTP desde el frontend.

Características:

    Autenticación sin Redux: Se evita la complejidad de Redux al gestionar el estado de la autenticación en el frontend.
    Inicio de sesión y registro: Flujos de trabajo intuitivos para la autenticación de usuarios.
    Tokens JWT: Se generan y validan tokens JSON Web para la seguridad de la sesión.
    Protección de rutas: Las rutas sensibles se protegen para que solo sean accesibles a usuarios autenticados.
    Personalización: Se puede personalizar la interfaz de usuario y la lógica de autenticación.

Instalación:

    Clonar el repositorio: git clone https://github.com/bard-ai/next-jwt-auth.git
    Instalar las dependencias: npm install (frontend) y pip install -r requirements.txt (backend)
    Crear un archivo .env en la raíz del proyecto y configurar las variables de entorno.
    Ejecutar los servidores: npm run dev (frontend) y python manage.py runserver (backend)

Uso:

    Inicio de sesión: Acceder a la ruta / e ingresar las credenciales del usuario.
    Registro: Acceder a la ruta / y completar el formulario de registro.
    Acceso a rutas protegidas: Las rutas que comienzan con / solo son accesibles para usuarios autenticados.

Tecnologías:

    Next.js: Se utiliza para el desarrollo del frontend, permitiendo una experiencia de usuario fluida y moderna.
    TypeScript: Se utiliza para escribir código frontend robusto y con mayor seguridad de tipos.
    Django: Se utiliza para el desarrollo del backend, proporcionando una base sólida y escalable.
    Djoser: Simplifica la implementación de la API de autenticación en Django.
    Axios: Se utiliza para realizar peticiones HTTP al backend desde el frontend.
