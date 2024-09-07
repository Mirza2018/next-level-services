import Categories from '@/components/Services/Categories';
import CategorySection from '@/components/Services/CategorySection/CategorySection';
import React from 'react';

const CategoriesPage = ({params}) => {
    let str = params?.categories   
const category = str?.replace("%20", " ");
// console.log(category);

    return (
        <div>
            <div className='flex  justify-center '>
              <div className='hidden sm:block ' >
                     <CategorySection/>
             </div>

             <Categories category={category}></Categories>
            </div>
        </div>
    );
};

export default CategoriesPage;