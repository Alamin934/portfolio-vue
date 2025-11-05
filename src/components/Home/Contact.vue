<template>
   <section id="contact" class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0c1a2e] to-[#020617]"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
         <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl mb-4">
               <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Let's Create Something
               </span>
               <br />
               <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Amazing Together
               </span>
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
               Have a project in mind? Let's discuss how I can help bring your ideas to life
            </p>
         </div>

         <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div class="space-y-6">
               <div
                  class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-xl shadow-cyan-500/10">
                  <h3 class="text-2xl mb-6 text-white">Get in Touch</h3>

                  <div class="space-y-4">
                     <div class="flex items-start gap-4">
                        <div
                           class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                           <Mail class="text-cyan-400 w-5 h-5" />
                        </div>
                        <div>
                           <h4 class="text-white mb-1">Email</h4>
                           <p class="text-gray-400">alamin@example.com</p>
                        </div>
                     </div>

                     <div class="flex items-start gap-4">
                        <div
                           class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                           <Phone class="text-cyan-400 w-5 h-5" />
                        </div>
                        <div>
                           <h4 class="text-white mb-1">Phone</h4>
                           <p class="text-gray-400">+1 (555) 123-4567</p>
                        </div>
                     </div>

                     <div class="flex items-start gap-4">
                        <div
                           class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                           <MapPin class="text-cyan-400 w-5 h-5" />
                        </div>
                        <div>
                           <h4 class="text-white mb-1">Location</h4>
                           <p class="text-gray-400">San Francisco, CA</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div
                  class="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
                  <h4 class="text-white mb-2">Current Availability</h4>
                  <p class="text-gray-300">
                     ✨ Open for new projects and collaborations
                  </p>
               </div>
            </div>

            <div>
               <div
                  class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-xl shadow-cyan-500/10">
                  <form class="space-y-6">
                     <div>
                        <label for="name" class="block text-white mb-2">Your Name</label>
                        <input id="name" name="name" type="text" required
                           class="w-full bg-white/5 border border-cyan-500/30 focus:border-cyan-500/60 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                           placeholder="John Doe" />
                     </div>

                     <div>
                        <label for="email" class="block text-white mb-2">Your Email</label>
                        <input id="email" name="email" type="email" required
                           class="w-full bg-white/5 border border-cyan-500/30 focus:border-cyan-500/60 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                           placeholder="john@example.com" />
                     </div>

                     <div>
                        <label for="message" class="block text-white mb-2">Your Message</label>
                        <textarea id="message" name="message" required rows="6"
                           class="w-full bg-white/5 border border-cyan-500/30 focus:border-cyan-500/60 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none"
                           placeholder="Tell me about your project..."></textarea>
                     </div>

                     <button type="submit"
                        class="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all flex items-center justify-center gap-2">
                        <Send size="20" />
                        Send Message
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>