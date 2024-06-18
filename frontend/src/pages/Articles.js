import React, { useEffect, useState } from "react";
import ArticleDetails from '../components/ArticleDetails';
import { useAuthContext } from "../hooks/useAuthContext";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const { user, dispatch: authDispatch } = useAuthContext();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/articles');
                if (!response.ok) {
                    throw new Error('Failed to fetch articles');
                }
                const json = await response.json();
                setArticles(json);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="home">
            <div className="articles flex flex-col gap-14 px-24 py-24">
                {articles.map((article) => (
                    <ArticleDetails key={article._id} article={article} />
                ))}
            </div>
        </div>
    );
};

export default Articles;
