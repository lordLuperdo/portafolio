<script setup>

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


onMounted(() => {
  gsap.from('.service-item2', {
    opacity: 0,
    scale: 0.95,
    duration: 0.8,
    ease: 'power2.out',

    stagger: 0.15,

    scrollTrigger: {
        trigger: '.service-item2',
        start: 'top 99%',
        scrub: true
    }
  })
})

</script>
<template>
    <div class="z-10 hidden sm:flex px-7 justify-center mb-4">
         <div class="w-[30%]">
                    <img class="service-item rounded-md max-w-full mt-[30rem]" src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/multimedia%2Fmonster5.webp?alt=media&token=2fe8aea3-92ba-4103-a5f2-86fb0bd72ba1" alt="">
                    <img class=" service-item rounded-md max-w-full mt-[45rem]" src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/multimedia%2Falceblanco.webp?alt=media&token=c2df60a0-8e47-422c-bf84-43f03a134957" alt="">

         </div>
         <div class="w-[30%]">
                    <img class=" service-item rounded-md max-w-full " src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/3d%26others%2Fglen1.webp?alt=media&token=6219a133-e74d-423d-ad83-eb43c46a55f5" alt="">
                    <img class=" service-item rounded-md max-w-[50%] mt-[40rem]" src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/ux%2Fabo1.webp?alt=media&token=bffbbc44-8a52-4dfc-aa6c-44418f7ac4e4" alt="">

         </div>
         <div class="w-[30%] ">

                    <img class=" service-item rounded-md max-w-full mt-[25rem]" src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/brand%2Fsecundarias%2Fk91.webp?alt=media&token=c5289509-42a9-406c-b7be-574f12b3edd7" alt="">
                                        <img class=" service-item2 rounded-md max-w-[80%] mt-[25rem] " src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/multimedia%2Fbridnis.webp?alt=media&token=bd5cc2e0-3062-45ab-87de-153c4b7a5c74" alt="">

         </div>

        </div>



        <!-- 
        
        <div class="z-10 flex sm:hidden px-5 gap-3">
         <div class="w-[50%]">
                         <img class=" rounded-md max-w-full mt-[10rem]" src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/multimedia%2Falceblanco.webp?alt=media&token=c2df60a0-8e47-422c-bf84-43f03a134957" alt="">

                    <img class=" rounded-md max-w-full mt-[5rem]" src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/multimedia%2Fmonster5.webp?alt=media&token=2fe8aea3-92ba-4103-a5f2-86fb0bd72ba1" alt="">

         </div>
         <div class="w-[50%]">
                     <img class=" rounded-md max-w-full " src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/3d%26others%2Fglen1.webp?alt=media&token=6219a133-e74d-423d-ad83-eb43c46a55f5" alt="">
                    <img class=" rounded-md max-w-[50%] mt-[6rem]" src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/ux%2Fabo1.webp?alt=media&token=bffbbc44-8a52-4dfc-aa6c-44418f7ac4e4" alt="">
                        <img class=" rounded-md max-w-full mt-[10rem]" src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/brand%2Fsecundarias%2Fk91.webp?alt=media&token=c5289509-42a9-406c-b7be-574f12b3edd7" alt="">
                                        <img class=" rounded-md max-w-[80%] mt-[5rem] " src="https://firebasestorage.googleapis.com/v0/b/portafolio-2f645.firebasestorage.app/o/multimedia%2Fbridnis.webp?alt=media&token=bd5cc2e0-3062-45ab-87de-153c4b7a5c74" alt="">

         </div>
         

        </div>
        
        
        
        
        
        
        -->


         

      






</template>