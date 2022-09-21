const SkillsSection = () => {
    const data = {
        sectionHeading: 'My Skills',
        list: [{
            iconClassName: 'icon-paintbrush',
            label: 'HTML5'
        }, {
            iconClassName: 'icon-genius',
            label: 'CSS3'
        }, {
            iconClassName: 'icon-mobile',
            label: 'jQuery'
        }]
    }

    return (
        <div id="fh5co-skills" className="animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center fh5co-heading">
                        <h2>{data.sectionHeading}</h2>
                    </div>
                </div>
                <div className="row row-pb-md">
                    {data.list.map((item, itemIndex) =>
                        <div className="col-md-3 col-sm-6 col-xs-12 text-center" key={itemIndex}>
                            <div className="chart" data-percent="95"><span><strong>{item.label}</strong>95%</span></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
