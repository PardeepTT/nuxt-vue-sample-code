<script setup>
defineProps(['error'])

const handleClearError = () => {
    clearError({
        redirect: '/'
    })
}
</script>

<template>
    <div
        class="card p-10 max-w-sm text-center mx-auto mt-[10%] h-max bg-red-100 border border-red-600 rounded-xl text-red-900">
        <div>
            <p class="mt-10 text-6xl font-bold">{{ error.statusCode }}</p>
            <p class="mt-10 text-xl font-bold">Oops.</p>
            <p class="mt-10 text-xl">{{ error.message }}</p>
        </div>
        <div class="mt-10">
            <button class="btn" @click="handleClearError">Go Home</button>
        </div>
    </div>
</template>
