import Img from "../../../public/ImageDetails.png"

const AboutUS = () => {
  return(
    <section className=" grid grid-cols-2 gap-x-10 items-center max-[1030px]:flex flex-col h-[623px]  pt-10">
      <div className=" p-3 flex flex-col gap-2 justify-self-start">
        <h1 className=" text-2xl ">About Us</h1>
        <h2 className=" text-xl font-semibold">Business Name</h2>
        <p className=" p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas</p>
        <h3>Contact Information</h3>
        <p>+91 1256378409</p>
        <p>Someting@random.com</p>
        <div><button className=" border border-zinc-600 rounded p-2">Directions</button></div>
      </div>
      <div>
        <img src={ Img } alt="AboutUsIamge" className=" max-w-md rounded-lg shadow-lg m-auto"/>
      </div>
    </section>
  )
}
export default AboutUS;