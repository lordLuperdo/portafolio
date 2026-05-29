<script setup>
import logo from '~/storage/imgs/logo.webp'
import contacto from '~/storage/imgs/contacto.webp'
import links from './links.vue';
import yotas from '~/storage/imgs/yotas_main.webp'
import flecha from '~/storage/imgs/flecha.webp'

</script>

<template>
    <footer class="flex sm:flex-row flex-col justify-center bg-black mt-28 ">
        <div class="p-10 flex-grow mt-10 sm:mt-0 items-center sm:items-start sm:my-10 flex flex-col justify-center  sm:ml-20">
          <img :src="logo" alt="" class=" w-68 sm:w-96">
          <a  href="https://wa.me/3022600280" target="_LANG" class="">
           <img :src="contacto" alt="" class=" w-56 sm:w-72"> 
          </a>
          
        </div>
        
        <div class=" flex-grow flex justify-end relative">
            <img :src="yotas" alt="" class="absolute bottom-0  hidden lg:block min-w-[45vh] ">
        </div>

        <div class="sm:p-10 flex-grow sm:my-10">


            <links class=""></links>
             


            <div class="flex gap-4 sm:mt-4 justify-center sm:justify-start mt-10 mb-10 sm:mb-0">
                <a  href="https://wa.me/3022600280" target="_LANG" class="bg-yellow-300 rounded-full w-7 flex p-[6px] justify-center items-center h-7">
                    <svg class="text-blck w-7 h-7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 512"><!-- Icon from Font Awesome 6 Brands by Dave Gandy - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157m-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6m101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6"/></svg>
                </a>
                <a  href="https://www.linkedin.com/in/andrés-felipe-coneo-895bb4220/" target="_LANG" class="bg-yellow-300 rounded-full w-7 flex p-[6px] justify-center items-center h-7">
                   <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1046.16 1000"><!-- Icon from Brandico by Fontello - https://creativecommons.org/licenses/by-sa/3.0/ --><path fill="currentColor" d="M237.485 1000V325.301H13.229V1000zM125.386 233.127c78.202 0 126.879-51.809 126.879-116.553C250.808 50.37 203.591-.001 126.87-.001C50.161-.001-.002 50.371-.002 116.574c0 64.747 48.665 116.553 123.924 116.553h1.457zM361.61 1000h224.256V623.215c0-20.165 1.457-40.309 7.379-54.724c16.212-40.289 53.111-82.017 115.06-82.017c81.149 0 113.613 61.872 113.613 152.572v360.949h224.242V613.129c0-207.241-110.636-303.668-258.183-303.668c-120.977 0-174.094 67.622-203.603 113.679h1.497v-97.853H361.615c2.943 63.31 0 674.699 0 674.699z"/></svg>
                </a>
                
            </div>
        </div>
        
    </footer>
</template>