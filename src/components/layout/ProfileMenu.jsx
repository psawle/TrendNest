import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Popover from "../common/Popover";
import { logoutUser } from "../../store/actions/userActions";

const MenuLink = ({ to, onClick, children }) => (
  <Link to={to} onClick={onClick} className="block px-3 py-2 text-sm rounded-lg hover:bg-gray-50">
    {children}
  </Link>
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

  return (
    <Popover ariaLabel="Account" trigger={<span aria-hidden="true" className="text-xl">👤</span>}>
      {({ close }) => (
        <div className="w-56 bg-white rounded-xl shadow-lg border p-2">
          {currentUser ? (
            <>
              <div className="px-3 py-2 border-b mb-1">
                <p className="text-sm font-medium truncate">
                  {currentUser.name || currentUser.username}
                </p>
                <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
              </div>
              <MenuLink to="/dashboard" onClick={close}>Dashboard</MenuLink>
              <MenuLink to="/admin/products/new" onClick={close}>Add Product</MenuLink>
              <MenuLink to="/admin/users/new" onClick={close}>Add User</MenuLink>
              <button
                type="button"
                onClick={() => handleLogout(close)}
                className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-50 text-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <MenuLink to="/" onClick={close}>Login</MenuLink>
              <MenuLink to="/register" onClick={close}>Register</MenuLink>
            </>
          )}
        </div>
      )}
    </Popover>
  );
};

export default ProfileMenu;
