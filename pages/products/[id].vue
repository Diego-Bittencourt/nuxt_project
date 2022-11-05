
<template>
    <div>
        <ProductDetails :product="product" />
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

//checking if the product id exists and throwing an error if it doesn't
if (!product.value) {

    //the createError() function creates an error page, using the error.vue component or default error page and sends the object placed in the argument
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}


definePageMeta({
    layout: 'products'
})



</script>

<style  scoped>

</style>
    
