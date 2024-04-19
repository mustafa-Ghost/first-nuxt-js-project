<template>
    <div class="products">
        <div v-for="(i, index) in 2" class="row-container">
            <div class="container">
                <div class="desc">
                    <p>100 Items</p>
                    <h2>NEW ARRIVALS</h2>
                    <NuxtLink to="/shop">
                        View All
                    </NuxtLink>
                </div>
            </div>
            <div class="products-swiper-container">
                <swiper class="products-cards-container" :slidesPerView="4.5" :allow-touch-move="true"  :space-between="50">
                    <swiper-slide v-for="p in slicedProducts(index,products)" :key="p.id">
                        <ProductCard :product="p" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="container">
                <div class="desc">
                    <p>100 Items</p>
                    <h2>NEW ARRIVALS</h2>
                    <NuxtLink to="/shop">
                        View All
                    </NuxtLink>
                </div>
            </div>
            <div class="products-swiper-container">
                <swiper class="products-cards-container" :slidesPerView="4.5" :allow-touch-move="true"  :space-between="50">
                    <swiper-slide v-for="p in slicedProducts(index,products)" :key="p.id">
                        <ProductCard :product="p" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const { data: products } = await useFetch('https://fakestoreapi.com/products');

const slicedProducts = computed(() => (index, prds) => {
  const start = index * 12;
  const end = start + 12;
  return prds.slice(start, end);
});
</script>

<style scoped>
    .products {
        padding: 6rem 0;
        border-top: 1px solid var(--bg-3);
    }
    .products .desc {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .products .desc p {
        font-size: var(--font-size);
    }
    .products .desc a {
        font-size: var(--font-size);
        opacity: .5;
    }
    .products .desc h2 {
        font-family: brand;
        font-weight: 100;
        font-size: var(--title);
    }
    .products .row-container {
        margin: 3rem 0;
    }
    .products .products-cards-container {
        display: grid;
        grid-template-columns: repeat(5, auto);
    }
    .products .products-swiper-container {
        margin-top: 3rem
    }
    </style>