<template>
   <section id="education" class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0c1a2e] to-[#020617]"></div>
      <div class="absolute top-20 right-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
         <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl mb-4">
               <span class="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                  Education & Experience
               </span>
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto">
               My academic background and professional journey in web development
            </p>
         </div>

         <div class="grid lg:grid-cols-2 gap-12">
            <!-- ================= EDUCATION ================= -->
            <div>
               <div class="flex items-center gap-3 mb-8">
                  <div
                     class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center">
                     <GraduationCap class="text-cyan-400 w-6 h-6" />
                  </div>
                  <h3 class="text-2xl text-white">Education</h3>
               </div>

               <div class="space-y-6">

                  <!-- Education 1 -->
                  <div
                     class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all relative">
                     <div class="flex items-start gap-4">
                        <div
                           class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 flex-shrink-0">
                           <GraduationCap class="text-white w-6 h-6" />
                        </div>
                        <div class="flex-1">
                           <h4 class="text-xl text-white mb-1">Bachelor of Computer Science</h4>
                           <p class="text-cyan-400 mb-1">University of Technology</p>
                           <div class="flex items-center gap-4 text-gray-400 text-sm mb-3">
                              <span class="flex items-center gap-1">
                                 <Calendar size="14" /> 2015 - 2019
                              </span>
                              <span>• San Francisco, CA</span>
                           </div>
                           <p class="text-gray-300 mb-3">
                              Focused on software engineering, web development, and database management. Graduated with
                              honors.
                           </p>
                           <ul class="space-y-1">
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-cyan-400 mt-1">•</span>
                                 <span>Dean's List all semesters</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-cyan-400 mt-1">•</span>
                                 <span>Best Final Year Project Award</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-cyan-400 mt-1">•</span>
                                 <span>GPA: 3.8/4.0</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <!-- Education 2 -->
                  <div
                     class="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all relative">
                     <div class="flex items-start gap-4">
                        <div
                           class="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 flex-shrink-0">
                           <GraduationCap class="text-white w-6 h-6" />
                        </div>
                        <div class="flex-1">
                           <h4 class="text-xl text-white mb-1">Full Stack Web Development</h4>
                           <p class="text-cyan-400 mb-1">CodeAcademy Bootcamp</p>
                           <div class="flex items-center gap-4 text-gray-400 text-sm mb-3">
                              <span class="flex items-center gap-1">
                                 <Calendar size="14" /> 2019
                              </span>
                              <span>• Online</span>
                           </div>
                           <p class="text-gray-300 mb-3">
                              Intensive 6-month program covering modern web technologies and best practices.
                           </p>
                           <ul class="space-y-1">
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-cyan-400 mt-1">•</span>
                                 <span>Built 15+ real-world projects</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-cyan-400 mt-1">•</span>
                                 <span>Top 5% of graduating class</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-cyan-400 mt-1">•</span>
                                 <span>Certification in Laravel & React</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

            <!-- ================= EXPERIENCE ================= -->
            <div>
               <div class="flex items-center gap-3 mb-8">
                  <div
                     class="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-600/20 border border-teal-500/30 flex items-center justify-center">
                     <Briefcase class="text-teal-400 w-6 h-6" />
                  </div>
                  <h3 class="text-2xl text-white">Work Experience</h3>
               </div>

               <div class="space-y-6">

                  <!-- Experience 1 -->
                  <div
                     class="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all relative">
                     <div class="flex items-start gap-4">
                        <div
                           class="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/30 flex-shrink-0">
                           <Briefcase class="text-white w-6 h-6" />
                        </div>
                        <div class="flex-1">
                           <h4 class="text-xl text-white mb-1">Senior Full Stack Developer</h4>
                           <p class="text-teal-400 mb-1">TechFlow Solutions</p>
                           <div class="flex items-center gap-4 text-gray-400 text-sm mb-3">
                              <span class="flex items-center gap-1">
                                 <Calendar size="14" /> 2021 - Present
                              </span>
                              <span>• Full-time</span>
                              <span>• San Francisco, CA</span>
                           </div>
                           <p class="text-gray-300 mb-3">
                              Leading development of enterprise web applications using Laravel and React. Managing a
                              team of 5 developers.
                           </p>
                           <ul class="space-y-1">
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Architected and developed scalable web applications</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Led code reviews and mentored junior developers</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Improved application performance by 50%</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Implemented CI/CD pipelines with Docker</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <!-- Experience 2 -->
                  <div
                     class="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all relative">
                     <div class="flex items-start gap-4">
                        <div
                           class="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/30 flex-shrink-0">
                           <Briefcase class="text-white w-6 h-6" />
                        </div>
                        <div class="flex-1">
                           <h4 class="text-xl text-white mb-1">WordPress Developer</h4>
                           <p class="text-teal-400 mb-1">Creative Digital Agency</p>
                           <div class="flex items-center gap-4 text-gray-400 text-sm mb-3">
                              <span class="flex items-center gap-1">
                                 <Calendar size="14" /> 2019 - 2021
                              </span>
                              <span>• Full-time</span>
                              <span>• Remote</span>
                           </div>
                           <p class="text-gray-300 mb-3">
                              Developed custom WordPress themes and plugins for clients across various industries.
                           </p>
                           <ul class="space-y-1">
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Built 30+ custom WordPress websites</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Created reusable theme frameworks</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Optimized websites for SEO and performance</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Provided technical support and maintenance</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <!-- Experience 3 -->
                  <div
                     class="bg-white/5 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10 transition-all relative">
                     <div class="flex items-start gap-4">
                        <div
                           class="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/30 flex-shrink-0">
                           <Briefcase class="text-white w-6 h-6" />
                        </div>
                        <div class="flex-1">
                           <h4 class="text-xl text-white mb-1">Junior Web Developer</h4>
                           <p class="text-teal-400 mb-1">StartUp Inc</p>
                           <div class="flex items-center gap-4 text-gray-400 text-sm mb-3">
                              <span class="flex items-center gap-1">
                                 <Calendar size="14" /> 2018 - 2019
                              </span>
                              <span>• Internship</span>
                              <span>• San Francisco, CA</span>
                           </div>
                           <p class="text-gray-300 mb-3">
                              Contributed to various web development projects while learning industry best practices.
                           </p>
                           <ul class="space-y-1">
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Assisted in frontend development with React</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Fixed bugs and implemented new features</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Collaborated with designers and backend team</span>
                              </li>
                              <li class="text-gray-400 text-sm flex items-start gap-2">
                                 <span class="text-teal-400 mt-1">•</span>
                                 <span>Participated in agile development processes</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { GraduationCap, Briefcase, Calendar } from 'lucide-vue-next'
</script>

<style scoped>
/* Styling managed by TailwindCSS */
</style>
