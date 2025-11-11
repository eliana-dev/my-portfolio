# My Portfolio
 Link al portafolio → [My-Portfolio](https://eliana-dev.github.io/my-portfolio/)
**Autor:** Eliana Valdez (eliana-dev)

## 1. Objetivo del sitio

Este repositorio contiene mi portafolio personal. El propósito del sitio es:

- Presentar el perfil profesional (enfocado en backend).
- Mostrar proyectos relevantes con enlaces a repositorios y demos.
- Facilitar el contacto mediante un formulario funcional.

El sitio está diseñado como una landing responsiva, accesible y preparada para ser publicada (en GitHub Pages).

## 2. Paleta de colores y tipografía

Colores principales (definidos en `css/styles.css` como variables CSS):

- `--color-primary`: #84c9ef (azul claro)
- `--color-secondary`: #b4d2ed
- `--color-tertiary`: #cbbddd
- `--color-accent`: #e3b1d2
- `--color-accent-alt`: #dcb5d4
- `--color-dark`: #1a1a2e
- `--color-text`: #2d3748
- `--color-white`: #ffffff

Tipografía:

- Fuente principal: `Montserrat` (importada desde Google Fonts).

Estas elecciones buscan contraste adecuado, una estética moderna y buena legibilidad en dispositivos móviles.

## 3. Componentes y secciones implementadas

Estructura principal:

- `index.html`: HTML semántico con todas las secciones.
- `css/styles.css`: estilos, variables, animaciones y media queries.
- `js/main.js`: interactividad general (menú, desplazamiento, observador de intersección, estado activo de la navbar).
- `js/contact.js`: validación y envío del formulario de contacto.

Secciones del sitio:

- Navbar fijo con enlaces internos y versión móvil (hamburger).
- Home / Hero: título, descripción y llamadas a la acción (ver proyectos, descargar CV).
- Skills: categorías y tarjetas de tecnologías.
- Projects: tarjetas con imagen, descripción, etiquetas y enlaces a GitHub/Demo.
- Contact: enlaces (email, LinkedIn, GitHub) y formulario con validación y envío.
- Footer: marca y créditos.

## 4. Validaciones aplicadas (formularios y accesibilidad)

Validaciones del formulario (cliente, en `js/contact.js`):

- Name: requerido, mínimo 2 caracteres.
- Email: requerido, verificado con una expresión regular básica.
- Message: requerido, mínimo 10 caracteres.
- Cuando ocurre un error, el campo añade la clase `.error` y muestra un texto dentro de `.error-message`.

Envío:

- El formulario envía mediante `fetch` a la API de Web3Forms (<https://api.web3forms.com/submit>) usando un `access_key` incluido como campo oculto en el form.
- Al recibir respuesta de éxito se muestra un overlay de confirmación (`#formSuccess`) y se limpia el formulario.

Accesibilidad (mejoras incluidas):

- Etiquetas `label` asociadas a inputs (`for` / `id`).
- Textos alternativos (`alt`) en imágenes de proyectos.
- Elementos interactivos (enlaces, botones, campos) accesibles por teclado.

## 5. Interactividad con JavaScript

- `js/main.js`:
  - `scrollToSection(id)`: desplazamiento suave.
  - Toggle y animación del menú móvil (hamburger).
  - Sombra dinámica de la navbar según scroll.
  - Intersection Observer para animaciones al entrar en viewport.
  - Actualización del enlace activo en la navbar según la sección visible.

- `js/contact.js`:
  - Validación de campos (name, email, message).
  - Envío por `fetch` a Web3Forms y manejo de la respuesta.
  - Muestra de mensajes de error y overlay de éxito.

## 6. Animaciones y transiciones

- Variable de transición global: `--transition: all 0.3s ease;`.
- Keyframes implementados en `css/styles.css`:
  - `fadeInUp`: entrada suave desde abajo con incremento de opacidad.
  - `scaleIn`: animación de escala para iconos (ej. icono de éxito del formulario).
- Transiciones aplicadas a botones, tarjetas y elementos hover (zoom en imágenes, overlays de proyectos, transformaciones en botones).
- Algunas animaciones se controlan/inyectan desde JS para sincronizar estados (por ejemplo, el `hamburger` y el observer).

## 7. Pruebas de rendimiento realizadas.

### Performance Profiling

Para analizar el rendimiento del portafolio, se utilizó la herramienta Performance de las Firefox Developer Tools (Zen Browser).
Durante la prueba se registró el proceso completo de renderizado, carga de recursos y repintado de la página.

- **Resultados destacados**:

El análisis muestra que la mayor parte del tiempo de ejecución está concentrado en el proceso de pintado (Paint) y actualización del renderizado (Update the rendering).

Se observa una carga fluida, con una distribución estable del uso de CPU y memoria.

La categoría Graphics representa el 97 % de la actividad registrada, indicando que el rendimiento está principalmente influenciado por las operaciones gráficas (animaciones, efectos visuales y scroll).

No se detectan bloqueos ni procesos de scripting excesivos.

Herramienta utilizada: Firefox Profiler → [Firefox Profiler](https://profiler.firefox.com)

### Network Analysis

Se realizó un análisis de red utilizando las Firefox Developer Tools (Zen Browser) para observar la carga y transferencia de recursos del sitio.

**Detalles del análisis:**

- Todos los recursos se cargan correctamente con estado 200 (OK).

- El tiempo total de carga fue de aproximadamente 2.7 s, con la primera respuesta en 218 ms.

- Los archivos principales (HTML, CSS, JS y WEBP) se entregan desde GitHub Pages y permanecen cacheados, optimizando la velocidad de carga.

- Las imágenes en formato .webp presentan un peso entre 450 KB y 520 KB, permitiendo buena calidad con compresión eficiente.

- Los scripts (main.js y contact.js) son ligeros, con un tamaño promedio de 3 KB.

- El formulario de contacto realiza una solicitud POST hacia la API de Web3Forms, con una transferencia mínima (≈800 B).

- El documento descargable del CV (CV - Eliana Valdez.pdf) tiene un tamaño de 95 KB, también cacheado.

**Conclusión:**

El sitio muestra un buen rendimiento de red, con tiempos de respuesta bajos, recursos estáticos correctamente cacheados y sin errores de carga.

### Accessibility Analysis

Se realizó una revisión de accesibilidad utilizando la pestaña “Accesibilidad” de las Firefox Developer Tools (Zen Browser), con el fin de comprobar la correcta estructura semántica y accesible del documento.

**Resultados:**

El documento principal tiene el rol "document" y el nombre accesible "My-Portfolio".

No se detectaron errores de verificación ni problemas de roles o propiedades.

El árbol de accesibilidad refleja correctamente la jerarquía del contenido (document → body → elementos hijos).

- El documento se encuentra en estado:

   - readonly

   - focusable

   - selectable text

   - opaque

   - enabled

   - sensitive

Conclusión:
El sitio presenta una estructura accesible estable y correctamente reconocida por los lectores de pantalla.
No se detectan advertencias, lo que indica un buen cumplimiento de las prácticas básicas de accesibilidad web (A11Y).

## 8. Observaciones y mejoras futuras.

- La `access_key` de Web3Forms está en el HTML como campo oculto; para mayor seguridad se recomienda hacer el envío desde un backend propio y no exponer claves en el cliente.

- Usar iconos de las tecnologias en la sección de Skills & Technologies.
  
- Hacer validaciones mas robustas para el formulario de contacto.

- Mostrar el demo de Youtube directamente en la web.
  
  