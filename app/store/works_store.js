import { defineStore } from "pinia";

export const useWorkStore = defineStore("Work", ()=>{
   const trabajos = {
        branding:{
            k9:{
            name:"",    
            racional:"",
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
          girardot:{
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
        publicitario:[
         {
            photo:"",
            campaña:""
         }
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

    const camapañas = {
        monster:{
          description:"",
          año:""
        }
    }

  

    return{camapañas,trabajos}
})