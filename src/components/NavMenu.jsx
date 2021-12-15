import {NavLink} from "react-router-dom";
import { useCallback } from "react";
import { useLogout, useSession } from "../contexts/AuthProvider";

const NavItem = ({
    to,
    label
}) => (
    <span>
        <NavLink
            to={to}
            className={`hover:text-blue-500 ${(navData) => navData.isActive ? "text-blue-500 cursor-default" : ''}`}
        >
            {label}
        </NavLink>
    </span>
);

export default function NavMenu()
{
    const { isAuthed } = useSession();
    const logout = useLogout();

    const handleLogout = useCallback(() => {
        logout();
      }, [logout]);

    return (
        <>
            <nav className="flex space-x-6">
                <NavItem to="/dagen" label="Dagen" />
                <NavItem to="/leden" label="Leden" />
                {
                    !isAuthed ? (
                        <>
                            <NavItem to="/login" label="Sign in" />
                        </>
                    ) : (
                        <>
                            <button onClick={handleLogout}>
                                Sign out
                            </button>
                        </>
                    )
                }
            </nav>
        </>
    );
}
