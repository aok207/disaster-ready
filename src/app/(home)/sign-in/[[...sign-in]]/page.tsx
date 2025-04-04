import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <div className="flex-grow-1 grid w-full place-content-center">
      <SignIn />
    </div>
  );
}
