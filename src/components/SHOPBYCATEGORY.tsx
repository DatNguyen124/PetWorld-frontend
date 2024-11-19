import { FunctionComponent } from "react";
import "./SHOPBYCATEGORY.css";

export type SHOPBYCATEGORYType = {
  className?: string;
};

const SHOPBYCATEGORY: FunctionComponent<SHOPBYCATEGORYType> = ({
  className = "",
}) => {
  return (
    <div className={`shop-by-category ${className}`}>
      <div className="popular-pet-products">
        {/* <img className="pawprint-2-icon1" alt="" src="/pawprint-21@2x.png" /> */}
        <div className="popular-pet-products1">Popular pet products</div>
      </div>
      <div className="shop-by-category1">
        <div className="shop-by-category2">SHOP BY CATEGORY</div>
        <img className="dog-icon" alt="" src="/dog@2x.png" />
        <div className="cat2">
          <img
            className="chjpdmf0zs9sci9pbwfnzxmvd2vic2-icon"
            alt=""
            src="/chjpdmf0zs9sci9pbwfnzxmvd2vic2l0zs8ymdi0ltaxl3jhd3bpegvsx29mzmljzv8zml9hx3n0dwrpb19zag90x29mx2ffy3v0zv9jyxrfd2f2aw5nx2ltywdlc2z1bf82mmniyjbkny1imdjlltqyy2ytyte3zc04mmrkmzzjowuxmgyucg5n-1@2x.png"
          />
        </div>
        <div className="fish2">
          <img
            className="fish-koi-common-goldfish-black-icon"
            alt=""
            src="/fishkoicommongoldfishblacktelescopeaquariumfeederfishaquariumfishrayfinnedfishespngclipart-1@2x.png"
          />
        </div>
        <div className="bird2">
          <img
            className="parrot-bird-isolated-on-transp-icon"
            alt=""
            src="/parrotbirdisolatedontransparentbackgroundaigeneratedpng-1@2x.png"
          />
        </div>
      </div>
      <div className="shop-by-category-child">
        <img src="/shiba.jpg" />
      </div>
      <div className="shop-by-category-item">
        <img src="/fish.png" />
      </div>
      <div className="shop-by-category-inner">
        <img src="/cat.png" />
      </div>
      <div className="shop-by-category-child1">
        <img src="/eagle.jpg" />
      </div>
    </div>
  );
};

export default SHOPBYCATEGORY;
