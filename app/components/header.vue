<script setup>
import logo from "~/storage/imgs/logo.webp"
import flecha from "~/storage/imgs/flecha.webp"
</script>
<template>
<header class=" top-0 right-0 w-full">
    <div class="flex justify-between pt-10 px-20">
        <NuxtLink to="/">
          <img :src="logo" alt="Logo" class="max-h-16">  
        </NuxtLink>
        
        <div class="">
            <ul class="flex gap-9 text-lg font-texto">
                <li class="text-white">
                     <NuxtLink to="/">Yo</NuxtLink>
                    </li>
                <li class="text-white">
                     <NuxtLink to="/">Trabajos</NuxtLink>
                    </li>
                <li class="">
                    <NuxtLink to="/">
                    <div class="bg-white rounded-full flex gap-2 items-center p-1 px-2">
                        <span class="font-titulo">Contacto</span><div class="w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div>  
                    </div>
                        
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</header>
</template>