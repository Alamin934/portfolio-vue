<script setup>
import { useHomeStore } from "@/stores/home";

const homeStore = useHomeStore();
</script>
<template>
   <section id="services" class="py-20 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0c1a2e] to-[#020617]"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
         <div v-motion :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl mb-4">
               <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  What I Do
               </span>
            </h2>
            <p class="text-gray-300 max-w-2xl mx-auto">
               Specialized services to help you build, optimize, and scale your web presence
            </p>
         </div>

         <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(service, index) in homeStore.services" :key="service.title" v-motion
               :initial="{ opacity: 0, y: 30 }"
               :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
               class="group relative">
               <!-- Card -->
               <div
                  class="bg-black/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all h-full">
                  <!-- Icon -->
                  <div
                     class="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                     <component :is="service.icon" class="text-cyan-400 w-7 h-7" />
                  </div>

                  <!-- Content -->
                  <h3 class="text-xl mb-3 text-white">{{ service.title }}</h3>
                  <p class="text-gray-300">{{ service.description }}</p>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
