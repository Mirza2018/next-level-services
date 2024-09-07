import { GetBlogs } from '@/Api/Api';
import Image from 'next/image';
import React from 'react';

const Blog =async ({params}) => {

    const blogs=await GetBlogs()
    const blog=blogs.find(b=>b.id==params.id)
        
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                    {blog?.title}
                    <span className="relative inline-block">
                        <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                        <span className="relative"> solve Your Problem </span>
                    </span>
                </h2>
            </div>
    
            <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                <div>
                   
                    <Image  placeholder='blur' blurDataURL='/loadingImg.gif' alt={blog?.title} src={blog?.image} width={1000} height={1000} />
                </div>
    
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Hey! { blog?.title}</h3>
                    <p className="mt-4 text-lg text-gray-700">{blog?.desc}</p>
                    
                </div>
            </div>
        </div>
    </section>
    
    );
};

export default Blog;