<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import FrontendLayout from "@/Layouts/Frontend.vue";
import Hero from "@/Components/Frontend/Hero.vue";
import Promote from "@/Components/Frontend/Promote.vue";
import About from "@/Components/Frontend/About.vue";

import Services from "@/Components/Frontend/Services.vue";
import Contact from "../Components/Frontend/Contact.vue";


</script>

<template>
  <Head title="Welcome to portfolio" />
  <FrontendLayout>
    <!-- Hero primary -->
    <Hero />
    <!-- Promote tail-100 -->
    <Promote />
    <!-- About secondary -->
    <About />
    <!-- Skills tail-100 -->
    <Skills  />
    <!-- Portfolio primary -->
    <Portfolio  />
    <!-- Services secondary -->
    <Services />
    <!-- Contact primary -->
    <Contact />
  </FrontendLayout>
</template>


