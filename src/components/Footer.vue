<script>
import { Github, Linkedin, Facebook, Heart } from "lucide-vue-next";
</script>
<template>
   <footer class="py-8 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#020617] to-black"></div>
      <div class="absolute inset-0 border-t border-cyan-500/20"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
         <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <!-- Copyright -->
            <div class="text-gray-400 text-center md:text-left">
               <p class="flex items-center gap-2 justify-center md:justify-start">
                  © 2025 Alamin. All rights reserved. Made with
                  <Heart class="text-cyan-500 w-4 h-4 fill-current" />
                  by Alamin
               </p>
            </div>

            <!-- Social Icons -->
            <div class="flex gap-4">
               <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  class="w-10 h-10 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
                  <Github size="18" />
               </a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  class="w-10 h-10 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
                  <Linkedin size="18" />
               </a>
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  class="w-10 h-10 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/30">
                  <Facebook size="18" />
               </a>
            </div>
         </div>
      </div>
   </footer>
</template>
