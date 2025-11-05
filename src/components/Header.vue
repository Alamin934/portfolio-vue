<script setup>
import { useCommonStore } from '@/stores/common';
import { Menu as MenuIcon, X as XIcon } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

let isWindowScroll = ref(false);

function handleScroll() {
   isWindowScroll.value = window.scrollY > 20;
}
onMounted(() => { window.addEventListener('scroll', handleScroll) });
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) });

const common = useCommonStore();
</script>
<template>
   <header
      :class="['fixed top-0 left-0 right-0 transition-all duration-300 z-50', isWindowScroll ? 'bg-[#020617]/90 backdrop-blur-lg shadow-lg shadow-cyan-500/10' : 'bg-transparent']">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
         <!-- Logo -->
         <div class="flex items-center gap-2">
            <div
               class="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/50 cursor-pointer">
               <RouterLink to="/" class="text-xl text-white">A</RouterLink>
            </div>
         </div>
         <!-- Menu -->
         <nav class="hidden md:flex items-center gap-8">
            <button @click="common.scrollToElement('home')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer">Home</button>
            <button @click="common.scrollToElement('about')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer text-left">About</button>
            <button @click="common.scrollToElement('services')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer">Services</button>
            <button @click="common.scrollToElement('projects')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer">Projects</button>
            <button @click="common.scrollToElement('testimonials')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer">Testimonials</button>
         </nav>
         <!-- Contact Button -->
         <div class="hidden md:block">
            <button @click="common.scrollToElement('contact')"
               class="py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-md shadow-md shadow-cyan-500/50 hover:shadow-cyan-500/70 cursor-pointer transition-all w-full">Contact
               Me</button>
         </div>
         <!-- Mobile Menu Button -->
         <button class="block md:hidden" @click="common.isMobileMenuOpen = !common.isMobileMenuOpen">
            <component :is="common.isMobileMenuOpen ? XIcon : MenuIcon" :size="24" />
         </button>
         <!-- Mobile Menu -->
      </div>

      <div v-if="common.isMobileMenuOpen"
         class="px-6 py-4 bg-[#020617]/95 border-t border-cyan-500/20 backdrop-blur-lg min-h-screen ">
         <nav class="flex flex-col gap-4">
            <button @click="common.scrollToElement('home')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer text-left">Home</button>
            <button @click="common.scrollToElement('about')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer text-left">About</button>
            <button @click="common.scrollToElement('services')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer text-left">Services</button>
            <button @click="common.scrollToElement('projects')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer text-left">Projects</button>
            <button @click="common.scrollToElement('testimonials')"
               class="text-gray-300 hover:text-white transition-colors cursor-pointer text-left">Testimonials</button>
         </nav>
         <button @click="common.scrollToElement('contact')"
            class="mt-10 d-block py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-md shadow-md shadow-cyan-500/50 hover:shadow-cyan-500/70 cursor-pointer transition-all w-full">Contact
            Me</button>
      </div>
   </header>
</template>