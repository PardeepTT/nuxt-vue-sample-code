export default defineEventHandler(async (event) => {

    const data = getQuery(event);

    console.log("key ", data);
    if(data == undefined){
        return {
            statusCode: 401,
            message: "No valid key"+data
        }
    }

    return {
        message: `Good With data: ${data}`
    }
})