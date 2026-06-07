<script setup>
const props = defineProps(['nameimg','arr','name','description','link'])

</script>

<template>
    <section class="sm:mt-16 text-center flex flex-col justify-center px-5 sm:px-20 items-center"> 
     <h3 class="font-titulos  text-5xl sm:text-6xl">{{name}}</h3>
     <p class="font-texto sm:text-lg">{{description}}</p>
      <div class="flex gap-2 justify-center mt-3 flex-wrap  ">
     
            
        <NuxtImg v-for="a in arr" :key="a"
    :src="`https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/caratulas%2F${a}?alt=media&token=true`" 
    format="webp" 
    alt="work"
    class="md:h-32 w-36 rounded-md h-28 object-cover md:block hidden"
    />
     
        
    <NuxtImg v-for="a in arr.slice(0,4)" :key="a"
    :src="`https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/caratulas%2F${a}?alt=media&token=true`" 
    format="webp" 
    alt="work"
    class="md:h-32 w-36 rounded-md h-28 object-cover block md:hidden"
    />
        
    </div>
    <NuxtLink :to="link" class="p-2 px-10 bg-yellow-300 font-texto rounded-full mt-4 md:w-[30%]">
        Conoce más
    </NuxtLink>
    </section>
</template>