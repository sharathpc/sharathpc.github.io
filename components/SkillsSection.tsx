import { Fade } from "react-awesome-reveal";

const SkillsSection = () => {
    const data = {
        sectionHeading: 'My Skills',
        frontend: [{
            label: 'HTML5',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/html5_y_-nwrJhQ.svg'
        }, {
            label: 'CSS3',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/css3_3aWm6C-oTl.svg'
        }, {
            label: 'SCSS',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/scss_gCoH0ooG9.svg'
        }, {
            label: 'Bootstrap CSS',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/bootstrap_FTgXz-tge.svg'
        }, {
            label: 'Tailwind CSS',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/tailwindcss_4D2kQvTow8.svg'
        }, {
            label: 'Javascript',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/javascript_OgulsrkVsM.svg'
        }, {
            label: 'Typescript',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/typescript_q7yZNCvHA.svg'
        }, {
            label: 'jQuery',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/jquery_D_eVfX-Kh.png'
        }, {
            label: 'React',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/react_oyoz_Jih6a.svg'
        }, {
            label: 'Angular',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/angular__JkZ984GEW.svg'
        }, {
            label: 'Vue',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/vuejs_X4KhY2Xdj.svg'
        }, {
            label: 'NextJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/nextjs_TI-zp3Ut3.png'
        }, {
            label: 'NuxtJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/nuxtjs__U5-OwJp-.png'
        }, {
            label: 'Redux',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/redux_1Cg0TKGUz.svg'
        }, {
            label: 'Websockets',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/websockets_yERA0uBh9q.png'
        }, {
            label: 'GraphQ',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/graphql_k3blSffZs.png'
        }, {
            label: 'NPM',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/npm_n9g9jm_2Fk.png'
        }, {
            label: 'Webpack',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/webpack_pSmbfsG77.svg'
        }, {
            label: 'ChartJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/chartjs_ZdFi9qjCmr.svg'
        }, {
            label: 'Flutter',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/fluttter_zGknLHBR8V.svg'
        }, {
            label: 'Cypress',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/cypress_cKj-Y0Xc5g.png'
        }, {
            label: 'Playwright',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/playwright_cu7j7kdMX.png'
        }, {
            label: 'Photoshop',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/photoshop_1AoQhUzfy2.svg'
        }],
        backend: [{
            label: 'NodeJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/nodejs_ozZin4Wwsb.svg'
        }, {
            label: 'ExpressJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/expressjs_FRQKgC4bgn.svg'
        }, {
            label: 'NestJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/nestjs_7P8XJ97UDp.svg'
        }, {
            label: 'Dart',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/dart_jB5RjRhIb.svg'
        }, {
            label: 'OAuth2',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/oauth2_iGSkA1yh3N.svg'
        }, {
            label: 'Swagger',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/swagger_vVGUa4iU5.png'
        }, {
            label: 'Kafka',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/kafka_EaYVr9QSs.svg'
        }],
        database: [{
            label: 'Firebase',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/database/firebase_J_j-kBco0.png'
        }, {
            label: 'Strapi',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/database/strapi_OKJ0qHx_a.svg'
        }, {
            label: 'Redis',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/database/redis_TPChEX7zf.svg'
        }, {
            label: 'MySQL',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/database/mysql_elqUKeFUeh.svg'
        }, {
            label: 'PostgreSQL',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/database/postgres_yxUyo4_y_.svg'
        }],
        devops: [{
            label: 'Linux',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/linux_V546vBYum2.svg'
        }, {
            label: 'Nginx',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/nginx_wmAmARVga_.svg'
        }, {
            label: 'Git',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/git_WetyEWuc8B.svg'
        }, {
            label: 'Gitlab CI',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/gitlabci_lQMzHMrAj8.svg'
        }, {
            label: 'Github Actions',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/githubactions_DsWABmQt_i.png'
        }, {
            label: 'Docker',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/docker_For5Colb-x.svg'
        }, {
            label: 'AWS',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/aws_gpWZwXaR2.svg'
        }, {
            label: 'GCP',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/gcp_okNLhoMRl4.svg'
        }, {
            label: 'Heroku',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/heroku_Z4pxY5oj0L.svg'
        }, {
            label: 'Netlify',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/netlify_7iYYd1Rog.png'
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
                    <div className="col-md-12 text-center skills-container">
                        <h3 className="skill-group-heading">Frontend</h3>
                        <div className=" skills-group">
                            <Fade cascade damping={0.05} triggerOnce>
                                {data.frontend.map((item, itemIndex) =>
                                    <img className="skill-logo" src={item.imgUrl} alt={item.label} key={itemIndex} />
                                )}
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="row row-pb-md">
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center skills-container">
                        <h3 className="skill-group-heading">Backend</h3>
                        <div className="skills-group">
                            <Fade cascade damping={0.05} triggerOnce>
                                {data.backend.map((item, itemIndex) =>
                                    <img className="skill-logo" src={item.imgUrl} alt={item.label} key={itemIndex} />
                                )}
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center skills-container">
                        <h3 className="skill-group-heading">Database</h3>
                        <div className="skills-group">
                            <Fade cascade damping={0.05} triggerOnce>
                                {data.database.map((item, itemIndex) =>
                                    <img className="skill-logo" src={item.imgUrl} alt={item.label} key={itemIndex} />
                                )}
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center skills-container">
                        <h3 className="skill-group-heading">Devops</h3>
                        <div className="skills-group">
                            <Fade cascade damping={0.05} triggerOnce>
                                {data.devops.map((item, itemIndex) =>
                                    <img className="skill-logo" src={item.imgUrl} alt={item.label} key={itemIndex} />
                                )}
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
