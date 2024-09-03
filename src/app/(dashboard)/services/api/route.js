import connectDB from "@/Providers/mongoDB"

// export const GET=async()=>{
//     try {

// return Response.json(data)
//     } catch (error) {
//         console.log(error);
        
//     }
    

// }
export const GET= async()=>{

const db= await connectDB()
const data= db.collection('next-level-services')
const services=await data.find().toArray()
    return Response.json(services)
    }