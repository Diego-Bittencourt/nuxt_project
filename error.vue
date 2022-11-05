<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Oooops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn my-7" @click="handleError">Back to Top</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    //handling error with the built-in cearError() function in NUXT
    const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped>
    
</style>

