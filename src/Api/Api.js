export const Getservices=async()=>{
const res=await fetch('/services.json')
const data=res.json()
return data
}