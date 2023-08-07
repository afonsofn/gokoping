<template>
    <footer>
        <div class="footer-wrapper">
            <section>
                <h3>Contact Us</h3>
                <ul>
                    <li>
                        <LocationIcon />
                        <p>3191 Ethels Spring Lake (Highlands), Florida NY</p>
                    </li>
                    <li>
                        <PhoneIcon />
                        <p>919-485-0891</p>
                    </li>
                    <li>
                        <MailIcon />
                        <p>gokoping@hotmail.com</p>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Policies</a></li>
                </ul>
            </section>

            <section>
                <h3>Costumer Care</h3>
                <ul>
                    <li><a href="#">Size Chart</a></li>
                    <li><a href="#">Gift Vouchers</a></li>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Brand</a></li>
                </ul>
            </section>

            <section>
                <h3>NewsLetter</h3>
                <input
                    type="text"
                    placeholder="Type Your Email"
                />
            </section>
        </div>
    </footer>
</template>

<script setup lang="ts">
import LocationIcon from '@/components/icons/LocationIcon.vue';
import PhoneIcon from '@/components/icons/PhoneIcon.vue';
import MailIcon from '@/components/icons/MailIcon.vue';
</script>

<style scoped>
footer {
    background-color: var(--background-color-secondary);
    height: 479px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    width: var(--content-width);
}

.footer-wrapper > section {
    max-width: 288px;
}

.footer-wrapper > section li {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    color: var(--text-color-secondary);
}

a {
    color: var(--text-color-secondary);
}

svg {
    height: 19px;
    width: 19px;
}

h3 {
    margin-bottom: 34px;
}

@media (max-width: 1530px) {
    .footer-wrapper {
        width: auto;
        padding: 24px 48px;
    }
}

@media (max-width: 1200px) {
    footer {
        height: auto;
    }
}

@media (max-width: 1030px) {
    .footer-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .footer-wrapper > section {
        max-width: none;
    }
}

@media (max-width: 604px) {
    .footer-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        padding: 24px;
    }

    .footer-wrapper > section li {
        margin-bottom: 8px;
    }

    h3 {
        margin-bottom: 16px;
    }

    input[type='text'] {
        width: 100%;
    }
}
</style>
