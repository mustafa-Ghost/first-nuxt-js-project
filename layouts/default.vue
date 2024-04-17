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
import Footer from './partials/footer.vue';
import Navbar from './partials/Navbar.vue';
</script>
<style scoped></style>
