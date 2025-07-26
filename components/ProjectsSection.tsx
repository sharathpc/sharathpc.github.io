import { useEffect, useState } from "react";

const ProjectsSection = () => {
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/users/sharathpc/repos")
            .then(res => res.json())
            .then(data => {
                setProjects(data.filter((item: any) => !item.archived && !item.fork).sort((a: any, b: any) => {
                    const dateTimeA = new Date(a.updated_at);
                    const dateTimeB = new Date(b.updated_at);
                    return new Date(dateTimeB).getTime() - dateTimeA.getTime();
                }));
            });
    }, []);

    return (
        <div id="work-section" className="global-bg-dark">
            <div className="container">
                <div key="heading" className="row">
                    <div className="col-md-8 offset-md-2 text-center heading">
                        <h2>Github Projects</h2>
                    </div>
                </div>
                <div key="content" className="row">
                    {projects.map(item =>
                        <div key={item.id} className="col-md-3 text-center col-padding">
                            <a href={item.url} className="work-item" style={{ backgroundImage: 'url(images/portfolio-1.jpg)' }}>
                                <div className="desc">
                                    <h3>{item.name}</h3>
                                    <span>{item.description}</span>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection
