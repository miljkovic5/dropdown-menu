function DropdownItem({
    children,
    leftIcon,
    rightIcon,
    goToMenu,
    setActiveMenu,
}) {
    return (
        <button
            className="menu-item"
            onClick={() => goToMenu && setActiveMenu(goToMenu)}
        >
            <span className="icon-button">{leftIcon}</span>
            {children}
            <span className="icon-right">{rightIcon}</span>
        </button>
    );
}

export default DropdownItem;
