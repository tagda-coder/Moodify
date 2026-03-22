import { Link } from "react-router-dom";
function LinkButton({ to, text, classname }) {
  return (
    <Link to={to} className={`px-4 py-2 font-semibold ${classname}`}>
      {text}
    </Link>
  );
}

export default LinkButton;
