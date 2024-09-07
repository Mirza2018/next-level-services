import Image from 'next/image';
import React from 'react';

const OurTeam = () => {




    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team member</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image  placeholder='blur' blurDataURL='/loadingImg.gif' alt="member" src={person.image} height={50}  width={50} className="object-contain h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default OurTeam;

const people=[
    {
        name:"Takibul Hasan mirza",
        image:"/ceo.png",
        role:"Founder / CEO"
    },
    {
        name:"Bill Gates",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/800px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg",
        role:"Former CEO of Microsof"
    },
    {
        name:"Jack Ma",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyQHsZCtQkp6vF4igZjPuWg4wfgkX-jPMsg&s",
        role:"Chinese business magnate and investor"
    },
    {
        name:"jeff bezos",
        image:"https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
        role:"Executive chairman of Amazon"
    },
    {
        name:"Elon Musk",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
        role:"CEO of Tesla Motors"
    },
    {
        name:"Robert Downey Jr.",
        image:"https://pm1.aminoapps.com/6896/c55cbd01984ffa23da8dca88bf81476f071c925er1-540-694v2_00.jpg",
        role:"Iron Man"
    },
]