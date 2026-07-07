import { Link } from "react-router-dom";
import { Layers3 } from "lucide-react";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="bg-blue-600 p-2 rounded-full text-white">
        <Layers3 size={22} />
      </div>

      <h1 className="text-2xl font-bold text-gray-800">
        Aiesth<span className="text-blue-600">rox</span>
      </h1>
    </Link>
  );
};

export default Logo;