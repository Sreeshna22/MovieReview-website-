
import { Link } from "react-router-dom";

export default function Navbar({ title, backLink }) {
  return (
    <div className="sticky top-0 bg-red-600 p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        {backLink && (
          <Link
            to={backLink}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Back to Dashboard
          </Link>
        )}
      </div>
    </div>
  );
}
