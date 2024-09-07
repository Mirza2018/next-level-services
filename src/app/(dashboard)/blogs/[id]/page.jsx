import Blog from '@/components/Blogs/Blog';
import React from 'react';

const BlogPage = ({params}) => {
    return (
        <div>
            <Blog params={params}/>
        </div>
    );
};

export default BlogPage;