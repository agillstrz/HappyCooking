import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useQuery } from "@apollo/client";
import { Scrollbar } from "swiper";
import "swiper/css";
import { cookPopular } from "../graphql/Queries";
import Card from "./Card";

export default function Popular() {
  const { data, loading, error } = useQuery(cookPopular);

  return (
    <div className="bg-main text-white py-10 px-5">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Most Popular</h1>
      </div>
      <p>Recipes the are trending</p>

      <Swiper
        modules={[Scrollbar]}
        spaceBetween={20}
        slidesPerView={4}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data &&
          data?.cooking_makanan.map((m) => (
            <SwiperSlide key={m.id}>
              <Card data={m} />
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <div className="grid grid-cols-4 place-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  );
}
