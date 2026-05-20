<script setup>
const props = defineProps(['img1','img2','img3','img4','img5','img6','name','description'])

</script>

<template>
    <section class="mt-16 text-center flex flex-col justify-center sm:px-20 items-center"> 
     <h3 class="font-titulos sm:text-6xl">{{name}}</h3>
     <p class="font-texto xl:text-xl sm:text-lg">{{description}}</p>
      <div class="flex gap-4 justify-center mt-3 flex-wrap  ">
        <div class=" bg-cover md:h-32 w-40 rounded-md h-28" :style="{backgroundImage: `url(${img1})`}"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md h-28"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md h-28"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md h-28"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md h-28"></div>
        <div class="bg-gray-300 md:h-32 w-40 rounded-md xl:hidden h-28"></div>
    </div>
    <NuxtLink to="" class="p-2 px-10 bg-yellow-300 font-texto rounded-full mt-4 w-[30%]">
        Conoce más
    </NuxtLink>
    </section>
</template>