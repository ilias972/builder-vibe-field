import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientRegister() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to main register page with client pre-selected
    navigate("/register?type=client");
  }, [navigate]);

  return null;
}
