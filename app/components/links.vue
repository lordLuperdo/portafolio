<script setup>
import flecha from '~/storage/imgs/flecha.webp'
</script>

<template>
    <ul class="flex flex-col gap-3 lg:text-xl">
        <nuxtLink to="/" class=" items-center flex gap-1"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">Branding</span> </nuxtLink>
        <nuxtLink to="/" class=" items-center flex gap-1"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">Diseño Web/ux</span> </nuxtLink>
        <nuxtLink to="/" class=" items-center flex gap-1"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">Diseño publicitario</span> </nuxtLink>
        <nuxtLink to="/" class=" items-center flex gap-1"><div class="flex h-5 w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div> <span class="text-white font-texto">PackaginG,3D y POP</span> </nuxtLink>
    </ul>
</template>