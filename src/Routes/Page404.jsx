import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 Page not Found</h1>
      <button onClick={() => navigate(-1, { replace: true })}>Go Back</button>
    </div>
  );
}
