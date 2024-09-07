export const Getservices=async()=>{
const res=await fetch(`${process.env.NEXT_PUBLIC_Base_URL}/services/api`)
const data=res.json()
return data
}

export const GetBlogs=async ()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_Base_URL}/blogs/api`)
    const data=res.json()
  return data
}