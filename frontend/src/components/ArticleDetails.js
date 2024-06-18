import React from 'react';

const ArticleDetails = ({ article }) => { 
    return (
        <div className="article-details flex flex-col justify-center text-center bg-[#0f0f0f] mb-4 py-8 rounded-lg shadow-md">
            <h4 className="font-semibold">{article.title}</h4>
            <div className='justify-center mt-4'>
                <a href={article.link} target='_blank' className='text-[#f7bb0e] underline'>{article.link}</a>
            </div>
        </div>
    )
}

export default ArticleDetails; 
