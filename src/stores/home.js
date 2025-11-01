import { defineStore } from "pinia";
import { reactive } from "vue";

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
   // Gettars

   // Actions

   // Return
   return { skills };
});