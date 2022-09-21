import React from "react";
import { Fade } from "react-awesome-reveal";

const ExperienceSection = () => {
    const data = {
        sectionHeading: 'My Resume',
        subSections: [{
            heading: 'Work Experience',
            iconClassName: 'icon-suitcase',
            list: [{
                mainText: 'Senior Developer',
                subText: 'Company Name - 2016 - Current',
                description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
            }, {
                mainText: 'Senior Developer',
                subText: 'Company Name - 2016 - Current',
                description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
            }]
        }, {
            heading: 'Education',
            iconClassName: 'icon-graduation-cap',
            list: [{
                mainText: 'Masters Degree',
                subText: 'University Name - 2007 - 2009',
                description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
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
                                    <Fade cascade damping={0.1} direction="up" triggerOnce>
                                        <div className="timeline-heading text-center">
                                            <div>
                                                <h3>{subSection.heading}</h3>
                                            </div>
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
                                                    <div className="timeline-body">
                                                        <p>{item.description}</p>
                                                    </div>
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
