import React from "react";
import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
import { carList } from "../data/carList";
const RideSelector = ({ pickupCoordinates, dropOffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);
  // Get ride duration from mapbox Api
  // 1 Pickup cordinates
  //2 dropOff Coordinates
  const rideEffect = async () => {
    const rideDuration = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates};${dropOffCoordinates}?access_token=pk.eyJ1IjoibXJiZWFzdDAwNyIsImEiOiJja3Z2NTdkOWkxODF5Mm9tOTA2MGliaGZuIn0.SUJiS0xxFoc_3dv_IRRbjQ`
    );
    const data = await rideDuration.json();
    setRideDuration(data.routes[0].duration / 60);
  };
  useEffect(() => {
    rideEffect();
  }, [pickupCoordinates[0], dropOffCoordinates[1]]);
  return (
    <Wrapper>
      <Title>Choose a ride or swipe up for more.</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetail>
              <ServiceSection>{car.service}</ServiceSection>
              <Time>5 mins away</Time>
            </CarDetail>
            <Price>{(rideDuration * car.multiplier).toFixed(2)} Rs💵</Price>
          </Car>
        ))}
        ;
      </CarList>
    </Wrapper>
  );
};
export default RideSelector;

const Wrapper = tw.div` flex-1 
overflow-y-scroll flex flex-col
;
 
`;
const Title = tw.div`text-gray-600 text-center text-xs py-2 border-b-2 border-gray-200 `;
const CarList = tw.div`overflow-y-scroll `;
const Car = tw.div`flex
border-2
p-4 items-center  transform hover:bg-gray-800 active:bg-gray-800  `;
const CarImage = tw.img`
w-14 mr-3`;
const ServiceSection = tw.div` font-medium `;
const Time = tw.div`
text-xs text-blue-500
`;
const Price = tw.div`text-sm`;
const CarDetail = tw.div` flex-1 
`;
