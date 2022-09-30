import { Fade } from "react-awesome-reveal"

const ServicesSection = () => {
    const data = {
        sectionHeading: 'My Services',
        list: [{
            iconClassName: 'icon-paintbrush',
            mainText: 'Web Design',
            subText: 'Creating pixel perfect renders from designs using HTML5, CSS3, SCSS, Bootstrap, Tailwind etc'
        }, {
            iconClassName: 'icon-genius',
            mainText: 'Web Development',
            subText: 'Creating highly functional optimized code applications using JS/React/Angular and Backend services'
        }, {
            iconClassName: 'icon-mobile',
            mainText: 'Mobile Development',
            subText: 'Building native feel mobile applications for IOS/Android using Dart & Flutter'
        }]
    }

    return (
        <div id="services-section" className="animate-box global-bg-dark">
            <div className="container">
                <div className="services-padding">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center heading">
                            <h2>{data.sectionHeading}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <Fade className="col-md-4 text-center" cascade damping={0.1} direction="up" triggerOnce>
                            {data.list.map((item, itemIndex) =>
                                <div className="feature-left" key={itemIndex}>
                                    <span className="icon">
                                        <i className={item.iconClassName}></i>
                                    </span>
                                    <div className="feature-copy">
                                        <h3>{item.mainText}</h3>
                                        <p>{item.subText}</p>
                                    </div>
                                </div>
                            )}
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
