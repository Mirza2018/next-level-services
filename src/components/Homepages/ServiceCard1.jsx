import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Servicecard1 = () => {
    return (
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                <div class="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                    <Image   width={100} height={100} class="absolute top-6 -right-4 xl:-right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg" alt="" />
    
                    <div class="relative max-w-xs ml-auto">
                        <div class="overflow-hidden aspect-w-3 aspect-h-4">
                        <Image  placeholder='blur' blurDataURL='/loadingImg.gif'  width={700} height={800}  class="object-cover w-full h-full scale-150" src="https://images.pexels.com/photos/6474348/pexels-photo-6474348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
    
                        <div class="absolute bottom-0 -left-16">
                            <div class="bg-yellow-300">
                                <div class="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                                    <svg class="w-9 sm:w-14 h-9 sm:h-14" xmlns="http://www.w3.org/2000/svg" fill="#FFF" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span class="block mt-3 text-xl font-bold text-black sm:mt-6 sm:text-4xl lg:text-5xl"> 2,984 </span>
                                    <span class="block mt-2 text-sm font-medium leading-snug text-amber-900 sm:text-base">Happy  Customer<br />served on July </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="md:order-1">
                    <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow business with Us.</h2>
                    <p class="mt-4 text-base leading-relaxed text-gray-600"> developing a rapport with customers is essential. Do you run a service-based business such as an HVAC, appliance repair, or plumbing company? Read on for some insightful strategies that will help grow your business.</p>
    
                    <Link href=".//services/Plumbing Services" title="" class="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Order Services </Link>
                </div>
            </div>
        </div>
    </section>
    
    );
};

export default Servicecard1;