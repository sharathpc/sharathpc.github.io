const HeaderSection = () => {
    return (
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner"
            style={{ backgroundImage: 'url(https://ik.imagekit.io/sharathpc/protfolio/github/banner_IHMyYVIEg.gif)' }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                <div className="profile-thumb" style={{ background: 'url(images/profile-pic.jpg)' }}></div>
                                <h1><span>Sharath Chandra</span></h1>
                                <h3><span>Web Developer / Photographer</span></h3>
                                <br />
                                <div>
                                    <ul className="fh5co-social-icons">
                                        <li><a href="#"><i className="icon-twitter2"></i></a></li>
                                        <li><a href="#"><i className="icon-facebook2"></i></a></li>
                                        <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                                        <li><a href="#"><i className="icon-dribbble2"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection
