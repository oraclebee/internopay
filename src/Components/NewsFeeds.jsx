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
            let apiKey;
            // Check if running in localhost or deployed environment
            if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
                // Localhost environment
                apiKey = "c3dea401179249dd8b8071db0f490c87"; // Replace with your local API key
            } else {
                // Deployed environment
                apiKey = process.env.REACT_APP_EXCHANGERATES_API_KEY; // Ensure your environment variable is properly prefixed
            }
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
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
                    <img src={article.urlToImage || Logo} alt={article.title} />
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
}


// import React, { useState, useEffect } from 'react';
// import '../Resources/NewsFeed.css'; // Import custom CSS for styling
// import Logo from '../Resources/Images/internopay_logo.png';

// export default function NewsFeed() {
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchNews();
//     }, []);

//     const fetchNews = async () => {
//         let apiKey;
//         // Check if running in localhost or deployed environment
//         if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
//             // Localhost environment
//             apiKey = "ZEOcbrQz5MhCJ7U7O5hlwaTrjICVjjtU"; // Replace with your local API key
//         } else {
//             // Deployed environment
//             apiKey = process.env.REACT_APP_NEWSFEEDS_API_KEY; // Ensure your environment variable is properly prefixed
//         }

//         apiKey = "ZEOcbrQz5MhCJ7U7O5hlwaTrjICVjjtU"; // Replace with your local API key
//         // const apiKey = process.env.REACT_APP_NEWSFEEDS_API_KEY; // Ensure your environment variable is set correctly
//         if (!apiKey) {
//             console.error('API key is missing');
//             setLoading(false);
//             return;
//         }
        
//         try {
//             const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             setArticles(data.articles);
//         } catch (error) {
//             console.error('Error fetching news:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="news-feed">
//             {articles.map((article, index) => (
//                 <div key={index} className="news-article">
//                     {article.urlToImage ? (
//                         <img src={article.urlToImage} alt={article.title} />
//                     ) : (
//                         <img src={Logo} alt="Logo" />
//                     )}
//                     <h2>{article.title}</h2>
//                     <p>{article.description}</p>
//                     <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
//                 </div>
//             ))}
//         </div>
//     );
// }


// import React, { useState, useEffect } from 'react';
// import '../Resources/NewsFeed.css'; // Import custom CSS for styling
// import Logo from '../Resources/Images/internopay_logo.png';

// export default function NewsFeed() {
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchNews();
//     }, []);

//     const fetchNews = async () => {
//         let apiKey = process.env.REACT_APP_NEWSFEEDS_API_KEY; // c3dea401179249dd8b8071db0f490c87
//         try {
//             const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
//             const data = await response.json();
//             setArticles(data.articles);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching news:', error);
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="news-feed">
            
//             {articles.map((article, index) => (
//                 <div key={index} className="news-article">
//                     {article.urlToImage ? (
//                         <img src={article.urlToImage} alt={article.title} />
//                     ) : (
//                         <img src={Logo} alt="Logo" />
//                     )}
//                     <h2>{article.title}</h2>
//                     <p>{article.description}</p>
//                     <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
//                 </div>
//             ))}
//         </div>
//     );
// }
