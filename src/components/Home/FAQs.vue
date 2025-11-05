<template>
   <section id="faqs" class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0c1a2e] to-[#020617]"></div>
      <div
         class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl">
      </div>

      <div class="max-w-4xl mx-auto px-6 relative z-10">
         <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl mb-4">
               <span class="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                  Frequently Asked Questions
               </span>
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
               Find answers to common questions about my services and working process
            </p>
         </div>

         <div class="space-y-4">
            <div v-for="(faq, index) in 1" :key="index"
               class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all">
               <button
                  class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cyan-500/5 transition-all">
                  <span class="text-white pr-8"> faq.question</span>
                  <div class="flex-shrink-0">
                     <div v-if="1 === index"
                        class="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Minus class="text-white" />
                     </div>
                     <div v-else
                        class="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                        <Plus class="text-cyan-400" />
                     </div>
                  </div>
               </button>

               <div
                  :class="`overflow-hidden transition-all duration-300 ${1 === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`">
                  <div class="px-6 pb-5 text-gray-300 leading-relaxed border-t border-cyan-500/10 pt-4">
                     Faq answers
                  </div>
               </div>
            </div>
         </div>

         <div class="mt-12 text-center">
            <div
               class="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8">
               <h3 class="text-2xl text-white mb-3">Still Have Questions?</h3>
               <p class="text-gray-300 mb-6">
                  I'm here to help! Feel free to reach out with any questions about your project.
               </p>
               <button
                  class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all">
                  Contact Me
               </button>
            </div>
         </div>
      </div>
   </section>
</template>