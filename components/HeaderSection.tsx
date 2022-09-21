import { Fade } from "react-awesome-reveal";

const HeaderSection = () => {
    const data = {
        bannerUrl: 'https://ik.imagekit.io/sharathpc/protfolio/github/banner_IHMyYVIEg.gif',
        profileImgUrl: 'images/profile-pic.jpg',
        fullName: 'Sharath Chandra',
        skills: 'Web Developer / Photographer',
        socialList: [{
            title: 'GitHub',
            className: 'icon-github2',
            href: 'https://www.google.com'
        }, {
            title: 'Linkedin',
            className: 'icon-linkedin2',
            href: 'https://www.google.com'
        }, {
            title: 'Medium',
            className: 'icon-blogger',
            href: 'https://www.google.com'
        }, {
            title: 'Twitter',
            className: 'icon-twitter2',
            href: 'https://www.google.com'
        }]
    }

    return (
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner"
            style={{ backgroundImage: `url(${data.bannerUrl})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight">
                                <Fade cascade damping={0.1} direction="up" triggerOnce>
                                    <div className="profile-thumb" style={{ background: `url(${data.profileImgUrl})` }}></div>
                                    <h1><span>{data.fullName}</span></h1>
                                    <h3><span>{data.skills}</span></h3>
                                    <br />
                                    <div>
                                        <ul className="fh5co-social-icons">
                                            {data.socialList.map((social, sIndex) =>
                                                <li key={sIndex} title={social.title}>
                                                    <a href={social.href}>
                                                        <i className={social.className}></i>
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderSection
