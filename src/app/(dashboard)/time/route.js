// import connectDB from "@/Providers/mongoDB"

// export const GET=async()=>{
//     try {
//         const db= await connectDB()
// const data=await db.collection('users')
// return Response.json(data)
//     } catch (error) {
//         console.log(error);
        
//     }
    

// }
export const GET= async()=>{
    return Response.json({
        currentTime:new Date().toLocaleTimeString()
    })
    }