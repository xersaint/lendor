"use client";
import GoogleIcon from "@/icons/GoogleIcon";
import { Button, Divider, Link } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import EmailInput from "@/components/common/form/EmailInput";
import PasswordInput from "@/components/common/form/PasswordInput";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [error, setError] = useState('');

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginInProgress(true);
    setError('');
    const response = await signIn('credentials', { email, password, redirect: false });
    if (response?.ok) {
      router.push('/')
    } else {
      setError("The email or password you entered is incorrect.");
    }
    setLoginInProgress(false);
  }

  return (
    <section className="pt-12 pb-20">
      <h1 className="text-center text-sky-50 text-4xl my-4">
        
        Login
      </h1>
      <form className="flex flex-col gap-2 max-w-lg mx-auto mt-12 border-1" onSubmit={handleFormSubmit}>
        {/* <EmailInput emailValue={email} setEmail={setEmail} disabled={loginInProgress} className="mb-4 bg-transparent" /> */}
        <label htmlFor="email" className="text-white text-xl">Email</label>
        <input type="email" name="" id="email" value={email} onChange={(e :any) => setEmail(e.target.value)} className="bg-white p-2 mb-5 text-primary-200" />
        <label htmlFor="password" className="text-white text-xl">Password</label>
        <input type="password" name="" id="password" value={password} onChange={(e :any) => setPassword(e.target.value)} className="bg-white p-2 mb-5 text-primary-200" />
        {/* <PasswordInput passwordValue={password} setPassword={setPassword} disabled={loginInProgress} className=" bg-sky-50 text-primary-200" /> */}
        <div className="text-danger my-2">{error}</div>
        <Button type="submit" fullWidth isLoading={loginInProgress} isDisabled={loginInProgress} className="font-semibold bg-sky-50 text-primary-200 hover:bg-primary-200 hover:text-white">Login</Button>
        <div className="text-center mt-4 text-white">
        dont&apos;t have an account? {' '}
          <Link href={"/register"} className="text-white font-semibold" isDisabled={loginInProgress}>Sign Up</Link>
        </div>
        <div className="my-3 text-center grid grid-cols-3 items-center">
          {/* <Divider />
          OR
          <Divider /> */}
        </div>
        {/* <Button
          fullWidth
          disabled={loginInProgress}
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="font-semibold text-dark bg-white border border-dark"
          startContent={<GoogleIcon className={"w-6"} />}>
          Login with Google
        </Button> */}
      </form>
    </section>
  )
}

export default LoginPage