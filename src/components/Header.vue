<script setup>
import { Menu as MenuIcon, X as XIcon } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

let isMobileMenuOpen = ref(false);
let isWindowScroll = ref(false);

function handleScroll() {
   isWindowScroll.value = window.scrollY > 20;
}
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

function scrollToElement(id) {
   let targetedElement = document.getElementById(id);
   targetedElement.scrollIntoView({ behavior: 'smooth' });
   isMobileMenuOpen.value = false;
}
</script>
<template>
   <header
      :class="['fixed top-0 left-0 right-0 transition-all duration-300 z-50', isWindowScroll ? 'bg-[#0a0118]/90 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent']">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
         <!-- Logo -->
         <div class="flex items-center gap-2">
            <div
               class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg shadow-lg shadow-purple-500/50 cursor-pointer">
               <RouterLink to="/" class="text-xl text-white">A</RouterLink>
            </div>
         </div>
         <!-- Menu -->
         <nav class="hidden md:flex">
            <button @click="scrollToElement('home')"
               class="px-3 text-gray-300 hover:text-white cursor-pointer">Home</button>
            <button @click="scrollToElement('services')"
               class="px-3 text-gray-300 hover:text-white cursor-pointer">Services</button>
            <button @click="scrollToElement('projects')"
               class="px-3 text-gray-300 hover:text-white cursor-pointer">Projects</button>
            <button @click="scrollToElement('skills')"
               class="px-3 text-gray-300 hover:text-white cursor-pointer">Skills</button>
            <button @click="scrollToElement('testimonials')"
               class="px-3 text-gray-300 hover:text-white">Testimonials</button>
         </nav>
         <!-- Contact Button -->
         <div class="hidden md:block">
            <button @click="scrollToElement('contact')"
               class="py-3 px-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-md shadow-md shadow-purple-500/50 hover:shadow-purple-500/70 cursor-pointer transition-all w-full">Contact
               Me</button>
         </div>
         <!-- Mobile Menu Button -->
         <button class="block md:hidden" @click="isMobileMenuOpen = !isMobileMenuOpen">
            <component :is="isMobileMenuOpen ? XIcon : MenuIcon" :size="24" />
         </button>
         <!-- Mobile Menu -->
      </div>

      <div v-if="isMobileMenuOpen" class="px-6 py-4 bg-[#0a0118]/95 border-t border-purple-500/20 backdrop-blur-lg">
         <nav class="flex flex-col gap-4">
            <button @click="scrollToElement('home')"
               class="px-3 text-gray-300 hover:text-white cursor-pointer">Home</button>
            <button @click="scrollToElement('services')"
               class="px-3 text-gray-300 hover:text-white cursor-pointer">Services</button>
            <button @click="scrollToElement('projects')"
               class="px-3 text-gray-300 hover:text-white cursor-pointer">Projects</button>
            <button @click="scrollToElement('skills')"
               class="px-3 text-gray-300 hover:text-white cursor-pointer">Skills</button>
            <button @click="scrollToElement('testimonials')"
               class="px-3 text-gray-300 hover:text-white">Testimonials</button>
         </nav>
         <button @click="scrollToElement('contact')"
            class="mt-10 d-block py-3 px-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-md shadow-md shadow-purple-500/50 hover:shadow-purple-500/70 cursor-pointer transition-all w-full">Contact
            Me</button>
      </div>
   </header>
</template>