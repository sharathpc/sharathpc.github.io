import React from "react"
import { Fade } from "react-awesome-reveal"

const ExperienceSection = () => {
    const data = {
        sectionHeading: 'My Resume',
        subSections: [{
            heading: 'Work Experience',
            iconClassName: 'icon-suitcase',
            list: [{
                mainText: 'Staff Software Engineer',
                subText: 'Biva Analytics - Apr 2022 - Current',
                description: 'Biva formerly known as halo is an e-commerce business assistant. It facilitates a holistic view of the business functions by providing essential reports and insights across all facets making it a one-stop destination for all business teams.'
            }, {
                mainText: 'Senior Software Engineer',
                subText: 'Saras Analytics - Jun 2020 - Mar 2022',
                description: 'Biva formerly known as halo is an e-commerce business assistant. It facilitates a holistic view of the business functions by providing essential reports and insights across all facets making it a one-stop destination for all business teams.'
            }, {
                mainText: 'Development Engineer',
                subText: 'Pramati Technologies - Nov 2019 - May 2020',
                description: 'WaveMaker is an Open #LowCode Development platform to quickly build enterprise-grade multi-device applications that can be easily extended or customised.'
            }, {
                mainText: 'Software Engineer',
                subText: 'Tripod Technologies - July 2016 - Nov 2019',
                description: 'eureQa is the Digital Assurance Platform, purpose built for testing digital applications. eureQa provides end-to-end testing for applications with customizable workflows, content and data.'
            }]
        }, {
            heading: 'Education',
            iconClassName: 'icon-graduation-cap',
            list: [{
                mainText: 'Bachelors Degree',
                subText: 'JNTUH (CSE) - July 2012 - May 2016',
                description: null
            }, {
                mainText: 'High School',
                subText: 'NJC (MPC) - June 2010 - May 2012',
                description: null
            }]
        }]
    }

    return (
        <div id="fh5co-resume" className="fh5co-bg-color">
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 offset-md-2 text-center fh5co-heading">
                        <h2>{data.sectionHeading}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 offset-md-0">
                        <ul className="timeline">
                            {data.subSections.map((subSection, subIndex) =>
                                <React.Fragment key={subIndex}>
                                    <Fade className="timeline-heading text-center" cascade damping={0.1} direction="up" triggerOnce>
                                        <div>
                                            <h3>{subSection.heading}</h3>
                                        </div>
                                    </Fade>

                                    <Fade cascade damping={0.1} direction="up" triggerOnce>
                                        {subSection.list.map((item, itemIndex) =>
                                            <li className="timeline-item"
                                                key={`${subIndex}-${itemIndex}`}>
                                                <div className="timeline-badge">
                                                    <i className={subSection.iconClassName}></i>
                                                </div>
                                                <div className="timeline-panel">
                                                    <div className="timeline-heading">
                                                        <h3 className="timeline-title">{item.mainText}</h3>
                                                        <span className="company">{item.subText}</span>
                                                    </div>
                                                    {item.description && <div className="timeline-body">
                                                        <p>{item.description}</p>
                                                    </div>}
                                                </div>
                                            </li>
                                        )}
                                    </Fade>
                                </React.Fragment>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ExperienceSection
