import React from "react"
import { Fade } from "react-awesome-reveal"

const ExperienceSection = () => {
    const data = {
        sectionHeading: 'Experience',
        subSections: [{
            heading: 'Work',
            iconClassName: 'icon-suitcase',
            list: [{
                mainText: 'Application Architect',
                subText: 'RealPage India Pvt Ltd - May 2023 to Aug 2025',
                points: []
            }, {
                mainText: 'Staff Software Engineer',
                subText: 'Biva Analytics - Apr 2022 to May 2023',
                points: []
            }, {
                mainText: 'Senior Software Engineer',
                subText: 'Saras Analytics - Jun 2020 to Mar 2022',
                points: []
            }, {
                mainText: 'Development Engineer',
                subText: 'Pramati Technologies - Nov 2019 to May 2020',
                points: []
            }, {
                mainText: 'Software Engineer',
                subText: 'Tripod Technologies - July 2016 to Nov 2019',
                points: []
            }]
        }, {
            heading: 'Education',
            iconClassName: 'icon-graduation-cap',
            list: [{
                mainText: 'Bachelors Degree',
                subText: 'JNTUH (CSE) - July 2012 to May 2016',
                points: null
            }]
        }]
    }

    return (
        <div id="experience-section" className="bg-color">
            <div className="container">
                <div key="heading" className="row">
                    <div className="col-md-8 offset-md-2 text-center heading">
                        <h2>{data.sectionHeading}</h2>
                    </div>
                </div>
                <div key="content" className="row">
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
                                                    {item.points && <div className="timeline-body">
                                                        <ul>
                                                            {item.points.map((point, pointIndex) =>
                                                                <li key={pointIndex}>{point}</li>
                                                            )}
                                                        </ul>
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
