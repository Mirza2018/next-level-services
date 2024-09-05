import React from 'react';

const CategoriesPage = ({params}) => {
    let str = params?.categories   
const category = str?.replace("%20", " ");
// console.log(category);

    return (
        <div>
        <CategoriesPage category={category} ></CategoriesPage>
        </div>
    );
};

export default CategoriesPage;