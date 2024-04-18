<template>
    <div>
        <Navbar />
        <NuxtPage>
            <slot />
        </NuxtPage>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
</script>
<style scoped></style>
