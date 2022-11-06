
<template>
    <div>
        <!-- Using the pre-built components Head, Title, Meta I can set the head of a page directly from the template in my component/page.
            it can use interpolation to use variables and dynamic data.
        it also overwrites the global app object, in the nuxt.config.ts file -->
        <Head>
            <Title>{{ product.title }} | WebShop</Title>
            <Meta name="description" :content="product.description" />
        </Head>
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
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })

    //it is good to remind that the createError() function runs in the server. if there is a link/button to a page which doesn't exist, this won't caught the error
    //and an uncaught error is showed in the browser's console.
    //to solve that, add another property in the createError's object called fatal and set it to true
    //it forces Nuxt to show the error page
}


definePageMeta({
    layout: 'products'
})



</script>

<style  scoped>

</style>
    
