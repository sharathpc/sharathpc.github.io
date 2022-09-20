const AboutMeSection = () => {
    const data = {
        sectionHeading: 'About Me',
        helloText: 'Hello There!',
        descriptionBlocks: [
            'There live the blind texts far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in bookmarksgrove there live the blind texts far from the countries.',
            'Far far away, behind the word mountains, Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci there live the blind texts from the countries Vokalia and Consonantia, there live the blind texts. Quos quia provident consequuntur culpa facere ratione maxime commodi voluptates id repellat velit eaque aspernatur expedita. Possimus itaque adipisci.'
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
        }]
    }

    return (
        <div id="fh5co-about" className="animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center fh5co-heading">
                        <h2>{data.sectionHeading}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="info">
                            {data.fieldsList.map((field, fIndex) =>
                                <li key={fIndex}>
                                    <span className="first-block">{field.label}:</span>
                                    <span className="second-block">{field.value}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <h2>{data.helloText}</h2>
                        {data.descriptionBlocks.map((desc, dIndex) => <p key={dIndex}>{desc}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection
