import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Popover from "../common/Popover";
import { logoutUser } from "../../store/actions/userActions";
import { UserIcon, GridIcon, PlusIcon, LogOutIcon } from "../common/icons";

const MenuItem = ({ to, onClick, icon: Icon, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg text-gray-700 transition-colors hover:bg-gray-50"
  >
    <Icon className="h-4 w-4 text-gray-400" />
    {children}
  </Link>
);

const Avatar = ({ initial, className = "h-8 w-8 text-sm" }) => (
  <span
    className={`flex shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-semibold text-white ${className}`}
  >
    {initial}
  </span>
);

const ProfileMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  const handleLogout = (close) => {
    dispatch(logoutUser());
    close();
    navigate("/");
  };

  const initial = (currentUser?.name || currentUser?.username || "?").charAt(0).toUpperCase();

  return (
    <Popover
      ariaLabel="Account"
      panelClassName="w-60 p-2"
      trigger={currentUser ? <Avatar initial={initial} /> : <UserIcon />}
    >
      {({ close }) =>
        currentUser ? (
          <div>
            <div className="flex items-center gap-3 px-3 py-2 mb-1">
              <Avatar initial={initial} className="h-9 w-9 text-sm" />
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">
                  {currentUser.name || currentUser.username}
                </p>
                <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
              </div>
            </div>

            <div className="h-px bg-gray-100 my-1" />

            <MenuItem to="/dashboard" onClick={close} icon={GridIcon}>
              Dashboard
            </MenuItem>
            <MenuItem to="/admin/products/new" onClick={close} icon={PlusIcon}>
              Add Product
            </MenuItem>
            <MenuItem to="/admin/users/new" onClick={close} icon={PlusIcon}>
              Add User
            </MenuItem>

            <div className="h-px bg-gray-100 my-1" />

            <button
              type="button"
              onClick={() => handleLogout(close)}
              className="flex w-full items-center gap-2.5 px-3 py-2 text-sm rounded-lg text-red-600 transition-colors hover:bg-red-50"
            >
              <LogOutIcon className="h-4 w-4" />
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-1.5 p-1">
            <Link
              to="/"
              onClick={close}
              className="block rounded-lg bg-[var(--primary)] py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={close}
              className="block rounded-lg border border-gray-200 py-2 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Register
            </Link>
          </div>
        )
      }
    </Popover>
  );
};

export default ProfileMenu;
