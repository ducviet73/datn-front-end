import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from "./components/ProductCard";
import Banner from "./components/Banner";
import Category from "./category/page";
import ProductSale from "./components/productsale.jsx";
import ProductBestselling from "./components/productbestselling";
import ProductHot from "./components/producthot";
import ProductNew from "./components/productnew";

export default async function Home() {
  const res = await fetch("http://localhost:3000/products", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return (
    <>
      <Banner />
      
      <ProductNew/>

      <ProductSale />

      
      <ProductBestselling />
      <div className="container-nav-brand-table-title">
        <div className="nav-brand-table-title-animated">
          <h3>Quảng cáo</h3>
        </div>
      </div>
      <div className="container-outfit-product-item-big">
        <img src="img/banner-items.jpg" alt="Banner" />
      </div>
      <ProductHot />
      <div className="container my-3">
        <div className="container-nav-brand-table-title">
          <div className="nav-brand-table-title-animated">
            <h3>Thương hiệu</h3>
          </div>
        </div>
        <div className="container-nav-brand-table-poduct">
          <div className="container-nav-brand-table-poduct-items">
            <div className="container-nav-brand-table-poduct-item">
              <div className="brand-table-poduct-item-img">
                <img src="img/danhmuc.jpg" alt="Nike" />
              </div>
              <div className="brand-table-poduct-item-name">
                <span>Nike</span>
              </div>
              <div className="brand-table-poduct-item-name-main">
                <button>Xem Ngay</button>
              </div>
              <div className="brand-table-poduct-item-thanhtoan">
                <span>
                  <i className="bx bx-receipt"></i> Đã bán 105
                </span>
              </div>
            </div>
            <div className="container-nav-brand-table-poduct-item">
              <div className="brand-table-poduct-item-img">
                <img src="img/ad1.jpg" alt="Barcelona" />
              </div>
              <div className="brand-table-poduct-item-name">
                <span>Adidas</span>
              </div>
              <div className="brand-table-poduct-item-name-main">
                <button>Xem Ngay</button>
              </div>
              <div className="brand-table-poduct-item-thanhtoan">
                <span>
                  <i className="bx bx-receipt"></i> Đã bán 555
                </span>
              </div>
            </div>
            <div className="container-nav-brand-table-poduct-item">
              <div className="brand-table-poduct-item-img">
                <img src="img/danhmuc-nike-max.jpg" alt="Nike Max Jr" />
              </div>
              <div className="brand-table-poduct-item-name">
                <span>Nike</span>
              </div>
              <div className="brand-table-poduct-item-name-main">
                <button>Xem Ngay</button>
              </div>
              <div className="brand-table-poduct-item-thanhtoan">
                <span>
                  <i className="bx bx-receipt"></i> Đã bán 200
                </span>
              </div>
            </div>
            <div className="container-nav-brand-table-poduct-item">
              <div className="brand-table-poduct-item-img">
                <img src="img/ad2.jpg" alt="Rela" />
              </div>
              <div className="brand-table-poduct-item-name">
                <span>Adidas</span>
              </div>
              <div className="brand-table-poduct-item-name-main">
                <button>Xem Ngay</button>
              </div>
              <div className="brand-table-poduct-item-thanhtoan">
                <span>
                  <i className="bx bx-receipt"></i> Đã bán 88
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
