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

import { useWorkStore } from '~/store/works_store';

const {s_service} = useWorkStore()

const ejm = ""
</script>
<template>

    
    <main class="bg-black min-h-[100vh] px-10">   
        <heads></heads>
    <div class="main sm:flex hidden justify-around">
        <div class="w-[20%] relative items-center flex pl-20 ">
            <img :src="firma" alt="firma" class="absolute left-10 xl:top-48 w-60">
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


   
    </main>


    <div class="flex justify-center p-10">
        <img :src="logos" alt="Habilidades" class="xl:max-w-[40%]"></div>


    <div class="flex relative justify-between">
        <div class="pl-36 w-[55%] flex flex-col justify-center">
            <h2 class="font-titulos text-gris xl:text-9xl xl:leading-[80%]">Más de 6 años creando proyectos</h2>
            <img :src="digitales" alt="ay" class="xl:w-96 ">
        </div>
        <div class="w-[45%]">
         <img :src="workpc" alt="" class=" w-full">   
        </div>
        
    </div>

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