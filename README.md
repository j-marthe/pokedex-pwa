# **Pokedex PWA - Angular**

## **Descripción**

Este proyecto es una aplicación web progresiva (PWA) construida con **Angular** que permite explorar una lista de Pokémon utilizando la **PokeAPI**. La aplicación incluye dos vistas principales: una vista de lista de Pokémon en formato **cards** y **tabla**, y una vista de detalle que muestra información más detallada de cada Pokémon.

### **Características:**
- **Interfaz en Angular Material**: Uso de componentes modernos de Angular Material, como **cards**, **tablas** y **expansion panels**.
- **PWA (Progressive Web App)**: Configurada para ser una aplicación que puede instalarse en dispositivos y funcionar sin conexión a internet.
- **Consumo de API**: La aplicación obtiene datos dinámicos de la **PokeAPI**, mostrando información como nombres, habilidades, estadísticas y tipos de Pokémon.

## **Tecnologías Utilizadas**
- **Angular**: Framework principal para el desarrollo de la aplicación.
- **Angular Material**: Biblioteca de componentes UI, que facilita la creación de una interfaz de usuario atractiva y moderna.
- **PokeAPI**: API pública que proporciona información sobre los Pokémon.
- **Service Worker**: Implementación de un Service Worker para habilitar la funcionalidad de la PWA, permitiendo el uso offline y mejoras en el rendimiento.
- **GitHub y Netlify**: Para el control de versiones y despliegue.

## **Características de la Aplicación**

### **1. Consumo de la PokeAPI**
La aplicación utiliza la **PokeAPI** para obtener datos sobre los Pokémon. En la vista principal se muestra una lista de Pokémon con información básica, como su nombre y un enlace a su página de detalles. La API se consume mediante el uso del servicio **HttpClient** de Angular.

- **Endpoints utilizados**:
  - `https://pokeapi.co/api/v2/pokemon/`: Para obtener información básica de los Pokémon.
  - `https://pokeapi.co/api/v2/pokemon/{name}/`: Para obtener detalles más completos de cada Pokémon.

### **2. Angular Material**
Se ha integrado **Angular Material** para mejorar la experiencia de usuario. Esto incluye:

- **mat-card**: Para mostrar los Pokémon en forma de tarjeta.
- **mat-table**: Para mostrar los Pokémon en formato tabla.
- **mat-expansion-panel**: Para mostrar detalles adicionales de cada Pokémon (habilidades, estadísticas, etc.).

### **3. Transformación a PWA**
La aplicación ha sido configurada como una **Progressive Web App** (PWA), lo que permite a los usuarios instalarla en sus dispositivos y usarla sin conexión a internet. 

#### **Aspectos clave de la configuración PWA**:
- **Service Worker**: El **service worker** permite que la aplicación funcione offline. Al realizarse la instalación, la mayoría de los archivos esenciales se almacenan en caché.
- **manifest.webmanifest**: Define los metadatos necesarios para convertir la aplicación en una PWA (íconos, colores, nombre de la app, etc.).
- **Caché dinámico**: Se ha configurado un sistema de caché que guarda recursos estáticos y las respuestas de la API de Pokémon para que los usuarios puedan seguir navegando aunque no tengan conexión a internet.

### **4. Interfaz de Usuario**
- La interfaz es completamente **responsiva**, adaptándose a diferentes tamaños de pantalla.


## **Instalación y Uso**

Para ejecutar este proyecto en tu entorno local:

### **1. Clonar el Repositorio**
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### **2. Instalar Dependencias**
Asegúrate de tener **Node.js** y **Angular CLI** instalados. Luego ejecuta:

```bash
npm install
```

### **3. Ejecutar el Proyecto**
Para iniciar la aplicación en modo desarrollo, ejecuta:

```bash
ng serve
```

Luego abre tu navegador y navega a `http://localhost:4200/`.

### **4. Construcción para Producción**
Para generar una versión optimizada para producción:

```bash
ng build --prod
```

Los archivos generados en la carpeta `dist/` son los que deben ser desplegados en un servidor.

## **Despliegue en Netlify**
La aplicación está desplegada y disponible en **Netlify**, visitala en: `https://pokedex-pwa-angular.netlify.app/`.
