<script setup>
import logo from '~/storage/imgs/logo.webp'
import contacto from '~/storage/imgs/contacto.webp'
import links from './links.vue';
import yotas from '~/storage/imgs/yotas_main.webp'


</script>

<template>
    <footer class="flex  bg-black mt-28 ">
        <div class="p-10 flex-grow  my-10 flex flex-col justify-center  ml-20">
          <img :src="logo" alt="" class="w-96">
          <img :src="contacto" alt="" class="w-72">
        </div>
        
        <div class=" flex-grow flex justify-end relative">
            <img :src="yotas" alt="" class="absolute bottom-0 min-w-[45vh] ">
        </div>

        <div class="p-10 flex-grow my-10">
            <links></links>
            <div class="flex gap-4 mt-4">
                <div class="bg-yellow-300 rounded-full w-7 h-7"></div>
                <div class="bg-yellow-300 rounded-full w-7 h-7"></div>
                <div class="bg-yellow-300 rounded-full w-7 h-7"></div>
            </div>
        </div>
        
    </footer>
</template>