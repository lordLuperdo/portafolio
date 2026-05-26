import { defineStore } from "pinia";


export const useWorkStore = defineStore("Work", ()=>{
   const trabajos = {
        branding:{
            k9:{
            name:"K9",    
            
            racional:"Esta marca se creó con la idea de creae ",
            imgmain:"",
            imgs:[]
          },
          zaphi:{
            name:"",
            racional:"",
            imgmain:"",
            imgs:[]
          },
          Cattaleya:{
            name:"",
            racional:"",
            imgmain:"",
            imgs:[]
          },
          batallaencali:{
            name:"",
            racional:"",
            imgmain:"",
            imgs:[]
          },
          SanFelipe:{
            name:"",
            racional:"",
            imgmain:"",
            imgs:[]
          },
          williammartinez:{
            name:"",
            racional:"",
            imgmain:"",
            imgs:[]
          },
          aguailuz:{
            name:"",
            racional:"",
            imgmain:"",
            imgs:[]
          },
          sanfelipe:{
            name:"",
            racional:"",
            imgmain:"",
            imgs:[]
          },
          coltic:{
            name:"",
            racional:"",
            imgmain:"",
            imgs:[]
          },


          
        },
        Digital:[
         "monster1","monster2","monster3","monster4","monster5","desideri1","desideri1",
         "desideri2","desideri3","desideri4","oldparr1","oldparr2","brindis","alceblanco",
         "baltika","abogando1","abogando2","abogando3","k91","perrito1","perrito2",
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
  

    return{trabajos,s_service}
})