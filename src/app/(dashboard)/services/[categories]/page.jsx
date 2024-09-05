import Categories from '@/components/Services/Categories';
import React from 'react';

const CategoriesPage = ({params}) => {
    let str = params?.categories   
const category = str?.replace("%20", " ");
// console.log(category);

    return (
        <div>
       <Categories category={category}></Categories>
        </div>
    );
};

export default CategoriesPage;