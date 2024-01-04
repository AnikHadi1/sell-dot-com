import Image from "next/image";
import Carousel from "./Carousel";
import SectionWarper from "./SectionWarper";

const image = [
  { image: "https://i.ibb.co/MVcMdtB/slider-side-top.jpg" },
  { image: "https://picsum.photos/seed/random102/500/500" },
  { image: "https://i.ibb.co/MVcMdtB/slider-side-top.jpg" },
  { image: "https://i.ibb.co/NWsXCLT/slider-side-bottom.jpg" },
  { image: "https://picsum.photos/seed/random102/500/500" },
  { image: "https://i.ibb.co/NWsXCLT/slider-side-bottom.jpg" },
];

function TopSlider() {
  return (
    <div
      className="w-full py-3"
      // style={{
      //   display: "grid",
      //   gridGap: "8px",
      //   gridTemplateColumns: "3fr 1fr",
      // }}
    >
      {/* <div
        className="w-full grid grid-flow-col"
        style={{ position: "relative", height: "400px" }}
      >
        <Image
          src="https://i.ibb.co/MVcMdtB/slider-side-top.jpg"
          alt="slider-side-bottom"
          // width={500}
          // height={500}
          fill
          // sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
        <Image
          src="https://i.ibb.co/MVcMdtB/slider-side-top.jpg"
          alt="slider-side-bottom"
          // width={100}
          // height={100}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
        <Image
          src="https://i.ibb.co/MVcMdtB/slider-side-top.jpg"
          alt="slider-side-bottom"
          width={100}
          height={100}
        />
        <Image
          src="https://i.ibb.co/MVcMdtB/slider-side-top.jpg"
          alt="slider-side-bottom"
          width={100}
          height={100}
        />
      </div> */}
      {/* <Carousel data={DATA} /> */}
      <div>
        <Carousel image={image} />
      </div>
      <div className="">
        <div>
          <Image
            src="https://i.ibb.co/MVcMdtB/slider-side-top.jpg"
            alt="slider-side-bottom"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            src="https://i.ibb.co/NWsXCLT/slider-side-bottom.jpg"
            alt="slider-side-bottom"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionWarper(TopSlider);
