import { Fade } from "react-awesome-reveal"

const AboutMeSection = () => {
    const data = {
        sectionHeading: 'About Me',
        helloText: 'Hello There!',
        descriptionBlocks: [
            '9+ years of experience designing and delivering high-performance web and mobile applications. Expert in micro-frontend architectures, server-side rendering, CI/CD pipelines, and cloud integrations. Proven track record of improving performance, scalability, and maintainability through reusable component libraries, automated deployments, and best‑practice technical governance.',
        ],
        fieldsList: [{
            label: 'First Name',
            value: 'Sharath Chandra',
        }, {
            label: 'Last Name',
            value: 'Pyarasani',
        }, {
            label: 'Email',
            value: 'sharathchandra.pyarasani@gmail.com',
        }, {
            label: 'Country',
            value: 'Columbus, Ohio, United States',
        }, {
            label: 'Languages',
            value: 'English, Hindi and Telugu',
        }]
    }

    return (
        <div id="about-section">
            <div className="container">
                <div key="heading" className="row">
                    <div className="col-md-8 offset-md-2 text-center heading">
                        <h2>{data.sectionHeading}</h2>
                    </div>
                </div>
                <div key="content" className="row">
                    <Fade className="col-md-6" cascade damping={0.1} direction="up" triggerOnce>
                        <ul className="info">
                            {data.fieldsList.map((field, fIndex) =>
                                <li key={fIndex}>
                                    <span className="first-block">{field.label}:</span>
                                    <span className="second-block">{field.value}</span>
                                </li>
                            )}
                        </ul>
                    </Fade>
                    <div className="col-md-6">
                        <h2>{data.helloText}</h2>
                        {data.descriptionBlocks.map((desc, dIndex) => <p key={dIndex}>{desc}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection
