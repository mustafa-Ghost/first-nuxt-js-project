<template>
    <main id='cart'>
        <div class="container">
            <div class="desc">
                <NuxtLink to="/">
                    Go Back
                </NuxtLink>
                <h1>Cart</h1>
            </div>
            <div class="grid">
                <div class="cart-container">
                    <table v-if="products">
                        <thead>
                            <tr>
                                <th>
                                    Details
                                </th>
                                <th>
                                    Quantity
                                </th>
                                <th>
                                    Price
                                </th>
                                <th>
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in products" :key="item._id">
                                <td class="details">
                                    <div class="image">
                                        <img loading="lazy" :src='item.image' :alt="item.title"/>
                                    </div>
                                    <div>
                                        <h3>{{item.title.length >= 39 ? item.title.slice(0, 39) + '...' : item.title}}</h3>
                                        <h5>Category</h5>
                                    </div>
                                </td>
                                <td>
                                    <div class="quantity">
                                        <div>-</div>
                                        <div>{{item.quantity}}</div>
                                        <div>+</div>
                                    </div>
                                </td>
                                <td class="price">
                                    ${{item.price}}
                                </td>
                                <td class="price">
                                    ${{itemTotalPrice(item.quantity, item.price )}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p v-if="!products">
                        No Products
                    </p>
                </div>
                <div class="total">
                    <h1>TOTAL</h1>
                    <ul>
                        <li>
                            <div>Total Prices:</div>
                            <div>${{getTotal()}}</div>
                        </li>
                        <li>
                            <div>Discount:</div>
                            <div>0%</div>
                        </li>
                        <li>
                            <div>Total:</div>
                            <div>${{total}}</div>
                        </li>
                    </ul>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
    const {data:items} = await useFetch('http://localhost:8000/get-data')
    const products = items.value
    const totals = ref([0,0])
    const total = ref(0)
    const itemTotalPrice = computed(() => (quantity, price) => {
        return quantity * price
    });
    const reduceArray = computed(() => (data) => {
        const totalNumber = data.reduce((n1, n2) => n1 + n2)
        return totalNumber
    });
    const getTotal = computed(() => () => {
        products.map(product => {
            const productTotal = itemTotalPrice.value(product.quantity, product.price)
            totals.value.push(productTotal)
        })
        const totalNumber = reduceArray.value(totals.value)
        total.value = totalNumber
        return totalNumber

    });
</script>
<style scoped>
    #cart {
        padding: 3rem 0
    }
    #cart .container .grid {
        display: grid;
        grid-template-columns: 70% 30%;
        gap:1rem
    }
    #cart .container .desc {
        display: flex;
        width: 50%;
        justify-content: space-between;
        align-items: center;
    }
    #cart .container .desc a {
        font-size: var(--font-size);
    }
    #cart .container .desc h1 {
        font-size: var(--title);
        font-family: brand;
        font-weight: 100;
    }

    #cart table {
        width:100%;
        margin-top: 4rem;
        border-collapse: collapse;
    }
    #cart table .image {
        width: 100%;
        height: 200px;
    }
    #cart table .image img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
        object-fit: cover;
    }
    #cart table tr th {
        font-family: main-bold;
    }
    #cart table tr td {
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
    }
    #cart table tr :is(td, th){
        text-align: start;
        font-size: calc(var(--font-size)*1.4);
        padding: 1rem;
    }
    #cart table tr td.details {
        display: grid;
        grid-template-columns: 25% 100%;
        align-items: center;
        gap: 2rem;
    }
    #cart table tr {
    }
    #cart table tr td.details h5 {
        font-weight: 100;
    }
    #cart table tr td .quantity{
        display: grid;
        grid-template-columns: 30px auto 30px;
        width: 100%;
        text-align: center;
        font-size: var(--font-size);
        padding: 1rem;
        border: 1px solid var(--bg-3);
    }
    #cart table tr td.price {
        font-size: var(--font-size);
        opacity: .8;
    }
    #cart .container .grid .total {
        border: 1px solid #e6e6e6;
        padding: 2rem;
        margin-top: 7.5rem
    }
    #cart .container .grid .total h1 {
        font-family: main-bold;
        font-size: calc(var(--title) * .8)
    }
    #cart .container .grid .total ul {
        list-style: none;
    }
    #cart .container .grid .total ul li {
        display: flex;
        align-items: center;
        gap: .6rem;
        margin: .5rem 0
    }
    #cart .container .grid .total button {
        width: 100%;
        text-align: center;
        background: var(--primary);
        color: var(--bg);
        border: none;
        padding: 1rem;
        margin-top: 1rem;
        transition: .5s;
    }
    #cart .container .grid .total button:hover {
        filter: brightness(90%);
    }
</style>