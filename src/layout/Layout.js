import React, { useState } from 'react';
import Sidebar from '../main-page/sidebar/Sidebar';
import Main from '../main-page/content/Main';

const Layout = React.memo(({ comp }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    return (
        <div className={`app ${toggled ? 'toggled' : ''}`}>
            <Sidebar
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <Main
                toggled={toggled}
                collapsed={collapsed}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
            >
                {comp}
            </Main>
        </div>
    );
});

export default Layout;
