<template>

    <div>
        <header>
            <nav>
                <nuxt-link to="/">Top</nuxt-link>
                <ul>
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
            </nav>
        </header>
        <h2>Home</h2>
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