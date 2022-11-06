<template>

    <div>
        <h2>ABOUT</h2>
        <p>Test</p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
//to use server routes, I can make a http request
const { data } = await useFetch('/api/currency/CAD')

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px
}

p {
    margin: 20px 0;
}
</style>