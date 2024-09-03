export const Getservices=()=>{
// const res=await fetch('services.json')
// const data=res.json()

fetch('services.json')
.then((res)=>res.json())
.then((data)=>{
    // console.log(data);
     return data

})

}