import { useLazyQuery } from "@apollo/client";
import { Modal, Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { detailMakanan } from "../../graphql/Queries";
import Auth from "../../utils/Auth";
import fotoig from "../../assets/img/ig.png";
import fotofb from "../../assets/img/fb.png";
import fotoGmail from "../../assets/img/gmail.png";
function Deskripsi() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [onClick, setOnclick] = useState(false);
  const [notLogin, setNotLogin] = useState(false);
  //   const [onClose, setOnClose] = useState(false);
  const [detail, { data, loading, error }] = useLazyQuery(detailMakanan);

  useEffect(() => {
    detail({
      variables: {
        id: id,
      },
    });
  }, []);
  const cara = data?.cooking_makanan_by_pk.cara.split("/");
  const resep = data?.cooking_makanan_by_pk.resep.split("/");
  const nutrisi = data?.cooking_makanan_by_pk.nutrisi?.split(",");

  const handleVideo = () => {
    if (Auth.isAuthorization()) {
      setOnclick(true);
    } else {
      setNotLogin(true);
    }
  };
  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <React.Fragment>
        <Modal
          className="bg-transparent h-screen"
          show={onClick}
          onClose={() => setOnclick(!onClick)}
        >
          <Modal.Header>Tutorial</Modal.Header>
          <Modal.Body className="h-[500px]">
            <ReactPlayer
              url={`${data?.cooking_makanan_by_pk.video}`}
              width="100%"
              height="100%"
            />
          </Modal.Body>
        </Modal>
      </React.Fragment>

      <React.Fragment>
        <Modal
          className="bg-transparent h-screen"
          show={notLogin}
          onClose={!notLogin}
        >
          <Modal.Body className="bg-about">
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal  text-main">
                Login Terlebih Dahulu!
              </h3>
              <div className="flex justify-center gap-5">
                <Button
                  onClick={() => setNotLogin(!notLogin)}
                  color=""
                  className="bg-main text-btn hover:text-white transition-all duration-150 ease-in-out flex justify-center items-center"
                >
                  Kembali
                </Button>
                <Button
                  color=""
                  className="bg-btn text-main  hover:text-white transition-all duration-150 ease-in-out flex justify-center items-center"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
      <div className="px-8 pt-2">
        <ul className="flex w-full gap-x-2 justify-end items-center">
          <li className="px-2 py-1 bg-brown text-main font-semibold rounded-lg">
            <button>FastFood</button>
          </li>
          <li>Share this recipe on</li>
          <li className="p-1 bg-brown/70 rounded-full">
            <img className="h-7" src={fotoig} alt="" />
          </li>
          <li className="p-1 bg-brown/70 rounded-full">
            <img className="h-7" src={fotofb} alt="" />
          </li>
          <li className="p-1 bg-brown/70 rounded-full">
            <img className="h-7" src={fotoGmail} alt="" />
          </li>
        </ul>
      </div>
      <div className="p-3 px-8">
        <div className="grid gap-3 grid-cols-3">
          <div className="flex justify-center items-center">
            <div className="flex h-72 justify-center  ">
              <div
                onClick={handleVideo}
                className="w-72 bg-cover border-2 active:scale-90 border-main/80 active:border-0 hover:saturate-150  transition-all duration-150 ease-linear bg-center rounded-lg cursor-pointer "
              >
                <div
                  className="w-full bg-cover bg-center h-full rounded-lg "
                  style={{
                    backgroundImage: `url(${data?.cooking_makanan_by_pk.foto})`,
                  }}
                >
                  <div className="w-full h-full flex justify-center items-center">
                    <i className="fa-solid text-main fa-3x fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 px-8 rounded-lg">
            <h1 className="text-4xl text-center py-2 capitalize font-bold">
              {data?.cooking_makanan_by_pk.nama}
            </h1>
            <p className="text-lg">{data?.cooking_makanan_by_pk.deskripsi}</p>
            <div className="flex gap-x-10 mt-3">
              <div className="flex flex-col justify-center items-center">
                <span className=" h-5 w-5 bg-brown p-7 font-semibold rounded-full flex items-center justify-center ">
                  {nutrisi && nutrisi[0] ? nutrisi[0] : "0"}
                </span>
                <p className="text-sm">Calories</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className=" h-5 w-5 bg-brown p-7 font-semibold rounded-full flex items-center justify-center ">
                  {nutrisi && nutrisi[1] ? nutrisi[1] : "0"}
                </span>
                <p className="text-sm">Protein</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className=" h-5 w-5 bg-brown p-7 font-semibold rounded-full flex items-center justify-center ">
                  {nutrisi && nutrisi[2] ? nutrisi[2] : "0"}
                </span>
                <p className="text-sm">Fiber</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className=" h-5 w-5 bg-brown p-7 font-semibold rounded-full flex items-center justify-center ">
                  {nutrisi && nutrisi[3] ? nutrisi[3] : "0"}
                </span>
                <p className="text-sm">Carbs</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className=" h-5 w-5 bg-brown p-7 font-semibold rounded-full flex items-center justify-center ">
                  {nutrisi && nutrisi[4] ? nutrisi[4] : "0"}
                </span>
                <p className="text-sm">Fats</p>
              </div>
            </div>
          </div>
          <div>
            <p className="bg-[#595959] py-2 px-2 rounded-lg text-white font-bold">
              Ingredients
            </p>
            <ul className="list-disc mt-2 list-inside no-underline">
              {resep &&
                resep.map((m, index) => (
                  <li className="text-sm" key={index}>
                    {m}
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-span-2 ">
            <p className="bg-[#595959] py-2 px-2 rounded-lg text-white font-bold">
              Directions
            </p>
            <div className="mt-3">
              {cara &&
                cara.map((m, index) => (
                  <div
                    key={index}
                    className=" flex gap-x-5 items-center py-1 font-semibold"
                  >
                    <span className=" h-5 w-5 text-sm bg-brown p-3 rounded-full flex items-center justify-center ">
                      {++index}
                    </span>
                    <p className="text-sm">{m}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deskripsi;
