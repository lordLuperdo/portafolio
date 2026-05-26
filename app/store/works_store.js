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
            inspiracion:"El ícono está inspirado en un Bichón Maltés, una de las razas de perros de pelaje largo más reconocidas en el mundo. Su cabello sedoso y elegante representa el cuidado, la delicadeza y la atención al detalle que la marca busca reflejar",
            racional:"Esta marca fue creada con el propósito de transmitir una sensación amigable y cercana hacia el consumidor, utilizando una iconografía de formas redondeadas y suaves que refuerzan su carácter accesible y cálido.",
            imgmain:"Batallaencali",
            points:[],
            imgs:["cali1","cali2","cali3"]
          },
          zaphi:{
            name:"Los cubos de Zaphi",
                        inspiracion:"El ícono está inspirado en un Bichón Maltés, una de las razas de perros de pelaje largo más reconocidas en el mundo. Su cabello sedoso y elegante representa el cuidado, la delicadeza y la atención al detalle que la marca busca reflejar",
            racional:"Esta marca fue creada con el propósito de transmitir una sensación amigable y cercana hacia el consumidor, utilizando una iconografía de formas redondeadas y suaves que refuerzan su carácter accesible y cálido.",

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
         "desideri2","desideri3","desideri4","oldparr1","oldparr2","brindis","alceblanco",
         "control","control2","plantilla","jack","baltika","abogando1","abogando2","abogando3","k91","perrito1","perrito2",
         "render%1","zaphi"
        ],
        Ux:{
          inclueduca:{
            link:"",
            imgmain:"",
            imgs:[],
            description:"",
            reto:"",
            points:""
          }  
        },
        ppd:[
        {img:""}
        ]
    }

    const extras_b = ["cattaleya","sanfelipe"]

    

    const s_service = [
      
      {name:"Visual Branding",
       description:"Crear marcas con significado y propósito, las cuales tengan un valor agregado, recordación y sobre todo sean funcionales",
       rute:"/branding",
       name_img:["branding1.webp","branding2.webp","branding3.webp","branding4.webp","branding5.webp"] 
      },

      {name:"Web Desing & UX",
       description:"Crear interfases que no solo sean esteticas, sino tambizén funcionales",
       rute:"/ux",
       name_img:["ux.webp","ux2.webp","ux3.webp","ux4.webp","ux5.webp"] 
      },
      {name:"Publicidad Digital",
       description:"Crear piezas digitales de maner eficiente siempre buscando, la funcionalidad, estetica y dejar claro siempre el mensaje a promocionar",
       rute:"/digital",
       name_img:["digi1.webp","digi2.webp","digi3.webp","digi4.webp","digi5.webp"] 
      },
      {name:"Varios",
       description:"Ajustarme a las necesidades de cada cliente teniendo en cuenta que cada marca es un universo",
       rute:"/varios",
       name_img:["3d1.webp","3d2.webp","3d3.webp","3d4.webp","3d5.webp"] 
      },
    ]
  

    return{trabajos,s_service,extras_b}
})