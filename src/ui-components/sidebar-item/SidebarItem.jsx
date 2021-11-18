import * as React from 'react';
import { MenuItem } from 'react-pro-sidebar';

const SidebarItem = ({ icon, children }) => {
    return(
        <MenuItem icon={icon}>
            {children}
        </MenuItem>
    )
}

export default SidebarItem;