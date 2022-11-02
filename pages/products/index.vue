<!-- NUXT uses the folder system to create the routes system.
using index as the file name, the component with that name becomes the root
of that route
like this
this index.vue file is inside the products folder, therefore, it will be shown when the url
/products get loaded -->

<template>

    <div>
        <h2>PRODUCTS</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est iusto nihil commodi voluptatibus cumque ab
            nesciunt doloribus aut, illum tempora deleniti ipsam maiores magnam possimus a libero nemo adipisci
            pariatur?</p>
    </div>
</template>

<script setup>


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