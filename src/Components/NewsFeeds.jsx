import React, { useState, useEffect } from 'react';
import '../Resources/NewsFeed.css'; // Import custom CSS for styling
import Logo from '../Resources/Images/internopay_logo.png';

export default function NewsFeed() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c3dea401179249dd8b8071db0f490c87');
            const data = await response.json();
            setArticles(data.articles);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching news:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="news-feed">
            
            {articles.map((article, index) => (
                <div key={index} className="news-article">
                    {article.urlToImage ? (
                        <img src={article.urlToImage} alt={article.title} />
                    ) : (
                        <img src={Logo} alt="Logo" />
                    )}
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
}
