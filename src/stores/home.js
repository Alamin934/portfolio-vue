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
   let projects = reactive([
      {
         id: 1,
         title: 'E-Commerce Platform',
         description: 'Full-featured online store built with Laravel and Vue.js, featuring payment integration and admin dashboard.',
         image: 'https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwxfHx8fDE3NjE0NDEwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
         category: 'Laravel App',
         tags: ['Laravel', 'Vue.js', 'MySQL'],
      },
      {
         id: 2,
         title: 'Business Dashboard',
         description: 'Analytics dashboard with real-time data visualization and reporting features for business intelligence.',
         image: 'https://images.unsplash.com/photo-1748609278627-4b0e483b9b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MTQzNzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
         category: 'Laravel App',
         tags: ['Laravel', 'Chart.js', 'Bootstrap'],
      },
      {
         id: 3,
         title: 'Portfolio Website',
         description: 'Custom WordPress theme for a creative agency with portfolio showcase and contact forms.',
         image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjEzMTg4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
         category: 'WordPress Site',
         tags: ['WordPress', 'PHP', 'ACF'],
      },
   ]);
   let testimonials = reactive([
      {
         name: 'Sarah Johnson',
         position: 'CEO, TechStart Inc',
         image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTMzODExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
         review: 'Alamin delivered an exceptional Laravel application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.',
      },
      {
         name: 'Michael Chen',
         position: 'Founder, DigitalFlow',
         image: 'https://images.unsplash.com/photo-1758691737644-ef8be18256c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZm91bmRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTQzMDc3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
         review: 'Working with Alamin was a game-changer for our business. He created a beautiful, fast WordPress site that perfectly represents our brand. Highly recommended!',
      },
      {
         name: 'Emily Rodriguez',
         position: 'Marketing Director, Creative Co',
         image: 'https://images.unsplash.com/photo-1610387694365-19fafcc86d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG9mZmljZXxlbnwxfHx8fDE3NjEzOTk3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
         review: 'Professional, reliable, and incredibly skilled. Alamin transformed our outdated website into a modern, high-performing platform. The results speak for themselves!',
      },
   ]);
   // Gettars

   // Actions

   // Return
   return { skills, services, projects, testimonials };
});