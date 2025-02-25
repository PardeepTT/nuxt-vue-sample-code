
import type { Style } from '#build/components';
<script setup>
    const { product } = defineProps(['product'])
</script>

<template>
    <div class="px-6 pt-6 pb-10 card text-center  bg-white hover:bg-green-50 ">
        <NuxtLink :to="`/products/${product.id}`">
            <p class="font-bold text-gray-500 m-5 truncate" >{{ product.title }}</p>
            <img :src="product.image" alt="Product thumb" class="thumb"/>
        </NuxtLink>
    </div>
</template>

<style scoped>
    .thumb {
        max-height: 120px;
        max-width: 10%;
        margin: 0 auto;
    }
</style>