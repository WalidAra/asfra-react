import { FaFacebook } from "react-icons/fa";
import { OauthButton } from "@/features/auth/components/atoms";

const GithubAuthButton = () => {
  async function handleGithubAuth() {}

  return (
    <OauthButton onClick={handleGithubAuth}>
      <FaFacebook className="text-blue-500" />
      Continue with Facebook
    </OauthButton>
  );
};
export default GithubAuthButton;
