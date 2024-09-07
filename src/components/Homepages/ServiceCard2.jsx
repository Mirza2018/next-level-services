import React from 'react';

const ServiceCard2 = () => {
    return (
        <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div class="pr-12 sm:pr-0">
                <div class="relative max-w-xs mb-12">
                    <img class="object-bottom rounded-md" src="https://images.pexels.com/photos/2209529/pexels-photo-2209529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                    <img class="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>

            <div>
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow business with Celebration.</h2>
                <p class="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
    </div>
</section>

    
    );
};

export default ServiceCard2;