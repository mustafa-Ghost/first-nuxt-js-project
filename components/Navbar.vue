<template>
    <nav>
        <div class="container">
            <div class="brand">
                <h2>STORE NAME</h2>
            </div>
            <div class="btns">
                <ul>
                    <li>
                        <NuxtLink to="/">
                            <div>HOME</div>
                            <div>HOME</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">
                            <div>ABOUT</div>
                            <div>ABOUT</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/shop">
                            <div>SHOP</div>
                            <div>SHOP</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">
                            <div>CONTACT</div>
                            <div>CONTACT</div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="side-btns">
                <div class="cart">
                    <NuxtLink to="/cart">
                        <Cart />
                    </NuxtLink>
                </div>
                <div :class="{ 'sidebar-btn active': isActive, 'sidebar-btn': !isActive }" @click="() => {
                    secondSlide = false
                    toggle()
                }">
                    <div>
                        <img loading="lazy" src="../public/assets/icons/line.svg" alt="line" />
                    </div>
                    <div>
                        <img loading="lazy" src="../public/assets/icons/line.svg" alt="line" />
                    </div>
                    <div>
                        <img loading="lazy" src="../public/assets/icons/line.svg" alt="line" />
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <div :class='{"sidebar active":isActive, "sidebar":!isActive}'>
    <div :class="{'swiper next': secondSlide, 'swiper': !secondSlide}" >
        <div class="wrapper">
            <div class="swiper-slide">
                <ul>
                    <li v-for="category in categories" @click="() => {
                        routeData = category.toLowerCase()
                        nextSlide()
                    }">
                            <div>
                                {{ category }}
                            </div>
                            <div class="icon">
                                <ChevronRight/>
                            </div>
                    </li>
                </ul>
            </div>
            <div class="swiper-slide">
                <p @click="prevSlide">BACK</p>
                <ul>
                    <li>
                        <NuxtLink :to="`/shop/${routeData}?gender=male`">
                            <div>
                                Male
                            </div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="`/shop/${routeData}?gender=female`">
                            <div>
                                Female
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    <div :class='{"layer active":isActive,"layer":!isActive}' @click="toggle"></div>
</template>
<script setup>

    import Cart from '../public/assets/icons/cart.vue'
    import ChevronRight from '../public/assets/icons/Chevron-right.vue'

    const isActive = ref(false)
    const categories = ['T-shirts', 'Shirts','Pants', 'Shoes','Scarfs','Hats','Accessories','Perfumes', 'Watches']
    const secondSlide = ref(false)
    const routeData = ref('')

    const toggle = () => {
        isActive.value = !isActive.value
    }
    const nextSlide = () => {
        secondSlide.value = true 
    }
    const prevSlide = () => {
        secondSlide.value = false
    }
</script>
<style scoped>
    nav {
        padding: 2rem 0;
        background: var(--bg-2);
    }
    nav .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav .container .brand h2 {
        font-family: brand;
    }
    nav .container .btns ul {
        list-style: none;
        display: flex;
        gap: 1rem;
    }
    nav .container .btns ul li {
        font-size: var(--font-size);
        height: calc(var(--font-size) + .2rem);
        overflow: hidden;
    }
    .router-link-active {
        opacity: .5;
    }
    nav .container .btns ul li a:not(.router-link-active):hover div {
        transform: translateY(calc((var(--font-size) + .2rem) * -1));
    }
    nav .container .btns ul li div {
        transition: .5s ease
    }
    nav .container .btns ul li div:nth-child(2){
        opacity: .5;
    }
    nav .container .side-btns {
        display: flex;
        align-items: end;
        gap: 1rem;
    }
    nav .container .side-btns :is(.cart,.sidebar-btn){
        width: var(--navbar-icons-width);
        height: 20px;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        transition: .5s ease
    }
    nav .container .side-btns :is(.cart:hover,.sidebar-btn:hover){
        opacity: .6;
    }
    nav .container .side-btns .sidebar-btn {
        justify-content: space-between;
        height: 17px;
    }
    nav .container .side-btns .sidebar-btn div {
        width: var(--navbar-icons-width);
        height: 2px;
        transition: .5s ease;
        display: flex;
        align-items: end;
    }
    nav .container .side-btns .sidebar-btn div:nth-child(2) img{
        transition: .5s ease;   
        width: 20px;
        margin-left: auto;
    }
    nav .container .side-btns .sidebar-btn.active div:nth-child(2) img{
        width:0px;
    }
    nav .container .side-btns .sidebar-btn.active div:nth-child(1) {
        transform: rotate(-45deg) translateY(calc(var(--navbar-icons-width)/2 - 1px)) translateX(0rem)
    }
    nav .container .side-btns .sidebar-btn.active div:nth-child(3) {
        transform: rotate(45deg) translateY(calc(var(--navbar-icons-width)/2 * -1 - 1px)) translateX(-.05rem)
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: -30vw;
        transition: .5s ease;
        background-color: var(--bg-2);
        border-right: 1px solid var(--bg-3);
        padding: .3rem;
        height: 100vh;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.086);
        width: 26vw;
        z-index: 100;
    }
    .sidebar.active {
        left: 0
    }
    .sidebar p {
        font-size: var(--font-size);
        opacity: .6;
        margin: 1rem;
        cursor: pointer;
    }
    .sidebar ul {
        list-style: none;
    }
    .sidebar ul li {
        font-size: var(--font-size);
        padding: 1rem;
        border-radius: 1px;
        margin: .3rem 0;
        width: 26vw;
        transition: .5s ease;
        background: var(--bg-2);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sidebar ul li .icon {
        font-size: calc(var(--font-size)*1.3);
        height: calc(var(--font-size)*1.3);
    }
    .sidebar ul li:hover {
        filter: brightness(98%);
        padding: 1rem 1.2rem
    }
    .sidebar .swiper {
        widows: 26vw;
        overflow: hidden
    }
    .sidebar .swiper .wrapper {
        width: 52vw;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .sidebar .swiper .swiper-slide {
        transition: .5s ease;
    }
    .sidebar .swiper.next .swiper-slide {
        transform: translateX(-26vw);
    }
    .layer {
        width: 100dvw;
        height: 100dvh;
        display: block;
        backdrop-filter: blur(4px);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        pointer-events: none;
        transition: .5s ease;
        background: rgba(0, 0, 0, 0.067);
        opacity: 0;
    }
    .layer.active {
        opacity: 1;
        pointer-events: all;
    }
</style>