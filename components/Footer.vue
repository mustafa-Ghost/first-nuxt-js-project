<template>
    <footer>
            <div class="image">
                <img src="../public/assets/images/footer.webp" loading="lazy" alt="footer image" />
                <div>
                    <h1>STORE NAME</h1>
                </div>
            </div>
            <div>
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Shop
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        FAQs
                    </li>
                </ul>
            </div>
            <div>
                <h2>Socials</h2>
                <ul>
                    <li>
                        Instagram
                    </li>
                    <li>
                        Facebook
                    </li>
                    <li>
                        Whatsapp
                    </li>
                    <li>
                        Telephone
                    </li>
                </ul>
            </div>
    </footer>
</template>
<script setup></script>
<style scoped>
    footer {
        display: grid;
        grid-template-columns: calc(30vw - 2rem) calc(70vw/2 - 2rem) calc(70vw/2 - 2rem);
        gap: 2rem;
        border-top: 1px solid var(--bg-3);
        height: 60vh;
    }
    footer .image {
        height: 60vh;
        position: relative
    }
    footer .image div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--bg-3);
    }
    footer .image div h1 {
        font-family: brand;
        font-weight: 100;
    }
    footer .image:after {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.652);
        content: '';
        z-index: 3;
        
    }
    footer img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        object-fit: cover;
    }
    footer div:not(.image, .image div){
        margin: 3rem 0;
    }
    footer ul {
        list-style: none;
    }
    footer h2 {
        font-family: brand;
        font-weight: 100;
    }
    footer ul li {
        margin: .7rem 0;
        transition: .5s ease;
        opacity: .7;
        cursor: pointer;
    }
    footer ul li:hover {
        opacity: .4;
    }

</style>