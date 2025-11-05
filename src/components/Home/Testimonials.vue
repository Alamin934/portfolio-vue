<template>
   <section id="testimonials" class="py-20 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0c1a2e] to-[#020617]"></div>
      <div
         class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl">
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
         <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl mb-4">
               <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Client Reviews
               </span>
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
               What my clients say about working with me
            </p>
         </div>

         <div class="max-w-4xl mx-auto">
            <div class="relative">
               <!-- Main testimonial card -->
               <div class="relative">
                  <!-- Glow effect -->
                  <div
                     class="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl opacity-30 blur-xl">
                  </div>

                  <!-- Card -->
                  <div
                     class="relative bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-8 md:p-12">
                     <!-- Quote icon -->
                     <div class="absolute top-6 right-6 text-cyan-500/20">
                        <Quote size="64" />
                     </div>

                     <div class="flex flex-col md:flex-row items-center gap-8">
                        <!-- Client photo -->
                        <div class="flex-shrink-0">
                           <div
                              class="w-24 h-24 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/30">
                              <img
                                 src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                 alt="Sarah Johnson" class="w-full h-full object-cover" />
                           </div>
                        </div>

                        <!-- Content -->
                        <div class="flex-1 text-center md:text-left">
                           <p class="text-gray-300 text-lg mb-6 leading-relaxed">
                              "Alamin delivered an exceptional Laravel application that exceeded our expectations. His
                              attention to
                              detail and technical expertise made the entire process smooth and efficient."
                           </p>

                           <!-- Rating Stars -->
                           <div class="flex justify-center md:justify-start gap-1 mb-4 text-cyan-400">
                              ★★★★★
                           </div>

                           <div>
                              <h4 class="text-xl text-white mb-1">Sarah Johnson</h4>
                              <p class="text-cyan-400">CEO, TechStart Inc</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- Navigation buttons (icons only, no click) -->
               <div class="flex justify-center gap-4 mt-8">
                  <button
                     class="w-12 h-12 rounded-full bg-white/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                     <ChevronLeft size="24" />
                  </button>
                  <button
                     class="w-12 h-12 rounded-full bg-white/5 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                     <ChevronRight size="24" />
                  </button>
               </div>

               <!-- Dots indicator -->
               <div class="flex justify-center gap-2 mt-6">
                  <button class="bg-cyan-500 w-8 h-2 rounded-full"></button>
                  <button class="bg-cyan-500/30 w-2 h-2 rounded-full"></button>
                  <button class="bg-cyan-500/30 w-2 h-2 rounded-full"></button>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { ChevronLeft, ChevronRight, Quote } from "lucide-vue-next";

export default {
   components: {
      ChevronLeft,
      ChevronRight,
      Quote,
   },
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
