<template>
    <div>
    <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4">
            <nuxt-link to="/" class="font-bold mr-5 hover:bg-gray-100 bg-opacity-30 p-3 transition ">TOP</nuxt-link>
            <nuxt-link to="/products" class="font-bold hover:bg-gray-100 bg-opacity-30 p-3 transition ">Products</nuxt-link>

        </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
    <slot />
    </div>

    <footer class="container mx-auto p^4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products">Products</nuxt-link>
            </li>
        </ul>
    </footer>
    </div>
</template>

<script setup>
</script>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>