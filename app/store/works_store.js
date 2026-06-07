import { defineStore } from "pinia";


export const useWorkStore = defineStore("Work", ()=>{
   const trabajos = {
        branding:{
            k9:{
            name:"K9",    
            inspiracion:"El ícono está inspirado en un Bichón Maltés, una de las razas de perros de pelaje largo más reconocidas en el mundo. Su cabello sedoso y elegante representa el cuidado, la delicadeza y la atención al detalle que la marca busca reflejar",
            racional:"Esta marca fue creada con el propósito de transmitir una sensación amigable y cercana hacia el consumidor, utilizando una iconografía de formas redondeadas y suaves que refuerzan su carácter accesible y cálido.",
            imgmain:"k9",
            points:[],
            imgs:["k91","k92","k93"]
          },
          batallaencali:{
            name:"Batalla en Cali",
            inspiracion:"La identidad de esta marca toma inspiración de los gladiadores romanos, figuras históricamente asociadas con la fortaleza, la resistencia y el combate. La construcción del símbolo parte de la silueta del casco característico de la época, mientras que la tipografía fue diseñada para evocar visualmente el rostro del luchador, generando una identidad sólida y coherente con el concepto de batalla y competitividad.",
            racional:"Esta marca fue creada con la intención de transmitir una personalidad agresiva, pero al mismo tiempo moderna, para la Batalla de Cali. Desde el inicio, se buscó generar un alto contraste visual con el objetivo de resaltar a los verdaderos protagonistas: el mensaje y los peleadores participantes del evento.",
            imgmain:"Batallaencali",
            points:[],
            imgs:["cali1","cali2","cali3"]
          },
          zaphi:{
            name:"Los cubos de Zaphi",
            inspiracion:"La identidad de la marca toma como principal inspiración a la mascota del negocio, un lobo siberiano reconocido por su personalidad tierna, amigable y juguetona. Su relevancia dentro de la memoria del público, al ser uno de los elementos más recordados de la marca a lo largo de los años, motivó la decisión de convertir su imagen en el principal recurso visual para fortalecer el reconocimiento y la conexión emocional con los clientes.",
            racional:"La identidad de Los Cubos de Zaphi fue desarrollada con un enfoque amigable, lúdico y juvenil, alineado con un público universitario. La marca busca representar un espacio dedicado a los juegos de mesa, los hobbies y especialmente a los cubos Rubik coleccionables, proyectando una personalidad cercana, entretenida y moderna que conecte con su comunidad.",

            imgmain:"zaphi",
            points:[],
            imgs:["z1","z2","z3"]
          },
          y37:{
            name:"Y37",
            inspiracion:"Para la creación de este identificador visual se tomó inspiración en dos elementos principales: la textura del cabello femenino y la retícula de la proporción áurea, símbolo de perfección y equilibrio.",
            racional:"El resultado busca transmitir delicadeza y estética, integrando de forma sutil las letras del nombre Y37 dentro del símbolo, logrando una composición armónica y elegante que refleja belleza, precisión y movimiento natural",
            imgmain:"y37",
            points:[],
            imgs:["y1","y2","y3"]
          },
          
          


          
        },
        Digital:[
         "monster1","monster2","monster3","monster4","monster5","desideri1",
         "desideri2","desideri3","desideri4","four%20loko%20factu","oldparr1","catalogo","oldparr2","brindis","alceblanco",
         "control","control2","plantilla","pony%20up%20ESTADO_","red","red1","POP-UPc","POP-UPn","BANNER%20NECTAR%20ROJO%20VILLAVO","love","cofre%20rojo","cervecera2","reikon","some1","some2","some3","banner%20grants2","jack","baltika","abogando1","abogando2","abogando3","k91","perrito1","perrito2",
         "render%1","zaphi"
        ],
        Ux:{
          inclueduca:{
            Name:"IncluEduca",
            link:"https://www.figma.com/proto/Nne48YAVqpYfskn6iOKi5I/proto-inclueduca?team_id=1149308093168862954&node-id=3-2&page-id=0%3A1&starting-point-node-id=3%3A2&t=gSOwalL8wsLd1hr2-1",
            imgs:["inclu1","inclu2","inclu5","inclu6"],
            solucion:"La solución aplicada en esta página web se centró en simplificar la cantidad de información recibida por el usuario, presentando únicamente los elementos necesarios para facilitar su navegación educativa. De igual manera, se priorizó una comunicación más visual, utilizando imágenes y recursos gráficos como apoyo principal sobre el texto, con el fin de mejorar la comprensión y hacer la experiencia más accesible e intuitiva.",
            reto:"El principal reto en el diseño de la página web de Inclueduca fue desarrollar una interfaz que, además de ser visualmente atractiva, resultara clara y accesible para padres de familia y estudiantes con dificultades de aprendizaje. Por ello, se trabajó en una experiencia enfocada en la comprensión visual, la facilidad de navegación y la organización adecuada de los contenidos, garantizando una interacción más amigable para los usuarios.",
            tecnologias:["Figma","photoshop"],
            type:"Prototipo"
          },
          abogando:{
            Name:"Abogando por los Animales",
            link:"https://abogandoporlosanimales.org",
            imgs:["abo2","abo1", "abo3","abo4"],
            solucion:"Para ello, se trabajó en una propuesta visual que reflejara compromiso y cercanía hacia los animales, manteniendo al mismo tiempo una comunicación sobria, seria y alineada con la identidad de una firma jurídica.",
            reto:"El principal reto en la creación de la página web de Abogando por los Animales fue representar la conexión de la firma con la defensa y protección animal sin alejarse de una imagen corporativa y profesional.",
            tecnologias:["Nuxt","tailwind"],
            type:"Landing"
          },  
           desideri:{
            Name:"Desideri",
            link:"https://desideri-57ba.vercel.app",
            imgs:["desi1","desi3","desi4","desi5"],
            solucion:"La propuesta se orientó hacia una identidad más delicada y romántica, construyendo una comunicación visual elegante que conectara con el usuario desde la sensibilidad, la estética y la sofisticación.",
            reto:"El principal reto en la creación del catálogo de Desideri consistió en diferenciar la marca del enfoque tradicional presente en gran parte del mercado de los sex shops, donde predominan tonos visuales más ordinarios o explícitos.",
            tecnologias:["Nuxt","Tailwind","Photoshop","Firebase"],
            type:"Catálogo"
          },
          poli:{
            Name:"Poli Move",
            link:"https://xd.adobe.com/view/5359b776-90ba-4d73-abe9-05df2486bd18-060a/",
            imgs:["poli1","poli2","poli3","poli4"],
            solucion:"Por esta razón, durante las entrevistas realizadas a los estudiantes se priorizaron especialmente los comentarios relacionados con la incertidumbre sobre el tiempo de llegada entre CityCampus y el campus principal. A partir de estos hallazgos, se planteó la implementación de un sistema con historial de ubicación de los buses, permitiendo a los estudiantes tener una mayor referencia sobre los recorridos y tiempos estimados. Además, se incorporó la posibilidad de crear casos o reportes, con el fin de mejorar la comunicación y atender inconvenientes relacionados con el servicio.",
            reto:"El principal reto en el desarrollo de Polimove consistió en responder a las problemáticas y molestias que los estudiantes presentaban al utilizar el servicio de transporte de la universidad. Por esta razón, el proyecto se enfocó en diseñar una solución centrada en el usuario, buscando optimizar la experiencia mediante una navegación clara, acceso más eficiente a la información y una interacción más intuitiva con el servicio.",
            tecnologias:["AdobeXd"],
            type:"App"
          },  
           
          Star:{
            Name:"Starbucks",
            link:"https://www.figma.com/proto/QQ9FxV6aihC70SqkRm9wRB/Untitled?team_id=1149308093168862954&node-id=2-88&page-id=0%3A1&t=7kUV9XK1ifjMOF5t-1",
            imgs:["starbuks","starbuks2","starbuks3"],
            solucion:"",
            reto:"",
            tecnologias:["Figma"],
            type:"Prototipo"
          },  
          
          
        },
        ppd:[
        "glen1","glen2","glen3","control1","autoclave1",
        "autoclave2","autoclave3","autoclave4","autoclave5",
        "autoclave6","glenestuche1","taller2","taller1","taller3","santopecado2","santopecado1","chivas","anchetasyotas","cubo1","cubo2","cubo3","ancheta1","ancheta2",
        "anchetas6","anchetas7","anchetas8","anchetas9","anchetas10","paloalto1"

        ]
    }

    const extras_b = ["branding7","branding2","branding3","branding4","branding5","branding6"]

    

    const s_service = [
      
      {name:"Visual Branding",
       description:"Diseño marcas con propósito y significado, construidas para diferenciarse, generar recordación y aportar valor real a través de la funcionalidad.",
       rute:"/branding",
       name_img:["branding1.webp","branding2.webp","branding3.webp","branding4.webp","branding5.webp"] 
      },

      {name:"Web Desing & UX",
       description:"Creo interfaces visualmente atractivas sin sacrificar funcionalidad, priorizando siempre la experiencia del usuario.",
       rute:"/ux",
       name_img:["ux.webp","ux2.webp","ux3.webp","ux4.webp","ux5.webp"] 
      },
      {name:"Publicidad Digital",
       description:"Diseño piezas digitales funcionales y estéticas, enfocadas en comunicar el mensaje de forma clara, efectiva y memorable.",
       rute:"/digital",
       name_img:["digi1.webp","digi2.webp","digi3.webp","digi4.webp","digi5.webp"] 
      },
      {name:"Varios",
       description:"Me ajusto a las necesidades de cada cliente, comprendiendo que cada marca tiene su propia identidad, contexto y universo.",
       rute:"/varios",
       name_img:["3d1.webp","3d2.webp","3d3.webp","3d4.webp","3d5.webp",

       ] 
      },
    ]
  

    return{trabajos,s_service,extras_b}
})