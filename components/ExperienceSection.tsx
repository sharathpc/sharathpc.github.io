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
                subText: 'RealPage India Pvt Ltd - May 2023 to Present',
                points: [
                    "Architected and migrated legacy MVCmodules into a micro-frontend ReactJS platform, improving modularity and reducing inter-team dependencies",
                    "Developed reusable boilerplate starter kits and NPM packages enforcing design consistency and coding best practices across teams",
                    "Integrated with organisation unified authentication to integrate across multiple products and systems",
                    "Transformed monolithic pipelines into Azure DevOps YAML-based CI/CD flows, reducing replication and maintenance time by 40%",
                    "Automated CDN cache flushes to accelerate release cycles and optimize end-user performance",
                    "Implemented Docker-based development and build pipelines for cloud integration",
                    "Authored comprehensive technical guides, architectural diagrams, and code standards to onboard new developers rapidly",
                    "Built passive notification system for feature flags and alert messages as groups using server sent events for SPA and MVC applications",
                ]
            }, {
                mainText: 'Staff Software Engineer',
                subText: 'Biva Analytics - Apr 2022 to May 2023',
                points: [
                    "Architect and develop REST API in NestJs (NodeJs) application with Swagger Open API documentation",
                    "Integrated Keycloak Identity and Access Management System with Single-Sign On",
                    "Implement authorization and Role based access control in the services",
                    "Discuss and develop complex ideas into approachable tasks and possible solution",
                    "Architect Server-Side Rendering (SSR) marketing application using NextJs (ReactJs) with all SEO capabilities",
                    "Develop complex collections using Strapi Headless CMS to empower content creation team and marketing team to modify marketing content on the fly",
                    "Integrated Redis Cache in services and Strapi",
                    "Experience with payment gateway and subscription platforms like RazorPay and ChargeBee",
                    "Integrated Sentry an error monitoring tool to capture production client browser errors",
                    "Experience with Docker Images and Containers",
                    "Experience with CI/CD pipeline with GitLab",
                ]
            }, {
                mainText: 'Senior Software Engineer',
                subText: 'Saras Analytics - Jun 2020 to Mar 2022',
                points: [
                    "Architect Frontend, Services, Authentication and NoSQL backend of the product",
                    "Architect and develop Single Page Application (SPA) using HTML5, SCSS, Bootstrap, Angular, Firebase and Ngrx",
                    "Build dynamic Angular Modules, Components and Forms to support dynamic workflows and dashboards",
                    "Worked on OAuth for authenticating with 3rd party API's and to perform CRUD requests",
                    "Integrated GTM interceptor to capture user events and activity information",
                    "Implemented test cases using Cypress for automation testing",
                    "Created and published reusable components as NPM plugins",
                    "Experience in creating Excel Addins for integrating webapps with excel for data export",
                ]
            }, {
                mainText: 'Development Engineer',
                subText: 'Pramati Technologies - Nov 2019 to May 2020',
                points: [
                    "Created Documentation website using Docusaurus and Integrating Algolia full text search",
                    "Discuss and develop complex ideas into approachable tasks and possible solution",
                    "Created custom DSL for angular validations functions to me used my low code widgets",
                    "Working with creating features using AngularJs and Angular",
                    "Writing Unit, Integration and End to end test cases of developed feature",
                    "Writing documentation for the developed feature",
                    "Trained inters and freshers with frontend technologies like HTML, CSS and JavaScript",
                ]
            }, {
                mainText: 'Software Engineer',
                subText: 'Tripod Technologies - July 2016 to Nov 2019',
                points: [
                    "Developed different modules and features using HTML5, CSS3, JavaScript, jQuery and AngularJs ",
                    "Converting Vanilla JavaScript frontend modules to AngularJs",
                    "Authenticating and consuming REST API services",
                    "Worked on developing and maintaining a StyleGuide with all the latest product standards",
                    "Developed a reporting dashboard using Vue components and PlotlyJs charts",
                    "Created reusable vanilla JavaScript components like Infinity Scroll, Recycler View and Lazy loaded accordions",
                    "Solely developed a proprietary browser extension (QaSCRIBE) using Web Extension API standard to support Chrome, Firefox Quantum, and other latest browsers",
                    "Developed proprietary JavaScript logic to penetrate and find Shadow DOM encapsulated elements",
                ]
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
