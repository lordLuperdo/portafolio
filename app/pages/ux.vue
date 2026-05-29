<script setup>
import  main_service from '~/components/main_service.vue';
import ux_proyect from '~/components/ux_proyect.vue';
import { useWorkStore } from '~/store/works_store';
import foot from '~/components/foot.vue';

const workstore = useWorkStore()

</script>


<template>

    <main_service class="xl:hidden block"
    name="UX / WEB"
    ></main_service>

    <main_service class="hidden xl:block"
    name="UX / DESARROLLO WEB"
    ></main_service>
    
     
    <ux_proyect
    v-for="p in workstore.trabajos.Ux"
    :name="p.Name"
    :arr="p.imgs"
    :link="p.link"
    :ret="p.reto"
    :sol="p.solucion"
    ></ux_proyect>

    <foot></foot>



</template>