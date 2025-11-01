import { defineStore } from "pinia";
import { ref } from "vue";

export const useCommonStore = defineStore('common', () => {
   // State
   let isMobileMenuOpen = ref(false);

   // Gettars

   // Actions
   function scrollToElement(id) {
      let targetedElement = document.getElementById(id);
      targetedElement.scrollIntoView({ behavior: 'smooth' });
      if (isMobileMenuOpen.value) {
         isMobileMenuOpen.value = false;
      }
   }
   // Return
   return { scrollToElement, isMobileMenuOpen };
});