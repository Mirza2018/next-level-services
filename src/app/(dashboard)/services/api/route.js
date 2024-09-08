import connectDB from "@/Providers/mongoDB"
import { NextResponse } from "next/server"


export const GET= async()=>{

const db= await connectDB()
const data= db.collection('next-level-services')
    try {
        const services=await data.find().toArray()
    return NextResponse.json(services)
    } catch (error) {
        return NextResponse.json({message:"no data found",error})
    }
    }