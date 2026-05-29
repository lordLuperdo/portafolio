<script setup>
import heads from './header.vue';
import flecha from '~/storage/imgs/flecha.webp'

const props = defineProps(['name'])


</script>
<template>

    <main class="bg-black pb-5 sm:pb-0 sm:min-h-[60vh]" >
     <heads></heads>
     

     <div class="flex flex-col items-center justify-center">
        <div class="">
            <h1 class="font-titulos  text-center  text-[9rem] sm:text-[15rem] leading-none text-yellow-300 ">{{ name }}</h1>
        </div>
        
         <div class="relative sm:w-full w-[80%]">
         
        <ul class="flex overflow-x-scroll no-scrollbar  gap-10 w-full p-4 justify-start sm:mx-0 sm:justify-center lg:text-xl">
        <nuxtLink to="/branding" class="shrink-0  items-center flex gap-2"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">Branding</span> </nuxtLink>
        <nuxtLink to="/ux" class="shrink-0  items-center flex gap-2"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">Diseño Web/ux</span> </nuxtLink>
        <nuxtLink to="/digital" class=" shrink-0 items-center flex gap-2"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">Digital / Motion G.</span> </nuxtLink>
        <nuxtLink to="/varios" class=" shrink-0 items-center flex gap-2"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">PackaginG, 3D y POP</span> </nuxtLink>
        </ul>

        <div
            class="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"
        ></div>

         </div>

         

     </div>

    </main>

</template>

<style scoped>

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE y Edge */
  scrollbar-width: none; /* Firefox */
}

</style>