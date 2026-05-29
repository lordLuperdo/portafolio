<script setup>
const props = defineProps(["name","arr","link","ret","sol"])




</script>

<template>
    <div class="mt-16 text-center flex flex-col justify-center sm:px-20 items-center"> 
   
        <h3 class="font-titulos sm:text-6xl md:text-8xl">{{name}}</h3>


     <div class="flex gap-4 justify-center mt-3 flex-wrap  ">
    <div class="">
        <div class=""><img src="" alt="" class=""> <span class=""></span></div>
    </div>
        
        <NuxtImg v-for="a in arr" :key="a"
    :src="`https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/ux%2F${a}.webp?alt=media&token=true`" 
    format="webp" 
    alt="work"
    class="shadow-lg md:w-56 md:h-40 rounded-md h-28 object-cover"
    />
        
    </div>

    
        
    <div class="flex w-full mt-3">
        <div class="flex flex-col text-start px-3 min-w-[50%] items-center">
        <h3 class="font-texto text-start w-full font-bold">Reto</h3>
            <p class="font-texto ">{{ ret }}</p>    
        </div>
        <div class="flex flex-col text-start px-3 min-w-[50%] items-center">
            <h3 class="  font-texto text-start w-full font-bold">Solución</h3>
            <p class="font-texto">{{sol}}</p>
        </div>
    </div>
    
        
     


    <NuxtLink :to="link" target="_LANG" class="p-2 px-10 bg-yellow-300 font-texto rounded-full mt-4 w-[30%]">
        Visitar
    </NuxtLink>
    </div>
</template>