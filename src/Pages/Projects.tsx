import React, { useState,useEffect } from 'react'
import Category from '../Data/cato'
import "../App.css"
import {storage} from"../db/firebase"
import { ref ,listAll,getDownloadURL, getStorage } from 'firebase/storage'
export const Projects = () => {
 
 const[imageList,setImageList]=useState<any>([])
  const imageListRef=ref(storage,"projectsImages/")
  const[category,setCategory]=useState(Category)
  const filterhandel=(catItem:any)=>{
    const res=Category.filter((curDate)=>{
      return curDate.category===catItem;
    });
    setCategory(res)
    console.error()
  }
  useEffect(() => {
   listAll(imageListRef).then((res)=>{
      res.items.forEach((item)=>{
          getDownloadURL(item).then((url)=>{
            setImageList((prev:any)=>[...prev,url]);
          })
      })
   })
  }, [])
  
  return (
    <section className=' ' id='projects'>
        <h1 className='text-center  font-semibold text-2xl my-10' >Projects</h1>
        <p className='text-center ' >Explore my portfolio and see my latest web development projects. From website clones to full-stack applications, I have the skills to bring your ideas to life. Check out my portfolio now.</p>
        <div className="btns flex flex-wrap justify-center gap-10 mt-10 ">
<a href="#_" className="relative inline-block px-4 py-2 font-medium group  " onClick={()=>setCategory(Category)}  >
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
<span className="relative text-primary group-hover:text-secandary">View All</span>
</a>
<a href="#_" className="relative inline-block px-4 py-2 font-medium group" onClick={()=>filterhandel('Landing pages')}>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
<span className="relative text-primary group-hover:text-secandary">Landing pages</span>
</a>
<a href="#_" className="relative inline-block px-4 py-2 font-medium group" onClick={()=>filterhandel('Website')}>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
<span className="relative text-primary group-hover:text-secandary" >websites</span>
</a>

        </div>
       
  
<section className="  ">
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2   ">
      {
        // 
        category.map((item:any)=>{
          const{id,imageUrl,demo,repoURL}=item
          return(
            <>
            <div  className="flex flex-wrap lg:w-1/3  sm:w-1/2 p-4" >
               <div  className=" relative   cursor-pointer">
                <div key={id} className="w-full h-full  container hover:opacity-70 ease-in duration-100  ">
                <img alt="gallery"  className=" hover:opacity-60  object-cover object-center w-full h-full rounded-lg"
                   src={imageUrl}/>
                   <div className="overlay flex justify-between  ">
                    <a target="_blank" href={demo}><svg fill='#2e294e' className='m-2' width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="32. Veiw"><path d="M23.909 11.582C21.943 7.311 17.5 3 12 3S2.057 7.311.091 11.582a1.008 1.008 0 0 0 0 .836C2.057 16.689 6.5 21 12 21s9.943-4.311 11.909-8.582a1.008 1.008 0 0 0 0-.836ZM12 19c-4.411 0-8.146-3.552-9.89-7C3.854 8.552 7.589 5 12 5s8.146 3.552 9.89 7c-1.744 3.448-5.479 7-9.89 7Z"/><path d="M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z"/></g></svg></a>
     <a href={repoURL} target="_blank">          
<svg fill='#2e294e' className='m-2' width={25} height={25} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg></a>   
                  </div>
                </div>
            </div>
      </div>
            </>
          )
        })
      }
      {/* {
        imageList.map((url:any)=>{
          return <>
          <img src={url} alt="" />
          </>
        })
      } */}
    
    </div>
  </div>
</section>
        
    </section>
  )
}
