//I can use the same procedure to create dynamic routes

export default defineEventHandler(async (event) => {

    //getting the code from the event object
    const { code } = event.context.params;

    //Nuxt gives a function that access the runtimeConfig object in the nuxt.config.ts file
    const { currencyKey } = useRuntimeConfig();

    const uri = `https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}&currencies=${code}`;

    const { data } = await $fetch(uri);

    return data
})
