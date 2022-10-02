const ProjectsSection = () => {
    const data = {
        sectionHeading: 'Projects',
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
        <div id="work-section" className="global-bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center heading">
                        <h2>{data.sectionHeading}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-center col-padding">
                        <a href="#" className="work-item" style={{ backgroundImage: 'url(images/portfolio-1.jpg)' }}>
                            <div className="desc">
                                <h3>Project Name</h3>
                                <span>Illustration</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 text-center col-padding">
                        <a href="#" className="work-item" style={{ backgroundImage: 'url(images/portfolio-2.jpg)' }}>
                            <div className="desc">
                                <h3>Project Name</h3>
                                <span>Brading</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 text-center col-padding">
                        <a href="#" className="work-item" style={{ backgroundImage: 'url(images/portfolio-3.jpg)' }}>
                            <div className="desc">
                                <h3>Project Name</h3>
                                <span>Illustration</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 text-center col-padding">
                        <a href="#" className="work-item" style={{ backgroundImage: 'url(images/portfolio-4.jpg)' }}>
                            <div className="desc">
                                <h3>Project Name</h3>
                                <span>Design</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 text-center col-padding">
                        <a href="#" className="work-item" style={{ backgroundImage: 'url(images/portfolio-5.jpg)' }}>
                            <div className="desc">
                                <h3>Project Name</h3>
                                <span>Website</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 text-center col-padding">
                        <a href="#" className="work-item" style={{ backgroundImage: 'url(images/portfolio-6.jpg)' }}>
                            <div className="desc">
                                <h3>Project Name</h3>
                                <span>Illustration</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 text-center col-padding">
                        <a href="#" className="work-item" style={{ backgroundImage: 'url(images/portfolio-7.jpg)' }}>
                            <div className="desc">
                                <h3>Project Name</h3>
                                <span>Brading</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 text-center col-padding">
                        <a href="#" className="work-item" style={{ backgroundImage: 'url(images/portfolio-8.jpg)' }}>
                            <div className="desc">
                                <h3>Project Name</h3>
                                <span>Illustration</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection
