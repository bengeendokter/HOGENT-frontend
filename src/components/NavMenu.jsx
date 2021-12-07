import {NavLink} from "react-router-dom";

const NavItem = ({
    to,
    label
}) => (
    <span>
        <NavLink
            to={to}
            className={`hover:text-blue-500 ${(navData) => navData.isActive ? "text-blue-500 cursor-default" : '' }`}
        >
            {label}
        </NavLink>
    </span>
);

export default function NavMenu()
{
    return (
        <>
            <nav className="flex space-x-6">
                <NavItem to="/dagen" label="Dagen" />
                <NavItem to="/leden" label="Leden" />
            </nav>
        </>
    );
}
