<script setup>
import heads from '~/components/header.vue';
import yotasmain from '~/storage/imgs/yotas_main.webp';
import links from '~/components/links.vue';
import firma from '~/storage/imgs/firma.webp'
import logos from '~/storage/imgs/logos_hab.webp'
import digitales from '~/storage/imgs/digitale.png'
import foot from '~/components/foot.vue';
import workpc from '~/storage/imgs/workpc.png'
import section_service from '~/components/section_service.vue';
import inicioz from '~/components/inicioz.vue';

import { useWorkStore } from '~/store/works_store';

const {s_service} = useWorkStore()

const ejm = ""

const scrollToS = () => {
  const a = document.getElementById("services")
  if (a) {
    a.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}


</script>
<template>

    
    <main class="bg-black px-3 sm:px-10">   
        <heads></heads>
    <div class="main lg:flex hidden justify-around">
        <div class="w-[30%] xl:w-[20%] relative items-center flex pl-20 ">
            <img :src="firma" alt="firma" class="absolute left-10 top-40 xl:top-48 w-60">
            <p class="text-white font-texto lg:text-xl">Cada elemento cuenta una historia.</p>
        </div>
        <div class="w-[42%] h-[100vh] relative flex justify-end  items-end">
            <img :src="yotasmain" alt="" class=" w-[95%] absolute">
        </div>
        <div class="w-[30%] flex items-start flex-col justify-start ">
            <div class="">
                <h3 class="font-titulos leading-[80%] text-[10rem] xl:mt-6 xl:text-[13rem] text-white">
                    ANDRÉS <br> CONEO
                </h3> 
            </div>
            <div class="mt-5">
                <links></links>
            </div>
        </div>
    </div>

    <div class="main flex lg:hidden justify-around w-full bg-ora">

        <div class="h-[70vh] sm:h-[90vh] relative flex justify-end  items-end">
        
            <div class=" flex  flex-col  w-full bg-slate500 h-full">
            <div class="">
                <h3 class="font-titulos text-center leading-[80%] text-[5rem] mt-6 bg-ornge-400 w-full text-white">
                    ANDRÉS CONEO
                </h3> 
            </div>
              <div class=" relative items-center justify-center flex mt-9 w-full bg-slae-200">
            <img :src="firma" alt="firma" class="absolute left-16 bottom-6 w-40 z-20">
            <p class="text-white font-texto text-center bg-slae-500 w-full">Cada elemento cuenta una historia.</p>
        </div>

        </div>
        
            <img :src="yotasmain" alt="" class=" w-[95%] absolute">
        </div>
        
    </div>


   
    </main>


    <div class="flex justify-center p-10">
        <img :src="logos" alt="Habilidades" class="lg:max-w-[40%] sm:w-[80%] md-w-[60%]"></div>


    <div class="flex flex-col relative justify-between">
        <div class="  flex flex-col justify-center items-center sm:px-0 px-9 top-0 sticky sm:h-[80vh] h-[60vh]">
            <h2 class="font-titulos text-gris w-full lg:text-8xl xl:text-9xl text-7xl text-center leading-[80%]">Más de 6 años creando proyectos</h2>
            <img :src="digitales" alt="ay" class="sm:w-96 ">
        </div>

        <inicioz></inicioz>
        

        
        
    </div>


    <div class="mb-4 h-1 w-full" id="services"></div>
<!-- -->

   <section class="flex flex-col gap-10">


 <section-service
    v-for="service in s_service" :key="service"
    :name="service.name"
    :description="service.description"
    :arr="service.name_img"
    :link="service.rute"
    ></section-service>


   </section>

   

 

    <foot></foot>

</template> 