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

    <article class="sm:mt-16 text-center flex flex-col justify-center px-5 sm:px-20 items-center">
     
     <h3 class="font-titulos  text-5xl sm:text-6xl">Más trabajos</h3>
     
      <div class="flex gap-1 justify-center mt-3 flex-wrap  ">
        
        <NuxtImg v-for="a in workstore.extras_b" :key="a"
    :src="`https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/brand%2Fotros%20proyectos%2F${a}.webp?alt=media&token=true`" 
    format="webp" 
    alt="work"
    class="md:h-32 w-36 rounded-md h-28 object-cover"
    />

   
        
    </div>
   

    </article>


    <foot></foot>

</template>