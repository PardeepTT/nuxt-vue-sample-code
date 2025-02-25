export default defineEventHandler(async (event) => {

    const { name } = getQuery(event);

    const { age } = await readBody(event)
    return {
        message: `Some Good Route Stuff ${name}. \n Sope data: ${age}`
    }
})