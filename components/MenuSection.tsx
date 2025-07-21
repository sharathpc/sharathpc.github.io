import { useState } from "react"

const MenuSection = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const data = {
        menuList: [{
            id: 'header-section',
            label: 'Header',
        }, {
            id: 'about-section',
            label: 'About Me',
        }, {
            id: 'experience-section',
            label: 'Experience',
        }, {
            id: 'services-section',
            label: 'Services',
        }, {
            id: 'skills-section',
            label: 'Skills',
        }, {
            id: 'work-section',
            label: 'Projects',
        }, {
            id: 'blogs-section',
            label: 'Articles',
        }, {
            id: 'footer-section',
            label: 'Footer',
        }]
    }

    return (
        <div id="portfolioMenuSection">
            <ul id="portfolioMenu" style={{ height: menuVisible ? `${50 * data.menuList.length}px` : '0px' }}>
                {data.menuList.map((item, iIndex) =>
                    <li key={iIndex} onClick={() => setMenuVisible(false)}>
                        <a href={`#${item.id}`}>{item.label}</a>
                    </li>
                )}
            </ul>
            <button id="hamburger-icon" onClick={() => setMenuVisible(!menuVisible)}>
                <i className="icon-menu"></i>
            </button>
        </div>
    )
}

export default MenuSection
