# PruebaCodespace - Servicio REST Ficha de Persona

## Arquitectura

La aplicación está desarrollada en Java utilizando Spring Boot y sigue una arquitectura de tipo REST. El proyecto está preparado para ser desplegado como un archivo WAR en servidores de aplicaciones como Tomcat.

- **Backend:**
  - Framework: Spring Boot
  - Controlador REST: `PersonaController` expone el endpoint `/persona/ficha` para recibir datos de una persona vía POST.
  - Clase de dominio: `Persona` representa la ficha de una persona con los campos básicos.
  - Clase principal: `PruebaCodespaceApplication` extiende `SpringBootServletInitializer` para permitir el despliegue en Tomcat externo.
  - Estructura de archivos estáticos en `src/main/resources/static` para servir la web simple.

- **Frontend:**
  - Página web simple (`index.html`) con formulario para introducir los datos de la persona.
  - Archivos separados para estilos (`styles.css`) y lógica (`script.js`).
  - El formulario envía los datos al backend usando `fetch` y muestra la respuesta en pantalla.

## Datos manejados

La ficha de persona incluye los siguientes campos:
- **nombre**: Nombre de la persona
- **apellido**: Apellido de la persona
- **edad**: Edad (número entero)
- **dni**: Documento Nacional de Identidad

Estos datos se envían en formato JSON al endpoint REST y se procesan en el backend.

## Despliegue

1. Compilar el proyecto con Maven (`mvn clean package`).
2. Copiar el archivo WAR generado en `target` a la carpeta `webapps` de Tomcat.
3. Iniciar Tomcat y acceder a la web en `http://localhost:8080/<nombre-del-war>/index.html`.

## Posibles mejoras futuras

- **Persistencia:** Guardar las fichas de persona en una base de datos relacional (MySQL, PostgreSQL, etc.) usando JPA/Hibernate.
- **Validaciones avanzadas:** Validar los datos de entrada tanto en frontend como en backend (formato de DNI, rango de edad, etc.).
- **Gestión de usuarios:** Añadir autenticación y autorización para proteger el acceso al servicio y la web.
- **API REST completa:** Implementar operaciones CRUD (crear, leer, actualizar, eliminar) para la ficha de persona.
- **Internacionalización:** Soporte para varios idiomas en la web y mensajes del backend.
- **Pruebas automatizadas:** Añadir tests unitarios y de integración para asegurar la calidad del código.
- **Despliegue en la nube:** Preparar la aplicación para despliegue en plataformas cloud (Docker, Kubernetes, etc.).
- **Interfaz web avanzada:** Mejorar la experiencia de usuario con frameworks modernos (React, Angular, Vue.js).
- **Documentación OpenAPI/Swagger:** Generar documentación interactiva para la API REST.
- **Logs y auditoría:** Añadir registro de actividad y auditoría de operaciones.

---

Para cualquier duda o mejora, consulta este README o contacta con el equipo de desarrollo.