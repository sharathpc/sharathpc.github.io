import { useRef } from "react";
import { Fade } from "react-awesome-reveal"
import Typed from "typed.js"

const HeaderSection = () => {
    const typedElement: any = useRef(null);
    const typedInstance: any = useRef(null);

    const data = {
        bannerUrl: 'https://ik.imagekit.io/sharathpc/protfolio/github/banner_IHMyYVIEg.gif',
        profileImgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/profile-pic_rzn51RRjj.jpg',
        fullName: 'Sharath Chandra',
        skills: [
            `I'm a <span class="service-name">Web Developer</span>`,
            `I'm a <span class="service-name">App Developer</span>`,
            `I'm a <span class="service-name">FullStack Developer</span>`,
        ],
        socialList: [{
            title: 'GitHub',
            className: 'icon-github2',
            href: 'https://github.com/sharathpc'
        }, {
            title: 'Linkedin',
            className: 'icon-linkedin2',
            href: 'https://www.linkedin.com/in/sharathpc'
        }, {
            title: 'Medium',
            className: 'icon-blogger',
            href: 'https://sharathpc.medium.com'
        }, {
            title: 'Twitter',
            className: 'icon-twitter2',
            href: 'https://twitter.com/sharath0033'
        }]
    }

    const startTypedAnimation = () => {
        if (!typedInstance.current) {
            typedInstance.current = new Typed(typedElement.current, {
                strings: data.skills,
                typeSpeed: 100,
                backSpeed: 50,
            });
        }
    }

    return (
        <header id="header-section" className="js-fullheight" role="banner"
            style={{ backgroundImage: `url(${data.bannerUrl})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight">
                                <Fade cascade damping={0.1} direction="up" triggerOnce onVisibilityChange={startTypedAnimation}>
                                    <div className="profile-thumb" style={{ background: `url(${data.profileImgUrl})` }}></div>
                                    <h1><span>{data.fullName}</span></h1>
                                    <h3><span ref={typedElement}></span></h3>
                                    <br />
                                    <div>
                                        <ul className="social-icons">
                                            {data.socialList.map((social, sIndex) =>
                                                <li key={sIndex} title={social.title}>
                                                    <a href={social.href} target="_blank">
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
