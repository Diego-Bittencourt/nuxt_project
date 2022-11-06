
//the reason to use server routes is to handle sensitive data you don't want to send to the front end
//every data sent to the front end can be exposed. Therefore, there are some data ou want to handle in the server
//and send only the necessary data to the frontend.
//There are many function I can use to work with the http request
//like useQuery() and useBOdy()
//the useBod() function is async, therefore I need to use await in from of it.
//to use await inside the defineEventHandler function,  need to return an async parameter function

export default defineEventHandler(async (event) => {

    // // handle qery params
    // const { name } = useQuery(event);
    // //I use the function before to access url params sent with the http request
    // ///api/route?name=Diego


    // // handle post data
    // const { age } = await useBody(event)
    // //I use the function above to access the body argument in the fetch request

    //You can't use useFetch() in the server side.
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=8Da263YoRnmBiB2TPUYYf5S9oEan40gyAeUazNlR&currencies=JPY%2CUSD%2CCAD')
    return {
        message: data
    }




})









// export default defineEventHandler(() => {
//     //the defineEventHandler is a built-in function in Nuxt
//     //this function gets another function as argument. This argument function will fire
//     //everytime there is a request to this address from the frontend
//     //I'll make a call to this endpoint from the about page.


//     return {
//           message: `Hello, FrontEnd`
//         }
// })

