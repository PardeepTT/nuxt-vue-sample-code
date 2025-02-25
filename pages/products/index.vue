<script setup>

definePageMeta({
    layout: 'product-specific'
})


const { data: products } = useFetch("https://fakestoreapi.com/products", 'get')

</script>

<template>
    <div>
        <h1>Product main Page</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic magni reiciendis expedita non eius nisi
            perspiciatis explicabo quis sequi omnis.
        </p>

        <div class="grid grid-cols-4 gap-5 mt-10">
            <div v-for="p in products" :key="p.id">
                <ProductCard :product="p" />
            </div>

        </div>
    </div>
</template>

<style></style>