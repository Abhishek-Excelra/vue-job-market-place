<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

import './Navbar.css'

defineOptions({
  name: 'JobsNavbar'
})

defineProps({
  title: String,
})
const navLinks = ref([
  { name: 'Home', path: '/' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Add Job', path: '/add-job' },
])
</script>
<template>
  <nav class="navbar">
    <RouterLink to="/" class="navbar__brand">
      <div class="navbar__logo">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 24L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z" fill="url(#gradient1)"/>
          <path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="navbar__title-section">
        <h1 class="navbar__title">{{ title }}</h1>
        <span class="navbar__subtitle">Find Your Dream Job</span>
      </div>
    </RouterLink>
    <ul class="navbar__links">
      <li class="navbar__item" v-for="value in navLinks" :key="value.name">
        <RouterLink class="navbar__link" :to="value.path" active-class="navbar__link--active">{{ value.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
