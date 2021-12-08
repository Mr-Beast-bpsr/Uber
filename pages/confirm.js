import { data } from "autoprefixer";
import React from "react";
import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
import Map from "./components/map";
import { useRouter } from "next/router";

import RideSelector from "./components/RideSelector";
import Link from "next/link";
const Confirm = () => {
  const router = useRouter();
  const { pickup, dropOff } = router.query;
  console.log(pickup, dropOff);

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0]);
  const getPickupCoordinates = async (pickup) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibXJiZWFzdDAwNyIsImEiOiJja3Z2NTdkOWkxODF5Mm9tOTA2MGliaGZuIn0.SUJiS0xxFoc_3dv_IRRbjQ",
          limit: 1,
        })
    );
    if (!response) return;
    const data = await response.json();

    setPickupCoordinates(data.features[0].center);
  };

  const getDropOffCoordinates = async (dropOff) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibXJiZWFzdDAwNyIsImEiOiJja3Z2NTdkOWkxODF5Mm9tOTA2MGliaGZuIn0.SUJiS0xxFoc_3dv_IRRbjQ",
        })
    );
    if (!response) return;
    const data = await response.json();

    setDropOffCoordinates(data.features[0].center);
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropOff);
  }, [pickup, dropOff]);
  return (
    <Wrapper>
      <Back>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </Back>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        {/* Imported button for redeSelector */}
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm Ride</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;
const Wrapper = tw.div` flex flex-1
flex-row
h-screen
flex-col`;
const RideContainer = tw.div`
flex
flex-1
flex-col
h-1/2
`;

const ConfirmButtonContainer = tw.div` bg-opacity-20
 border-t-2`;
const ConfirmButton = tw.div`rounded-lg  text-gray-200 text-center mx-4 my-4 bg-black text-xl py-3`;
const Back = tw.div`bg-opacity-60 transform hover:bg-gray-500 
rounded-full mr-2 w-10 h-10 p-1 m-2 fixed z-10
`;
const BackButton = tw.img`  transform hover:scale-200 
 
`;
