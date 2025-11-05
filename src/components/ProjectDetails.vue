<template>
   <div class="min-h-screen bg-[#020617] flex items-center justify-center">
      <div class="text-white text-center">
         <h2 class="text-2xl mb-4">Project not found</h2>
         <button
            class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all">
            Go Back
         </button>
      </div>
   </div>
   <div class="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <section class="relative py-20 pt-32 overflow-hidden">
         <div class="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0c1a2e] to-[#020617]"></div>
         <div class="absolute top-20 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>

         <div class="max-w-7xl mx-auto px-6 relative z-10">
            <button class="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
               <ArrowLeft size="20" />
               Back to Projects
            </button>

            <div class="mb-8">
               <span
                  class="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm mb-4">
                  project.category
               </span>
               <h1 class="text-4xl md:text-6xl mb-4">
                  <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                     project.title
                  </span>
               </h1>
               <p class="text-gray-300 text-xl max-w-3xl">
                  project.description
               </p>
            </div>

            <div class="flex flex-wrap gap-6 mb-8">
               <div class="flex items-center gap-2 text-gray-300">
                  <User size="18" class="text-cyan-400" />
                  <span class="text-sm">Client: project.client </span>
               </div>
               <div class="flex items-center gap-2 text-gray-300">
                  <Calendar size="18" class="text-cyan-400" />
                  <span class="text-sm">Duration: project.duration </span>
               </div>
               <div class="flex items-center gap-2 text-gray-300">
                  <Clock size="18" class="text-cyan-400" />
                  <span class="text-sm">Role: project.role </span>
               </div>
            </div>

            <div class="flex flex-wrap gap-4">
               <a href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                  class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all flex items-center gap-2">
                  <ExternalLink size="18" />
                  View Live Site
               </a>
               <a href="project.githubUrl" target="_blank" rel="noopener noreferrer"
                  class="border-2 border-cyan-500/50 text-white hover:bg-cyan-500/10 px-6 py-3 rounded-lg transition-all flex items-center gap-2">
                  <Github size="18" />
                  View on GitHub
               </a>
            </div>
         </div>
      </section>

      <section class="py-12 relative">
         <div class="max-w-7xl mx-auto px-6">
            <div class="relative rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
               <img src="" alt="project.title" class="w-full h-auto" />
               <div class="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-20"></div>
            </div>
         </div>
      </section>

      <section class="py-12 relative">
         <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-3 gap-8">
               <div class="md:col-span-2 space-y-8">
                  <div class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                     <h2 class="text-2xl mb-4">
                        <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                           The Challenge
                        </span>
                     </h2>
                     <p class="text-gray-300 leading-relaxed"> project.challenge </p>
                  </div>
                  <div class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                     <h2 class="text-2xl mb-4">
                        <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                           The Solution
                        </span>
                     </h2>
                     <p class="text-gray-300 leading-relaxed"> project.solution </p>
                  </div>
                  <div class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                     <h2 class="text-2xl mb-6">
                        <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                           Key Results
                        </span>
                     </h2>
                     <div class="grid sm:grid-cols-2 gap-4">
                        <div class="flex items-start gap-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4">
                           <CheckCircle size="20" class="text-cyan-400 flex-shrink-0 mt-0.5" />
                           <span class="text-gray-300"> result </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="space-y-6">
                  <div
                     class="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
                     <h3 class="text-xl mb-4 text-white">Technologies Used</h3>
                     <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-2 text-sm bg-white/10 text-cyan-300 rounded-lg border border-cyan-500/30">
                           tech
                        </span>
                     </div>
                  </div>
                  <div class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
                     <h3 class="text-xl mb-4 text-white">Categories</h3>
                     <div class="flex flex-wrap gap-2">
                        <span
                           class="px-3 py-2 text-sm bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20">
                           tag
                        </span>
                     </div>
                  </div>
                  <div
                     class="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
                     <h3 class="text-xl mb-3 text-white">Interested in a Similar Project?</h3>
                     <p class="text-gray-300 mb-4 text-sm">Let's discuss how I can help bring your ideas to life.</p>
                     <button @click="handleContact"
                        class="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all">
                        Get in Touch
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section class="py-12 relative">
         <div class="max-w-7xl mx-auto px-6 text-center">
            <button
               class="border-2 border-cyan-500/50 text-white hover:bg-cyan-500/10 px-8 py-3 rounded-lg transition-all inline-flex items-center gap-2">
               <ArrowLeft size="18" />
               View All Projects
            </button>
         </div>
      </section>
   </div>
</template>

<script>
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-vue-next';
</script>