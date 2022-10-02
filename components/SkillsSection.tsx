import { Fade } from "react-awesome-reveal";

const SkillsSection = () => {
    const data = {
        sectionHeading: 'Skills',
        frontend: [{
            label: 'HTML5',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/html5_y_-nwrJhQ.svg',
            link: 'https://en.wikipedia.org/wiki/HTML5'
        }, {
            label: 'CSS3',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/css3_3aWm6C-oTl.svg',
            link: 'https://en.wikipedia.org/wiki/CSS'
        }, {
            label: 'SCSS',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/scss_gCoH0ooG9.svg',
            link: 'https://sass-lang.com'
        }, {
            label: 'Bootstrap CSS',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/bootstrap_FTgXz-tge.svg',
            link: 'https://getbootstrap.com'
        }, {
            label: 'Tailwind CSS',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/tailwindcss_4D2kQvTow8.svg',
            link: 'https://tailwindcss.com'
        }, {
            label: 'Javascript',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/javascript_OgulsrkVsM.svg',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        }, {
            label: 'Typescript',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/typescript_q7yZNCvHA.svg',
            link: 'https://www.typescriptlang.org'
        }, {
            label: 'jQuery',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/jquery_D_eVfX-Kh.png',
            link: 'https://jquery.com'
        }, {
            label: 'React',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/react_oyoz_Jih6a.svg',
            link: 'https://reactjs.org'
        }, {
            label: 'Angular',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/angular__JkZ984GEW.svg',
            link: 'https://angular.io'
        }, {
            label: 'Vue',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/vuejs_X4KhY2Xdj.svg',
            link: 'https://vuejs.org'
        }, {
            label: 'NextJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/nextjs_TI-zp3Ut3.png',
            link: 'https://nextjs.org'
        }, {
            label: 'NuxtJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/nuxtjs__U5-OwJp-.png',
            link: 'https://nuxtjs.org'
        }, {
            label: 'Redux',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/redux_1Cg0TKGUz.svg',
            link: 'https://redux.js.org'
        }, {
            label: 'Websockets',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/websockets_yERA0uBh9q.png',
            link: 'https://socket.io'
        }, {
            label: 'GraphQL',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/graphql_k3blSffZs.png',
            link: 'https://graphql.org'
        }, {
            label: 'NPM',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/npm_n9g9jm_2Fk.png',
            link: 'https://www.npmjs.com'
        }, {
            label: 'Webpack',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/webpack_pSmbfsG77.svg',
            link: 'https://webpack.js.org'
        }, {
            label: 'ChartJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/chartjs_ZdFi9qjCmr.svg',
            link: 'https://www.chartjs.org'
        }, {
            label: 'Flutter',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/fluttter_zGknLHBR8V.svg',
            link: 'https://flutter.dev'
        }, {
            label: 'Cypress',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/cypress_cKj-Y0Xc5g.png',
            link: 'https://www.cypress.io'
        }, {
            label: 'Playwright',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/playwright_cu7j7kdMX.png',
            link: 'https://playwright.dev'
        }, {
            label: 'Photoshop',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/frontend/photoshop_1AoQhUzfy2.svg',
            link: 'https://www.adobe.com/in/products/photoshop.html'
        }],
        backend: [{
            label: 'NodeJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/nodejs_ozZin4Wwsb.svg',
            link: 'https://nodejs.org'
        }, {
            label: 'ExpressJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/expressjs_FRQKgC4bgn.svg',
            link: 'https://expressjs.com'
        }, {
            label: 'NestJs',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/nestjs_7P8XJ97UDp.svg',
            link: 'https://nestjs.com'
        }, {
            label: 'Dart',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/dart_jB5RjRhIb.svg',
            link: 'https://dart.dev'
        }, {
            label: 'OAuth2',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/oauth2_iGSkA1yh3N.svg',
            link: 'https://oauth.net/2'
        }, {
            label: 'Swagger',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/swagger_vVGUa4iU5.png',
            link: 'https://swagger.io'
        }, {
            label: 'Kafka',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/backend/kafka_EaYVr9QSs.svg',
            link: 'https://kafka.apache.org'
        }],
        database: [{
            label: 'Firebase',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/database/firebase_J_j-kBco0.png',
            link: 'https://firebase.google.com'
        }, {
            label: 'Strapi',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/database/strapi_OKJ0qHx_a.svg',
            link: 'https://strapi.io'
        }, {
            label: 'Redis',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/database/redis_TPChEX7zf.svg',
            link: 'https://redis.io'
        }, {
            label: 'PostgreSQL',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/database/postgres_yxUyo4_y_.svg',
            link: 'https://www.postgresql.org'
        }],
        devops: [{
            label: 'Linux',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/linux_V546vBYum2.svg',
            link: 'https://www.linux.org'
        }, {
            label: 'Nginx',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/nginx_wmAmARVga_.svg',
            link: 'https://www.nginx.com'
        }, {
            label: 'Git',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/git_WetyEWuc8B.svg',
            link: 'https://git-scm.com'
        }, {
            label: 'Gitlab CI',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/gitlabci_lQMzHMrAj8.svg',
            link: 'https://docs.gitlab.com/ee/ci'
        }, {
            label: 'Github Actions',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/githubactions_DsWABmQt_i.png',
            link: 'https://github.com/features/actions'
        }, {
            label: 'Docker',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/docker_For5Colb-x.svg',
            link: 'https://www.docker.com'
        }, {
            label: 'AWS',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/aws_gpWZwXaR2.svg',
            link: 'https://aws.amazon.com'
        }, {
            label: 'GCP',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/gcp_okNLhoMRl4.svg',
            link: 'https://cloud.google.com'
        }, {
            label: 'Heroku',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/heroku_Z4pxY5oj0L.svg',
            link: 'https://www.heroku.com'
        }, {
            label: 'Netlify',
            imgUrl: 'https://ik.imagekit.io/sharathpc/protfolio/skills/devops/netlify_7iYYd1Rog.png',
            link: 'https://www.netlify.com'
        }]
    }

    return (
        <div id="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center heading">
                        <h2>{data.sectionHeading}</h2>
                    </div>
                </div>

                <div className="row row-pb-md">
                    <div className="col-md-12 text-center skills-container">
                        <h3 className="skill-group-heading">Frontend</h3>
                        <div className=" skills-group">
                            <Fade cascade damping={0.05} triggerOnce>
                                {data.frontend.map((item, itemIndex) =>
                                    <a href={item.link} target="_blank" rel="noreferrer" title={item.label} key={itemIndex}>
                                        <img className="skill-logo" src={item.imgUrl} alt={item.label} />
                                    </a>
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
                                    <a href={item.link} target="_blank" rel="noreferrer" title={item.label} key={itemIndex}>
                                        <img className="skill-logo" src={item.imgUrl} alt={item.label} />
                                    </a>
                                )}
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center skills-container">
                        <h3 className="skill-group-heading">Database</h3>
                        <div className="skills-group">
                            <Fade cascade damping={0.05} triggerOnce>
                                {data.database.map((item, itemIndex) =>
                                    <a href={item.link} target="_blank" rel="noreferrer" title={item.label} key={itemIndex}>
                                        <img className="skill-logo" src={item.imgUrl} alt={item.label} />
                                    </a>
                                )}
                            </Fade>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center skills-container">
                        <h3 className="skill-group-heading">Devops</h3>
                        <div className="skills-group">
                            <Fade cascade damping={0.05} triggerOnce>
                                {data.devops.map((item, itemIndex) =>
                                    <a href={item.link} target="_blank" rel="noreferrer" title={item.label} key={itemIndex}>
                                        <img className="skill-logo" src={item.imgUrl} alt={item.label} />
                                    </a>
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
