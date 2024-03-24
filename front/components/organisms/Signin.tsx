import LoginLayout from "../layouts/LoginLayout";
import FormSignin from "../molecules/FormSignin";

export default function Signin() {
  return (
    <LoginLayout title="Sign in now!">
      <FormSignin />
    </LoginLayout>
  );
}
