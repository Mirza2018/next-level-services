export const Getservices=async()=>{
const res=await fetch('http://127.0.0.1 : 3000/services/api')
const data=res.json()
return data
}

export const GetBlogs=async ()=>{
    const res=await fetch('http://127.0.0.1 : 3000/blogs/api')
    const data=res.json()
  return data
}