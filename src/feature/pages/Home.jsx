import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../../components/layout/Navbar";

const Home = () => {
  const currentUser = useSelector((state) => state.users.currentUser);

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-6 py-12 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold">
          Welcome{currentUser ? `, ${currentUser.name || currentUser.username}` : ""}
        </h1>
        <p className="text-gray-500 mt-2 mb-6">Discover the latest arrivals and best sellers.</p>
        <Link
          to="/shop"
          className="py-3 px-6 rounded-lg text-white bg-[var(--primary)] hover:bg-[var(--primary-hover)]"
        >
          Browse the Shop
        </Link>
      </div>
    </>
  );
};

export default Home;
