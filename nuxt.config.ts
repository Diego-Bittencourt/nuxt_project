// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
    app: {
        head: {
            title: 'WebShop',
            meta: [
                { name: 'description', content: 'Everything you want can be found here' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }
            ]
        }
    },
    //to create environment variable, create an object like the following
    //all variable in the runtimeConfig will be exposed in the backend
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
        //to expose variables to the frontend, add the public key that also accepts an object
    }
})

//I can add metatags, external links and other stuff in the nuxt.config.ts file this way.
//inside the defineNuxtConfig export, insert the app value which acceps an object
//this object accept the head value  which also expects an object
//inside the head object, I can add the title, in a string and metatags.
//the meta expect an array of objects. each object is a metatag that gets the name and the content
//also, inside the head object, I can add external links to stylesheets and etc with the link value which expects an array of objects
//each object in the array is a different link with a rel and the href

//in the snapshot below, Im adding the title, one metatag regarding the descrition of the site and an external link to the Material Symbol stylesheet
// app: {
//     head: {
//         title: 'Web Shop',
//         meta: [
//             { name: 'description', content: 'Everything you want can be found here' }
//         ],
//         link: [
//             { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }
//         ]
//     }
// }