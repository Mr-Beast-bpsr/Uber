import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";

import mapboxgl from "mapbox-gl";
import { useEffect, useState } from "react";
import Map from "./components/map";
import Link from "next/link";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photo: user.photoUrl,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);
  //
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src=" https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png " />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png " />
            Reserve
          </ActionButton>
        </ActionButtons>
        <Link href="/search">
          <InputButton>Where to?</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  );
}
const Wrapper = tw.div`
flex flex-col

h-screen 

// `;
// const Map = tw.div`
// bg-red-500
// flex-1
// `;
const ActionItems = tw.div`

flex-1
p-4
`;
const Header = tw.div`flex justify-between items-center`;
const UberLogo = tw.img`flex 
h-10`;
const Profile = tw.div`flex items-center`;
const Name = tw.div`mr-5 w-15  text-sm`;

const UserImage = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px
cursor-pointer`;
const ActionButtons = tw.div`flex `;

const ActionButton = tw.div` bg-gray-300

flex flex-1 flex-col 
m-1 h-20 items-center
justify-center
rounded-lg
transform hover:scale-110 transition text-xl
`;
const ActionButtonImage = tw.img` h-3/5`;
const InputButton = tw.div` h-12 bg-gray-300 text-xl p-4 flex items-center mt-5`;
