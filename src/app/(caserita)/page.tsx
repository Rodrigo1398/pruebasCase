import { Carousel, Categories, Category, Discount, RecomendedProduct, TopNewProduct, Widget } from "@/components";

export default function HomePage(){

    return (
        <>
        {/* <Category/> */}
        <Carousel/>
        <Widget/>
        <h2 className="mx-auto mb-5 max-w-[1200px] px-5">SHOP BY CATHEGORY</h2>
        <Categories/>
        <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">TOP NEW ARRIVAL</p>
        {/* <TopNewProduct/> */}
        <Discount/>
        <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">RECOMMENDED FOR YOU</p>
        <RecomendedProduct/>
        </>
    );
}