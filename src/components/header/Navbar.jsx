import NavItem from "./NavItem";
import { ReactComponent as BellIcon } from "../../icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";

import DropdownMenu from "./DropdownMenu";

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <NavItem icon={<PlusIcon />} />
                <NavItem icon={<BellIcon />} />
                <NavItem icon={<MessengerIcon />} />
                <NavItem icon={<CaretIcon />}>
                    <DropdownMenu />
                </NavItem>
            </ul>
        </nav>
    );
}
export default Navbar;
