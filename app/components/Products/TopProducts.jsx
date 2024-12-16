import "./TopProducts.css"
import TopProductsFilter from "./TopProductsFilter/topproductsfilter";
import Justheader from "./TopProductsHeader/JustHeader";

export default function TopProducts() {
  return (
    <div>
        <Justheader />
        <TopProductsFilter />
    </div>
  );
}
