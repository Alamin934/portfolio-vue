<script setup>
import { useHomeStore } from "@/stores/home";

const homeStore = useHomeStore();
</script>
<template>
   <section id="about" class="relative py-20 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#1a0a2e] to-[#0a0118]"></div>
      <div
         class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl">
      </div>
      <div class="max-w-7xl mx-auto px-6 z-10">
         <!-- Section Title -->
         <div class="text-center mb-16" v-motion :initial="{ y: 20, opacity: 0 }"
            :visible-once="{ y: 0, opacity: 1, transition: { duration: 600 } }">
            <h2
               class="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
               About Me
            </h2>
         </div>

         <div class="grid md:grid-cols-2 items-center gap-8 lg:gap-12">
            <!-- Left content #Description# -->
            <div v-motion :initial="{ x: -30, opacity: 0 }"
               :visible-once="{ x: 0, opacity: 1, transition: { duration: 800 } }">
               <div
                  class="p-8 rounded-lg border border-purple-500/20 bg-black/5 shadow-xl  shadow-purple-500/10 hover:shadow-purple-500/20 backdrop-blur-sm transition-all">
                  <p class="text-gray-300 mb-4 leading-relaxed">
                     I'm a passionate web developer with
                     <span class="text-purple-400">4+ years of experience</span> in
                     creating modern, responsive, and high-performing websites and web
                     applications.
                  </p>
                  <p class="text-gray-300 mb-4 leading-relaxed">My expertise lies in
                     <span class="text-purple-400">WordPress</span> and
                     <span class="text-purple-400">Laravel</span> development, with a
                     strong focus on clean code, modern UI/UX design, and website
                     optimization.
                  </p>
                  <p class="text-gray-300 leading-relaxed">I believe in delivering quality work that not only
                     meets but exceeds client expectations, combining technical
                     excellence with creative solutions.</p>
               </div>
            </div>
            <!-- Right content -->
            <div v-motion :initial="{ x: 30, opacity: 0 }"
               :visible-once="{ x: 0, opacity: 1, transition: { duration: 600 } }">
               <!-- Skills -->
               <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3  lg:grid-cols-4 gap-4">
                  <div v-for="(skill, index) in homeStore.skills" v-motion :initial="{ opacity: 0, scale: 0.8 }"
                     :visible-once="{ opacity: 1, scale: 1, transition: { duration: 300, delay: index * 100 } }"
                     class="p-4 bg-black/5 backdrop-blur-sm rounded-md shadow-md hover:shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 border border-purple-500/20 hover:border-purple-500/40 text-center group transition-all cursor-pointer">
                     <!-- Icon -->
                     <p class="text-3xl mb-3 group-hover:scale-110 transition-transform">
                        {{ skill.icon }}
                     </p>
                     <p class="text-sm text-gray-300">{{ skill.name }}</p>
                  </div>
               </div>
               <!-- Stats -->
               <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div
                     class="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 rounded-md p-4 text-center">
                     <p class="text-3xl mb-1">4+</p>
                     <p class="text-sm text-gray-300">Years Experience</p>
                  </div>
                  <div
                     class="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 rounded-md p-4 text-center">
                     <p class="text-3xl mb-1">200+</p>
                     <p class="text-sm text-gray-300">Projects Done</p>
                  </div>
                  <div
                     class="bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 rounded-md p-4 text-center">
                     <p class="text-3xl mb-1">100+</p>
                     <p class="text-sm text-gray-300">Happy Clients</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
