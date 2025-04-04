import { FcGoogle } from "react-icons/fc";
import { OauthButton } from "@/features/auth/components/atoms";

const GoogleAuthButton = () => {
  async function handleGoogleAuth() {}
  return (
    <OauthButton onClick={handleGoogleAuth}>
      <FcGoogle />
      Continue with Google
    </OauthButton>
  );
};
export default GoogleAuthButton;
