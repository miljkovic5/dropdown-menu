import DropdownItem from "./DropdownItem";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../icons/bolt.svg";

import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    return (
        <div
            className="dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}
        >
            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem setActiveMenu={setActiveMenu} leftIcon="👨🏼‍💻">
                        My Profile
                    </DropdownItem>
                    <DropdownItem
                        setActiveMenu={setActiveMenu}
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        setActiveMenu={setActiveMenu}
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals"
                    >
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem
                        leftIcon={<ArrowIcon />}
                        setActiveMenu={setActiveMenu}
                        goToMenu="main"
                    >
                        <h2>Settings</h2>
                    </DropdownItem>
                    <DropdownItem
                        setActiveMenu={setActiveMenu}
                        leftIcon={<BoltIcon />}
                    >
                        HTML
                    </DropdownItem>
                    <DropdownItem
                        setActiveMenu={setActiveMenu}
                        leftIcon={<BoltIcon />}
                    >
                        CSS
                    </DropdownItem>
                    <DropdownItem
                        setActiveMenu={setActiveMenu}
                        leftIcon={<BoltIcon />}
                    >
                        JavaScript
                    </DropdownItem>
                    <DropdownItem
                        setActiveMenu={setActiveMenu}
                        leftIcon={<BoltIcon />}
                    >
                        Awesome
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "animals"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem
                        setActiveMenu={setActiveMenu}
                        goToMenu="main"
                        leftIcon={<ArrowIcon />}
                    >
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem setActiveMenu={setActiveMenu} leftIcon="🦘">
                        Kangaroo
                    </DropdownItem>
                    <DropdownItem setActiveMenu={setActiveMenu} leftIcon="🐸">
                        Frog
                    </DropdownItem>
                    <DropdownItem setActiveMenu={setActiveMenu} leftIcon="🐎">
                        Horse
                    </DropdownItem>
                    <DropdownItem setActiveMenu={setActiveMenu} leftIcon="🦔">
                        Hedgehog
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;
