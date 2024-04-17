<template>
    <main>
        <section class="hero">
            <div class="image" :style="`transform: translateY(${heroTextY * -1}px);`">
                <img alt="hero image" src="../public/assets/images/heroImage.webp" />
            </div>
            <div class="title">
                <div :style="`transform: translateY(${heroTextY}dvw);`">
                    <h1>
                        LUXURIOUS
                    </h1>
                </div>
                <div :style="`transform: translateY(${heroTextY}dvw);`">
                    <h1>
                        FASHION
                    </h1>
                </div>
            </div>
            <div class="words">
                <div>
                    <p>WORD</p>
                </div>
                <div>
                    <p>STORE</p>
                </div>
                <div>
                    <p>WORD</p>
                </div>
            </div>
        </section>
        <section class="products">
            <Products />
        </section>
    </main>
</template>
<script>
    export default {
        mounted(){
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            handleScroll(){
                const y = (Math.floor(window.scrollY/6.7) + .4) * -1
                if(y >= -17.4){
                    this.heroTextY = y
                }else {
                    this.heroTextY = -17.4
                }
            }
        },
        data(){
            return {
                heroTextY:0
            }
        }
    }
</script>
<style scoped>
    .hero {
        padding: 3rem var(--space);
        height: 100dvh;
        overflow: hidden;
        position: relative;
    }
    .hero .image {
        width: 40%;
        margin: auto;
    }
    .hero .image img {
        width: 100%;
        vertical-align: middle;
    }
    .hero .title {
        position: absolute;
        top: 9vw;
        z-index: -1;
        left: 0;
        right: 0;
        margin: auto;
        font-family: brand;
        width: fit-content;
        height: 17.4dvw;
        overflow: hidden;
    }
    .hero .title div {
        transition: .5s
    }
    .hero .title h1 {
        text-align: center;
        font-size: 17dvw;
        font-weight: 100;
    }
    .hero .words {
        position: absolute;
        bottom: 2rem;
        left: 0;
        display: flex;
        justify-content: space-between;
        width: calc(100% - var(--space) * 2);
        z-index: 5;
        right: 0;
        margin: auto;
    }
    .hero .words div {
        font-size: var(--font-size);
        font-family: main-bold;
        letter-spacing: 1px;
    }
    .hero .words div:nth-child(2) p{
        color: var(--bg);
        opacity: .4;
    }
</style>