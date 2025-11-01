import { defineStore } from "pinia";
import { reactive } from "vue";
import { Globe, Code2, Palette, Zap } from "lucide-vue-next";

export const useHomeStore = defineStore('home', () => {
   // State
   let skills = reactive([
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Laravel', icon: '🔷' },
      { name: 'Vue.js', icon: '💚' },
      { name: 'WordPress', icon: '📝' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'Tailwind', icon: '🌊' },
   ]);
   let services = reactive([
      {
         icon: Globe,
         title: 'WordPress Development',
         description: 'Custom WordPress themes and plugins, WooCommerce solutions, and CMS development tailored to your needs.',
      },
      {
         icon: Code2,
         title: 'Laravel Web Apps',
         description: 'Scalable and robust web applications built with Laravel, featuring modern architecture and best practices.',
      },
      {
         icon: Palette,
         title: 'Frontend Design',
         description: 'Beautiful, responsive interfaces using Vue.js, Bootstrap, and Tailwind CSS for exceptional user experiences.',
      },
      {
         icon: Zap,
         title: 'Website Optimization',
         description: 'Performance tuning, speed optimization, and SEO improvements to make your website lightning fast.',
      },
   ]);
   // Gettars

   // Actions

   // Return
   return { skills, services };
});