<!-- NUXT uses the folder system to create the routes system.
using index as the file name, the component with that name becomes the root
of that route
like this
this index.vue file is inside the products folder, therefore, it will be shown when the url
/products get loaded -->

<template>

    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

//nuxt render the page in the server and sends the loaded page to the browser. Also, during navigation, nuxt loads data in the browser.
//that means the code inside the script tag, in the composition API, can run both in the server and in the browser.
//it is important to keep that in mind because not all code can run in both ends, for example, the window. object, which is strictly used in the browser,
//not on the server.

//to fetch data from an API, I'll use the useFetch() method built in Nuxt.
//inside the composition api, I can use the await keyword
const { data: products } = await useFetch('https://fakestoreapi.com/products')

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