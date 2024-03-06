import Carrosel from "./Carrosoel";
import CardItemCarrosel from "./carItemCarrosel";

const TrendingComponent = ({ name }: { name: string }) => {
  return(
    <section>
      <h1 className="text-3xl pl-5 p-4">{ name }</h1>
      <div>
        <Carrosel>
          <div className=" flex gap-3 p-4">
            <CardItemCarrosel/>
            <CardItemCarrosel/>
            <CardItemCarrosel/>
            <CardItemCarrosel/>
            <CardItemCarrosel/>
          </div>
          <div className=" flex gap-3 pr-4 pb-4 pt-4">
            <CardItemCarrosel/>
            <CardItemCarrosel/>
            <CardItemCarrosel/>
            <CardItemCarrosel/>
            <CardItemCarrosel/>
          </div>
        </Carrosel>
      </div>
    </section>
  )
}
export default TrendingComponent;