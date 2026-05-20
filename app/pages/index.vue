<script setup>
import heads from '~/components/header.vue';
import yotasmain from '~/storage/imgs/yotas_main.png';
import links from '~/components/links.vue';
import firma from '~/storage/imgs/firma.png'
import logos from '~/storage/imgs/logos_hab.png'
import digitales from '~/storage/imgs/digitale.png'
import foot from '~/components/foot.vue';
import workpc from '~/storage/imgs/workpc.png'
import section_service from '~/components/section_service.vue';

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
                <h3 class="font-titulos leading-[80%] text-[10rem] xl:text-[13rem] text-white">
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

    <section-service
    :name="'Visual Branding'"
    :description="'Crear marcas con significado y propósito, las cuales tengan un valor agregado, recordación y sobre todo sean funcionales'"
    :img1="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQloFBXdJpz-BwRdlA2tRGZabgoHaMMy3DAyRilDT0FRgQ7YymDiws_mQl0bv4LBMWjSnmMZErUS_Efaqug6UobclXP3pvUgkiliBV7PH9v&s=10'"
    ></section-service>


    <section class="mt-16 text-center flex flex-col justify-center sm:px-20 items-center"> 
     <h3 class="font-titulos sm:text-6xl">Web Desing & UX</h3>
     <p class="font-texto xl:text-xl sm:text-lg">Crear interfases que no solo sean esteticas, sino también funcionales </p>
      <div class="flex gap-4 justify-center mt-3 flex-wrap  ">
        <div class="bg-gray-300 md:h-32 w-40 rounded-md h-28"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md h-28"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md h-28"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md h-28"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md h-28"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md xl:hidden h-28"></div>
    </div>
    <a href="" class="p-2 px-10 bg-yellow-300 font-texto rounded-full mt-4 w-[30%]">
        Conoce más
    </a>
    </section>

    <foot></foot>

</template> 