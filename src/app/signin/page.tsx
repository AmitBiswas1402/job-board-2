import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
export default SignInPage;
