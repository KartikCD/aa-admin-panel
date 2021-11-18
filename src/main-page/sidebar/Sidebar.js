import React from 'react';
import { useIntl } from 'react-intl';
import {
    ProSidebar,
    Menu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaPowerOff } from 'react-icons/fa';

import { TiContacts } from 'react-icons/ti';
import { MdSubscriptions } from 'react-icons/md';
import { GiFootTrip } from 'react-icons/gi';
import sidebarBg from '../../assets/bg1.jpg';
import SidebarItem from '../../ui-components/sidebar-item/SidebarItem';

const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    const intl = useIntl();
    return (
        <ProSidebar
            image={image ? sidebarBg : false}
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {intl.formatMessage({ id: 'sidebarTitle' })}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <SidebarItem icon={<FaTachometerAlt />}>
                        {intl.formatMessage({ id: 'profile' })}
                    </SidebarItem>
                    <SidebarItem icon={<TiContacts />}>
                        {intl.formatMessage({ id: 'contacts' })}
                    </SidebarItem>
                    <SidebarItem icon={<MdSubscriptions />}>
                        {intl.formatMessage({ id: 'subscribers' })}
                    </SidebarItem>
                    <SidebarItem icon={<GiFootTrip />}>
                        {intl.formatMessage({ id: 'plantrip' })}
                    </SidebarItem>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaPowerOff />
                        <span
                            style={{
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                            }}
                        >
                            {intl.formatMessage({ id: 'logout' })}
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Sidebar;