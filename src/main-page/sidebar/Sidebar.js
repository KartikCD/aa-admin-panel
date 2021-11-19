import React from 'react';
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
          AA - Admin Panel
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <SidebarItem icon={<FaTachometerAlt />}>Profile</SidebarItem>
                    <SidebarItem icon={<TiContacts />}>Contacts</SidebarItem>
                    <SidebarItem icon={<MdSubscriptions />}>Subscribers</SidebarItem>
                    <SidebarItem icon={<GiFootTrip />}>Plan a Trip</SidebarItem>
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
              Logout
                        </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Sidebar;
