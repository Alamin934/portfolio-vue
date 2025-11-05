<template>
   <section id="about" class="py-20 relative overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0c1a2e] to-[#020617]"></div>
      <div
         class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl">
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
         <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl mb-4">
               <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  About Me
               </span>
            </h2>
         </div>

         <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Left - Description -->
            <div>
               <div
                  class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all">
                  <p class="text-gray-300 mb-4 leading-relaxed">
                     I'm a passionate web developer with <span class="text-cyan-400">4+ years of experience</span> in
                     creating modern, responsive, and high-performing websites and web applications.
                  </p>
                  <p class="text-gray-300 mb-4 leading-relaxed">
                     My expertise lies in <span class="text-cyan-400">WordPress</span> and <span
                        class="text-cyan-400">Laravel</span> development, with a strong focus on clean code, modern
                     UI/UX design, and website optimization.
                  </p>
                  <p class="text-gray-300 leading-relaxed">
                     I believe in delivering quality work that not only meets but exceeds client expectations, combining
                     technical excellence with creative solutions.
                  </p>
               </div>
            </div>

            <!-- Right - Skills -->
            <div>
               <div class="grid grid-cols-4 gap-4">
                  <div v-for="(skill, index) in 8" :key="index"
                     class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/30 transition-all cursor-pointer group"
                     :style="{ animationDelay: `${index * 100}ms` }">
                     <span class="text-3xl group-hover:scale-110 transition-transform">Skill Icon</span>
                     <span class="text-gray-300 text-sm text-center">Skill Name</span>
                  </div>
               </div>

               <!-- Stats -->
               <div class="grid grid-cols-3 gap-4 mt-8">
                  <div
                     class="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 text-center">
                     <div class="text-3xl mb-1">4+</div>
                     <div class="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div
                     class="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 text-center">
                     <div class="text-3xl mb-1">100+</div>
                     <div class="text-gray-400 text-sm">Projects Done</div>
                  </div>
                  <div
                     class="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 text-center">
                     <div class="text-3xl mb-1">50+</div>
                     <div class="text-gray-400 text-sm">Happy Clients</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>