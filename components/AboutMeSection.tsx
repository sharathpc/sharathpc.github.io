import { Fade } from "react-awesome-reveal"

const AboutMeSection = () => {
    const data = {
        sectionHeading: 'About Me',
        helloText: 'Hello There!',
        descriptionBlocks: [
            'Creative and highly motivated full stack developer with 6+ years of experience in website design, development, and deployment process.',
            'Ability to produce optimised solutions, clean concise code by hand and pixel perfect renders from designs. Proficient in building web and mobile applications.'
        ],
        fieldsList: [{
            label: 'First Name',
            value: 'Sharath Chandra',
        }, {
            label: 'Last Name',
            value: 'Pyarasani',
        }, {
            label: 'Email',
            value: 'sharathchandra0033@gmail.com',
        }, {
            label: 'Country',
            value: 'India',
        }, {
            label: 'Languages',
            value: 'English, Hindi and Telugu',
        }]
    }

    return (
        <div id="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center heading">
                        <h2>{data.sectionHeading}</h2>
                    </div>
                </div>
                <div className="row">
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
