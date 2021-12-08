import React, { useEffect } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { useRouter } from "next/router";
import {
  signInWithPopup,
  onAuthStateChanged,
} from "../../node_modules/@firebase/auth";
import { auth, provider } from "../firebase";
import { fromJSON } from "postcss";
const Login = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title> Log in to access your account </Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div` bg-gray-300 text-xl h-screen flex flex-col p-4
`;
const SignInButton = tw.button` bg-black text-white text-center p-4 mt-10 rounded-lg w-full self-center`;

const UberLogo = tw.img`h-10 w-auto object-contain self-start`;
const Title = tw.div`text-4xl pt-4 text-gray-500`;
const HeadImage = tw.img`
object-contain `;
