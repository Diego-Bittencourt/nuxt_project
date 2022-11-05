
<template>
    <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>
    
    
    
    
<script setup>
//grabing the id inside the useRoute.parameters from the url.
//Note that the destructuring proccess must use the same name as the component name.
const { id } = useRoute().params

//creating the uri
const uri = 'https://fakestoreapi.com/products/' + id;


//fetching the product info
const { data: product } = await useFetch(uri, { key: id });

//the useFetch function avoids unnecessary work, therefore, although each product page is being loaded with a different id in the url,
// the data insid the page is the same from the first http request made.
//The way around it is to differentiate from each useFetch() by adding a second argument: a option object with the key vlue to a unique term.
//in this case, the item id works.




definePageMeta({
    layout: 'products'
})



</script>

<style  scoped>

</style>
    
