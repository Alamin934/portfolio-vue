<script setup>
import { useHomeStore } from "@/stores/home";
import { ExternalLink as ExternalLinkIcon, Github as GithubIcon } from "lucide-vue-next";

const homeStore = useHomeStore();
</script>
<template>
   <section id="projects" class="py-20 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0c1a2e] to-[#020617]"></div>
      <div class="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
         <div v-motion :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }" class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl mb-4">
               <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  My Projects
               </span>
            </h2>
            <p class="text-gray-300 max-w-2xl mx-auto">
               A showcase of my recent work and successful client projects
            </p>
         </div>

         <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div v-for="(project, index) in homeStore.projects" :key="project.title" v-motion
               :initial="{ opacity: 0, y: 30 }"
               :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
               class="group relative">

               <!-- Card -->
               <div
                  class="relative bg-black/5 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300">
                  <!-- Image -->
                  <div class="relative h-48 overflow-hidden">
                     <img :src="project.image" :alt="project.title"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     <div class="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60"></div>

                     <!-- Category Badge -->
                     <div class="absolute top-4 right-4">
                        <span
                           class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0 px-3 py-1 rounded-full text-sm">
                           {{ project.category }}
                        </span>
                     </div>

                     <!-- Hover overlay with links -->
                     <div
                        class="absolute inset-0 bg-cyan-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <button
                           class="w-12 h-12 rounded-full bg-black/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/20 transition-all">
                           <RouterLink :to="`project/${project.id}`">
                              <ExternalLinkIcon :size="20" />
                           </RouterLink>
                        </button>
                        <button
                           class="w-12 h-12 rounded-full bg-black/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/20 transition-all">
                           <GithubIcon :size="20" />
                        </button>
                     </div>
                  </div>

                  <!-- Content -->
                  <div class="p-6">
                     <h3 class="text-xl mb-2 text-white">{{ project.title }}</h3>
                     <p class="text-gray-300 mb-4">{{ project.description }}</p>

                     <!-- Tags -->
                     <div class="flex flex-wrap gap-2">
                        <span v-for="tag in project.tags" :key="tag"
                           class="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
                           {{ tag }}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <!-- See All Button -->
         <div v-motion :initial="{ opacity: 0 }"
            :visible-once="{ opacity: 1, transition: { duration: 600, delay: 300 } }" class="text-center">
            <button
               class="border-2 border-cyan-500/50 text-white hover:bg-cyan-500/10 px-8 py-4 rounded-md transition-all cursor-pointer">
               See All Projects
            </button>
         </div>
      </div>
   </section>
</template>