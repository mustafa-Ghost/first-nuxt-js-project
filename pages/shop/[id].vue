<template>
    <main class="product-details">
        <div class="container">
            <div class="image">
                <img :src="product.image" :alt="product.description" loading="lazy" />
            </div>
            <div class="desc">
                <div class="details">
                    <h3>${{ product.price }}</h3>
                    <h1>{{ product.title }}</h1>
                    <p>${{ product.description }}</p>
                </div>
                <div class="add-to-cart">
                    <div class="quantity">
                        <div @click="changeQuantity(-1)">-</div>
                        <div>{{quantity}}</div>
                        <div @click="changeQuantity(1)">+</div>
                    </div>
                    <div>
                        <button @click="addToCart({...product, quantity})">
                            <div>Add To Cart</div>
                            <div>
                                <div :class="{'loading active':isLoading,'loading':!isLoading}"></div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="buy-now">
                    <button>Buy Now</button>
                </div>
                <div class="share">
                    <div>
                        <p>Share To:</p>
                    </div>
                    <div class="icons">
                        <div>
                            <InstagramIcon />
                        </div>
                        <div>
                            <FacebookIcon />
                        </div>
                        <div>
                            <WhatsappIcon />
                        </div>
                    </div>
                </div>
                <div class="returns">
                    <div>
                        <p>30 Days Free Returns</p>
                    </div>
                    <div>
                        <p>Read More</p>
                    </div>
                </div>
                <div class="accordions">
                    <div :class="{'accordion active': activeAccordions[0], 'accordion': !activeAccordions[0]}" @click="activate(0)">
                        <div class="name">
                            <div>
                                <p>Details</p>
                            </div>
                            <div class="btns">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div class="content">
                            <ul>
                                <li v-for='(i, index) in [...Array(5)]'>- Detail {{index}}</li>
                            </ul>
                        </div>
                    </div>
                    <div :class="{'accordion active': activeAccordions[1], 'accordion': !activeAccordions[1]}" @click="activate(1)">
                        <div class="name">
                            <div>
                                <p>Colors</p>
                            </div>
                            <div class="btns">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div class="content">
                            <ul>
                                <li v-for='(i, index) in [...Array(5)]'>- Color {{index}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
    import InstagramIcon from '../../public/assets/icons/instagram.vue'
    import FacebookIcon from '../../public/assets/icons/facebook.vue'
    import WhatsappIcon from '../../public/assets/icons/whatsapp.vue'
    const {id} = useRoute().params 
    const {data:product} = await useFetch(`https://fakestoreapi.com/products/${id}`, {
        key:id
    })

    const activeAccordions = ref([false, false]);
    const quantity = ref(1);
    const isLoading = ref(false)
    const activate = (index) => {
        activeAccordions.value[index] = !activeAccordions.value[index];
    };

    const changeQuantity = (payload) => {
        if (quantity.value + payload >= 1) {
            quantity.value += payload;
        }
    };
    const addToCart = async (data) => {
        isLoading.value = true
        // await useFetch('http://localhost:8000/add-item', {method:'POST', body:data})
        //     .then(res => {
        //     isLoading.value = false
        //         console.log(res.data.value.message)
        //     })
        //     .catch(err => {
        //         isLoading.value = false
        //         console.log(err)
        //     })
        const items = JSON.parse(localStorage.getItem('items')) || [];
        const index = items.findIndex(item => item.id === data.id);
        if (index !== -1) {
            items[index] = data;
        } else {
            items.push(data);
        }
        localStorage.setItem('items', JSON.stringify(items));

    }
</script>
<style scoped>
    .product-details {
        padding: 5rem 0
    }
    .product-details .container {
        display: grid;
        grid-template-columns: 40% 50%;
        justify-content: space-between;
        align-items: center
    }
    .product-details .container img {
        width: 100%;
    }
    .product-details .container .desc .details p {
        font-size: var(--font-size);
        opacity: .9;
    }
    .product-details .container .desc .details h1 {
        font-family: main-bold;
    }
    .product-details .container .desc .details h3 {
        font-weight: 100;
        opacity: .7;
    }
    .product-details .container .add-to-cart {
        display: grid;
        grid-template-columns: 30% auto;
        align-items: center;
        gap: .5rem;
        margin: .5rem 0
    }
    .product-details .container .add-to-cart button {
        color: var(--bg);
        background-color: var(--font);
        border: 1px solid var(--font);
        display: flex;
        align-items: center;
        gap: .8rem;
        justify-content: center;
    }
    .product-details .container .add-to-cart button .loading {
        width:10px;
        height:11px;
        border: 2px solid var(--bg);
        border-radius: 50%;
        display: block;
        clip-path: polygon(100% 0%, 0% 0%, 0% 50%, 50% 50%, 50% 100%, 100% 100%);
        animation: .8s ease loading infinite;
        display: none
    }
    .product-details .container .add-to-cart button .loading.active {
        display: block;
    }
    @keyframes loading {
        from {
            transform: rotate(0)
        }
        to {
            transform: rotate(360deg)
        }
    }
    .product-details .container .add-to-cart button:hover {
        background-color: #161616;
    }
    .product-details .container .add-to-cart .quantity{
        display: grid;
        grid-template-columns: 30px auto 30px;
        width: 100%;
        text-align: center;
        font-size: var(--font-size);
        padding: 1rem;
        border: 1px solid var(--bg-3);
    }
    .product-details .container button {
        width: 100%;
        font-size: var(--font-size);
        padding: 1rem;
        transition: .5s ease;
    }
    .product-details .container .buy-now button {
        color: var(--bg);
        border: 1px solid var(--primary);
        background-color: var(--primary);
    }
    .product-details .container .buy-now button:hover {
        color: var(--primary);
        background-color: var(--bg);
        border-color: var(--bg-3);
    }
    .product-details .container .share {
        display: flex;
        align-items: center;
        margin: 1rem 0;
        gap: 1rem;
    }
    .product-details .container .share p {
        font-size: var(--font-size);
        opacity: .7;
    }
    .product-details .container .share .icons {
        gap: 1rem;
        display: flex;
        font-size: var(--font-size);
        align-items: center;
    }
    .product-details .container .share .icons div {
        display: flex;
        opacity: .8;
        align-items: center;
        transition: .5s ease
    }
    .product-details .container .share .icons div:hover {
        opacity: .5
    }
    .product-details .container .returns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        margin: .5rem 0;
        border: 1px solid var(--primary);
        background: #064e7716;
        color: var(--primary);
    }
    .product-details .container .accordions .accordion {
        border: 1px solid var(--bg-3);
        margin: .5rem 0;
        transition: .5s ease;
        overflow: hidden
    }
    .product-details .container .accordions .accordion:not(.active){
        height: 55px;
    }
    .product-details .container .accordions .accordion.active {
        height: calc(205px + .5rem + 1rem);
    }
    .product-details .container .accordions .name {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--bg-3);
        justify-content: space-between;
        padding: 1rem;
    }
    .product-details .container .accordions .name .btns {
        width: 8px;
        height: 8px;
        position: relative
    }
    .product-details .container .accordions .name .btns div {
        width: 100%;
        height: 1px;
        display: block;
        position: absolute;
        inset: 0;
        margin: auto;
        background: var(--font);
        transition: .5s ease
    }
    .product-details .container .accordions .name .btns div:nth-child(1){
        transform: rotate(90deg)
    }
    
    .product-details .container .accordions .content {
        padding: 1rem;
    }
    .product-details .container .accordions .accordion.active .name .btns div:nth-child(1){
        transform: rotate(0deg)
    }
    .product-details .container .accordions p {
        font-family: main-bold;
    }
    .product-details .container .accordions ul {
        list-style: none;
    }
    .product-details .container .accordions ul li {
        margin: .5rem 0;
        font-size: var(--font-size);
    }
</style>
