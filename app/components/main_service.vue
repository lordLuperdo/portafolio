<script setup>
import heads from './header.vue';
import flecha from '~/storage/imgs/flecha.webp'

const props = defineProps(['name'])


</script>
<template>

    <main class="bg-black h-[60vh]" >
     <heads></heads>
     

     <div class="flex flex-col items-center justify-center">
        <div class="">
            <h1 class="font-titulos text-center  text-[15rem] leading-none text-yellow-300 ">{{ name }}</h1>
        </div>
        
         <ul class="flex gap-10 w-full p-4 justify-center lg:text-xl">
        <nuxtLink to="/branding" class=" items-center flex gap-2"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">Branding</span> </nuxtLink>
        <nuxtLink to="/ux" class=" items-center flex gap-2"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">Diseño Web/ux</span> </nuxtLink>
        <nuxtLink to="/digital" class=" items-center flex gap-2"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">Digital / Motion G.</span> </nuxtLink>
        <nuxtLink to="/varios" class=" items-center flex gap-2"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">PackaginG, 3D y POP</span> </nuxtLink>
    </ul>

     </div>

    </main>

</template>