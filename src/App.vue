<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import TheFooter from '@/components/TheFooter.vue';
import GokopingLogo from '@/components/icons/GokopingLogo.vue';
import HamburgerMenu from '@/components/icons/HamburgerMenu.vue';
import LeftArrow from '@/components/icons/LeftArrow.vue';
import RightArrow from '@/components/icons/RightArrow.vue';
import ShoppingCart from '@/components/icons/ShoppingCart.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import GreenCheck from '@/components/icons/GreenCheck.vue';
import LocationIcon from '@/components/icons/LocationIcon.vue';
import PhoneIcon from '@/components/icons/PhoneIcon.vue';
import MailIcon from '@/components/icons/MailIcon.vue';
</script>

<template>
    <TheHeader />
    <ProductDetails />
    <GokopingLogo />
    <ShoppingCart />
    <HamburgerMenu />
    <LeftArrow />
    <RightArrow />
    <StarIcon />
    <HeartIcon />
    <GreenCheck />
    <LocationIcon />
    <PhoneIcon />
    <MailIcon />
    <TheFooter />
</template>

<style scoped></style>
