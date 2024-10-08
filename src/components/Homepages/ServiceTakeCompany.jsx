import Image from 'next/image';
import React from 'react';

const ServiceTakeCompany = () => {
    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
                    1 team.<br />
                    10+ years.<br />
                    48000+ services Provide.<br />
                </h2>
                <p className="mt-6 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsam magni quas corrupti! Quisquam perspiciatis, dolores recusandae obcaecati sequi, impedit quia, quod ducimus vero temporibus voluptas atque facere culpa. Exercitationem?</p>
            </div>

            <div className="lg:col-span-3 xl:col-span-4">
                <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                    <div>
            

                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-6 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png" alt="" />
                    </div>

                    <div>
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png" alt="" />
                    </div>

                    <div>
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png" alt="" />
                    </div>

                    <div>
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png" alt="" />
                    </div>

                    <div className="hidden lg:block">
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png" alt="" />
                    </div>

                    <div className="hidden lg:block">
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png" alt="" />
                    </div>

                    <div className="hidden lg:block">
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png" alt="" />
                    </div>

                    <div className="hidden lg:block">
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png" alt="" />
                    </div>

                    <div className="hidden lg:block">
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png" alt="" />
                    </div>

                    <div className="hidden lg:block">
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png" alt="" />
                    </div>

                    <div className="hidden lg:block">
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png" alt="" />
                    </div>

                    <div className="hidden lg:block">
                       <Image  placeholder='blur' blurDataURL='/loadingImg.gif' width={100} height={100}className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png" alt="" />
                    </div>
                </div>

                <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                </div>
            </div>
        </div>
    </div>
</section>

    );
};

export default ServiceTakeCompany;