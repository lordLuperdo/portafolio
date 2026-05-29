<script setup>
import  main_service from '~/components/main_service.vue';
import branding_proyect from '~/components/branding_proyect.vue';
import foot from '~/components/foot.vue';
import { useWorkStore } from '~/store/works_store';

const workstore = useWorkStore()

</script>

<template>
    
    <main_service 
    name="BRANDING"
    ></main_service>

         <div class="mt-10"></div>

    <section>
        <branding_proyect
        v-for="proyect in workstore.trabajos.branding"
        :arr="proyect.imgs"
        :main="proyect.imgmain"
        :name="proyect.name"
        :racional="proyect.racional"
        :inspiracion="proyect.inspiracion"
        ></branding_proyect>
    </section>

    <foot></foot>

</template>