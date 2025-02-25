<script setup>

import { useRoute } from 'vue-router';

const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`
const { data: product } = await useFetch(uri, { key: "product" + id });

if (!product.value) {
    throw createError({
        statusCode: 404,
        statusMessage: "Product not found!",
        fatal: true
    })
}
</script>

<template>
    <!-- Way 2 of setup metadata manually per page -->
    <Head>
        <Title>N | {{ product.title }}</Title>
        <Meta name="description" content="some new product details" />
    </Head>

    <body>
        <div>
            <ProductDetails :product="product" />
        </div>
    </body>
</template>

<style></style>