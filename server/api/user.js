export default defineEventHandler(async () => {


    const { data } = await $fetch("https://fakestoreapi.com/users/1")
    return {
        message: `User Data is : ${JSON.stringify(data)}`
    }
})