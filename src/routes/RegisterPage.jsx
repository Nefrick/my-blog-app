import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-22vh)]">
      <SignUp signInUrl="/login/" />
    </div>
  );
};
export default RegisterPage;
