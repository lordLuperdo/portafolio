<script setup>
const props = defineProps(["main","arr","name","racional","inspiracion"])

</script>
<template>
    <section class="px-20 pt-2 gap-4 flex flex-col md:flex-row relative">
      
        <div class="flex flex-col w-[90%] gap-2">
            <div class="">
                <img :src="`https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/brand%2Fmain%2F${main}.webp?alt=media&token=t`" alt="" class="max-w-full rounded-md">
            </div>
            <div class="flex flex-wrap gap-2">
                <img v-for="a in arr" :src="`https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/brand%2Fsecundarias%2F${a}.webp?alt=media&token=true`" alt="" class="max-w-[32.3%] rounded-md">
         
            </div>
        </div>
      
        <div class="">
            <div class="sticky top-0">
            <h2 class="text-9xl font-titulos ">{{ name }}</h2> 

            <h3 class="font-texto font-bold">Racional</h3>
            <p class="font-texto">{{ racional }}</p>
            <h3 class=" mt-2 font-texto font-bold">Inspiración</h3>
            <p class="font-texto">{{ inspiracion }}</p>
            

            </div>
          
            </div>


        


    </section>
</template>