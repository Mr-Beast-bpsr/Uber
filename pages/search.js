import tw from "tailwind-styled-components";
import React from "react";
import { useState } from "react";
import Link from "next/link";
const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropOff, setDropOff] = useState("");

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src=" https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter Pickup location!"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropOff}
            onChange={(e) => setDropOff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: { pickup: pickup, dropOff: dropOff },
        }}
      >
        <Confirm>Confirm Locations</Confirm>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`bg-white px-3`;
const BackButton = tw.img`w-8`;
const FromToIcons = tw.div`
w-8 flex flex-col
mr-2
items-center
`;
const InputContainer = tw.div`bg-white
flex items-center px-4 mb-2 w-100px`;
const Circle = tw.img`h-2.5 `;
const Line = tw.img`h-10`;
const Square = tw.img`h-3`;
const InputBoxes = tw.div``;
const Input = tw.input` h-10  bg-gray-200  rounded-lg
flex
p-4
my-3
outline-none border-none`;
const PlusIcon = tw.img`w-10 h-10 bg-gray-200 rounded-full
ml-3 transform hover:scale-110`;
const SavedPlaces = tw.div`flex items-center bg-white px-4 py-2`;

const StarIcon = tw.img` bg-gray-500 h-6 p-1
rounded-full mr-2`;
const Confirm = tw.div`
bg-black text-white
h-8 flex items-center justify-center rounded-lg m-5 mt-2
transform hover:scale-105 transition text-l`;
