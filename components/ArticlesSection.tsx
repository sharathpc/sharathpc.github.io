const ArticlesSection = () => {
    return (
        <div id="blogs-section">
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 offset-md-2 text-center heading">
                        <h2>Post on Medium</h2>
                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem
                            provident. Odit ab aliquam dolor eius.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="blog-item animate-box">
                            <a href="#" className="blog-bg" style={{ backgroundImage: 'url(images/portfolio-1.jpg)' }}></a>
                            <div className="blog-text">
                                <span className="posted_on">Mar. 15th 2016</span>
                                <h3><a href="#">Photoshoot On The Street</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts.</p>
                                <ul className="stuff">
                                    <li><i className="icon-heart2"></i>249</li>
                                    <li><i className="icon-eye2"></i>308</li>
                                    <li><a href="#">Read More<i className="icon-arrow-right22"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-item animate-box">
                            <a href="#" className="blog-bg" style={{ backgroundImage: 'url(images/portfolio-2.jpg)' }}></a>
                            <div className="blog-text">
                                <span className="posted_on">Mar. 15th 2016</span>
                                <h3><a href="#">Surfing at Philippines</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts.</p>
                                <ul className="stuff">
                                    <li><i className="icon-heart2"></i>249</li>
                                    <li><i className="icon-eye2"></i>308</li>
                                    <li><a href="#">Read More<i className="icon-arrow-right22"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-item animate-box">
                            <a href="#" className="blog-bg" style={{ backgroundImage: 'url(images/portfolio-3.jpg)' }}></a>
                            <div className="blog-text">
                                <span className="posted_on">Mar. 15th 2016</span>
                                <h3><a href="#">Capture Living On Uderwater</a></h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia, there live the blind texts.</p>
                                <ul className="stuff">
                                    <li><i className="icon-heart2"></i>249</li>
                                    <li><i className="icon-eye2"></i>308</li>
                                    <li><a href="#">Read More<i className="icon-arrow-right22"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlesSection
