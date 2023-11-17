import React, { useState } from "react";

function NavItem({ children, icon }) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <button className="icon-button" onClick={() => setOpen(!open)}>
                {icon}
            </button>

            {open && children}
        </li>
    );
}

export default NavItem;
