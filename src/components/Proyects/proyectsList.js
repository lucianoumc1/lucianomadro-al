import weatherappImage from "../../assets/images/weatherapp-screen.png"
import simonsaysImage from "../../assets/images/simonsays-screen.png"
import todoappImage from "../../assets/images/todoapp-screen.png"
import chatappImage from "../../assets/images/chatapp-screen.jpg"
import madcorarPageImage from "../../assets/images/madcorar-screen.png"

const proyectsList = [
  {
    tittle: 'Chat App',
    description: "Aplicacion web capaz de gestionar conversaciones entre distintos usuarios, al estilo de Whatsapp",
    image: chatappImage,
    github: "https://github.com/lucianoumc1/chat-application",
  },
  {
    tittle: 'Weather App',
    description: "Web que indica el clima de cualquier ciudad, mostrando a la vez una imagen del lugar",
    image: weatherappImage,
    github: "https://github.com/lucianoumc1/WeatherApp",
    deploy: "https://weather-app-lucianoumc1.vercel.app/",
  },
  {
    tittle: 'Todo App',
    description: "Una aplicacion para la gestion de tareas diarias. Creada con uso de JS, React, CSS y HTML.",
    image: todoappImage,
    github: "https://github.com/lucianoumc1/todoApp",
    deploy: "https://lucianoumc1.github.io/todoApp/",
  },
  {
    tittle: 'Simon Says',
    description: "El clasico juego de Simon dice construido como practica personal para reforzar conocimientos sobre callStack",
    image: simonsaysImage,
    github: "https://github.com/lucianoumc1/simon-diceJS",
    deploy: "https://lucianoumc1.github.io/simon-diceJS/",
  },
  {
    tittle: 'Madcorar Page',
    description: "Pagina web para aportar presencia digital a empresa de seguros, realizada en Wordpress",
    image: madcorarPageImage,
    deploy: "http://madcorar.com/",
  },
];
export default proyectsList;