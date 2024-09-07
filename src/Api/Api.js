export const Getservices=async()=>{
const res=await fetch('http://localhost:3000/services/api')
const data=res.json()
return data
}

export const GetBlogs=async ()=>{
    const res=await fetch('http://localhost:3000/blogs/api')
    const data=res.json()
  return data
}