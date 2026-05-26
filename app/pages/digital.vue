<script setup>
import  main_service from '~/components/main_service.vue';
import { useWorkStore } from '~/store/works_store';

const workStore = useWorkStore()

</script>

<template>
    
    <main_service
    name="DIGITAL"
    ></main_service>

    <section class=" p-16 xl:columns-6 gap-3 ">
        <img :src="`https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/multimedia%2F${piece}.webp?alt=media&token=true`" 
        alt="" class="rounded-xl mb-3 shadow-md" 
        v-for="piece in workStore.trabajos.Digital" :key="piece"
        >
    </section>

     

</template>