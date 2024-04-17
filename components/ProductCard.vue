<template>
    <figure>
        <div class="image">
            <img :src='product.image' loading="lazy" :alt="product.description" />
            <NuxtLink :to='`/shop/${product.id}`'>
                <button>View Details</button>
            </NuxtLink>
        </div>
        <figcaption>
            <h3>{{product.title.length >= 10 ? product.title.slice(0, 20) + '...' : product.title}}</h3>
            <p>{{product.category}}</p>
        </figcaption>
    </figure>
</template>
<script setup>
    defineProps(['product'])
</script>

<style scoped>
    figure .image {
        height: 40dvh;
        position: relative;
    }
    figure .image a {
        position: absolute;
        inset: 0;
        margin: auto;
        width: fit-content;
        height: fit-content;
    }
    figure .image a button {
        font-size: var(--font-size);
        padding: 1rem 2rem;
        color: var(--primary);
        background-color: var(--bg);
        border: none;
        outline: none;
        transition: .5s ease;
        opacity: 0;
    }
    figure:hover .image a button {
        opacity: 1;
    }
    figure .image a button:hover {
        color: var(--bg);
        background: var(--primary);
        transform: scale(.97);
    }
    figure img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
    }
    figure figcaption {
        text-align: center;
        padding: 1rem
    }
    figure figcaption h3 {
        font-family: main-bold;
        font-size: 1.3dvw;
    }
    figure figcaption p {
        font-size: var(--font-size);
        opacity: .5;
    }
</style>