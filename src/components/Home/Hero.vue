<script setup>
import { useCommonStore } from "@/stores/common";
import { Download, Folder, Github, Facebook, Linkedin, ArrowDown } from "lucide-vue-next";

const common = useCommonStore();
</script>
<template>
   <section class="flex items-center justify-center relative overflow-hidden pt-20 pb-10" id="home">
      <div class="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0c1a2e] to-[#020617]"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 py-20 relative z-10">
         <div class="grid md:grid-cols-2  gap-8 lg:gap-12 items-center">
            <!-- Left Item -->
            <div v-motion :initial="{ x: -50, opacity: 0 }"
               :enter="{ x: 0, opacity: 1, transition: { duration: 800 } }">
               <p class="text-cyan-400 mb-2">Hi, I'm Al-Amin</p>
               <h1 class="text-4xl sm:text-5xl lg:text-6xl mb-4 leading-11 sm:leading-14 lg:leading-18">
                  <span
                     class="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Wordpress
                     & Laravel</span>
                  Developer
               </h1>
               <p class="text-gray-300 mb-8 leading-relaxed max-w-lg">
                  I build responsive, high-performing websites using modern web
                  technologies.
               </p>
               <div class="flex flex-wrap gap-4 mb-8">
                  <button
                     class="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-md shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 trasition-all flex items-center gap-2 cursor-pointer">
                     <Folder /> My Projects
                  </button>
                  <button
                     class="px-8 py-4 border-2 border-cyan-500/50 rounded-md hover:bg-cyan-500/10 trasition-all flex items-center gap-2 cursor-pointer">
                     <Download /> Download CV
                  </button>
               </div>
               <div class="flex flex-wrap gap-4">
                  <a href=""
                     class="w-12 h-12 rounded-md bg-black/5 hover:bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
                     <Github />
                  </a>
                  <a href=""
                     class="w-12 h-12 rounded-md bg-black/5 hover:bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
                     <Linkedin />
                  </a>
                  <a href=""
                     class="w-12 h-12 rounded-md bg-black/5 hover:bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
                     <Facebook />
                  </a>
               </div>
            </div>
            <!-- Right Item -->
            <div class="relative flex justify-end items-center" v-motion :initial="{ x: 50, opacity: 0 }"
               :enter="{ x: 0, opacity: 1, transition: { delay: 200, duration: 800 } }">
               <div
                  class="relative inline-block border-2 border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20 overflow-hidden md:w-5/6 w-full h-auto">
                  <img class="relative z-10 w-full h-auto object-cover" alt="Hero Avatar"
                     src="@/assets/images/me.png" />
               </div>
            </div>
         </div>
         <div class="flex justify-center absolute inset-x-0 bottom-0" v-motion :initial="{ y: 0 }"
            :enter="{ y: [0, 10, 0], transition: { duration: 2000, repeat: Infinity } }">
            <button
               class="text-cyan-400 hover:text-white border border-cyan-500 rounded-full p-1.5 bg-black/30 transition-colors cursor-pointer"
               @click="common.scrollToElement('about')">
               <ArrowDown :size="24" />
            </button>
         </div>
      </div>
   </section>
</template>
