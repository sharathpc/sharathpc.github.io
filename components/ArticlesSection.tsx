import { useEffect, useState } from "react";

const ArticlesSection = () => {
    const [articles, setArticles] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sharathpcc")
            .then(res => res.json())
            .then(data => setArticles(data.items));
    }, []);

    return (
        <div id="blogs-section">
            <div className="container">
                <div key="heading" className="row">
                    <div className="col-md-8 offset-md-2 text-center heading">
                        <h2>Medium</h2>
                    </div>
                </div>
                <div key="content" className="row">
                    {articles.map((article) =>
                        <div key={article.guid} className="col-md-4">
                            <div className="blog-item">
                                <img className="blog-bg" src={article.description.match(/<img[^>]+src="([^">]+)"/)[1]} alt="Image" />
                                <div className="blog-text">
                                    <span className="posted_on">{new Date(article.pubDate).toDateString()}</span>
                                    <h3 title={article.title}>{article.title}</h3>
                                    <ul className="badges">
                                        {article.categories.map((category: any) =>
                                            <li key={category} className="badge">{category}</li>
                                        )}
                                    </ul>
                                    <ul className="stuff">
                                        <li><a href={article.link}>Read More<i className="icon-arrow-right22"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ArticlesSection
