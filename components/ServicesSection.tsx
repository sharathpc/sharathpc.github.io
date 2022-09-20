const ServicesSection = () => {
    const data = {
        sectionHeading: 'My Services',
        list: [{
            iconClassName: 'icon-paintbrush',
            mainText: 'Web Design',
            subText: 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.'
        }, {
            iconClassName: 'icon-genius',
            mainText: 'Web Development',
            subText: 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.'
        }, {
            iconClassName: 'icon-mobile',
            mainText: 'Mobile Development',
            subText: 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.'
        }]
    }

    return (
        <div id="fh5co-features" className="animate-box">
            <div className="container">
                <div className="services-padding">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center fh5co-heading">
                            <h2>{data.sectionHeading}</h2>
                        </div>
                    </div>
                    <div className="row">
                        {data.list.map((item, itemIndex) =>
                            <div className="col-md-4 text-center" key={itemIndex}>
                                <div className="feature-left">
                                    <span className="icon">
                                        <i className={item.iconClassName}></i>
                                    </span>
                                    <div className="feature-copy">
                                        <h3>{item.mainText}</h3>
                                        <p>{item.subText}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
