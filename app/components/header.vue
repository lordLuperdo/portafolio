<script setup>
import logo from "~/storage/imgs/logo.webp"
import flecha from "~/storage/imgs/flecha.webp"

const route = useRoute()
const router = useRouter()

const scrollToS = () => {
    const a = document.getElementById("services")
  
  if (route.path === '/' ) {

    a.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }else{
        router.push('/#services')
    }
}

</script>
<template>

<header class=" top-0 right-0 w-full">
    <div class="flex flex-col md:flex-row md:justify-between items-center justify-center pt-10 px-20">
        <NuxtLink to="/">
          <img :src="logo" alt="Logo" class="max-h-16">  
        </NuxtLink>
        
        <div class="">
            <ul class="flex md:gap-9 justify-center gap-7 mt-5 md:mt-0 md:text-lg font-texto">
                <li class="text-white">
                     <NuxtLink to="/">Yo</NuxtLink>
                    </li>
                <li class="text-white">
                     <button @click="scrollToS">Trabajos</button>
                    </li>
                <li class="">
                    
                    <a class="bg-white rounded-full flex gap-2 items-center p-1 px-2" href="https://wa.me/3022600280" target="_LANG">
                        <span class="font-titulo">Contacto</span><div class="w-5 rounded-full overflow-hidden"><img :src="flecha" alt="" class="max-w-full"></div>  
                    </a>
                        
                    
                </li>
            </ul>
        </div>
    </div>
</header>
</template>