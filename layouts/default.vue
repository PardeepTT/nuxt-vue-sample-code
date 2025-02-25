<template>
    <div>
        <header class="shadow-sm">
            <div class="mb-5  p-5">
                N Dojo Products
            </div>
            <nav class="p-10">
                <ul class=" flex flex-row justify-start gap-8">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>

    <div class="p-10 text-gray-900">
        <slot>Loading...</slot>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: red;
}
</style>