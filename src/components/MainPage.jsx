import React from "react";
import Slider from "./products/Slider";

function MainPage() {
  const ImageData = [
    {
      image:
        "https://www.incehesap.com/resim/banners/61b1b1a3ef5fd1.40934531_pnloiqhfkegmj.jpeg",
      _image:
        "https://www.incehesap.com/resim/urun/202107/610267751d8eb8.11990076_einmfopjlqkgh_210.jpg",
      type: "graphic card",
    },
    {
      image:
        "https://www.incehesap.com/resim/banners/61b84812a20e14.89837620_lhfkoinpqmgje.jpeg",
      _image:
        "https://www.incehesap.com/resim/urun/202103/6059e0b146b289.16861986_golfhienpjqkm_210.jpg",
      type: "motherboard",
    },
    {
      image:
        "https://www.incehesap.com/resim/banners/61b734060ce3a3.87168231_kmleqifhojnpg.jpeg",
      _image:
        "https://www.incehesap.com/resim/urun/202110/617eceff620b04.16640207_pefjlokngqhim_210.jpg",
      type: "ram",
    },
    {
      image:
        "https://www.incehesap.com/resim/banners/61b0a5fe214c21.42091033_efnpjlmqgohik.jpeg",
      _image:
        "https://www.incehesap.com/resim/urun/202010/5f967278514834.17585720_qmjenhpkgoilf_210.jpg",
      type: "cpu",
    },
  ];

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <Slider slides={ImageData} />
    </div>
  );
}

export default MainPage;
