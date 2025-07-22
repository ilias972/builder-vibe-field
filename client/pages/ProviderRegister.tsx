import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProviderRegister() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to main register page with provider pre-selected
    navigate("/register?type=provider");
  }, [navigate]);

  return null;
}
