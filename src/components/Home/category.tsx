import Image from "./Image";
import item5 from "../../../public/imageItem(4).png";
import item1 from "../../../public/imageItem(2).png";
import item4 from "../../../public/imageItem(5).png";

const Category = () => {
  return (
    <section className="h-96 m-4 pb-4">
      <h1 className="text-lg font-bold p-3">Shop by Categories</h1>
      <div className="grid h-full gap-4 p-4 grid-cols-3">
        <Image Img={ item5 } className="" />
        <Image Img={ item1 } className="" />
        <Image Img={ item4 } className="" />
      </div>
    </section>
  );
};

export default Category;
