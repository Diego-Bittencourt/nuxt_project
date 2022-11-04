
<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, autem ducimus illum praesentium suscipit
            odio asperiores fugiat sit beatae magni molestias tempora quibusdam accusantium, enim et deleniti earum
            eveniet excepturi.</p>
    </div>
</template>
    
    
    
    
<script setup>
//grabing the id inside the useRoute.parameters from the url.
//Note that the destructuring proccess must use the same name as the component name.
const { id } = useRoute().params

</script>

<style  scoped>

</style>
    
