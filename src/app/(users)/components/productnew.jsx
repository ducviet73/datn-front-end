"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "@/app/(users)/components/ProductCard";

export default function ProductNew() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData () {
      try {
        const res = await fetch(`https://datn-back-end.onrender.com/products/newproducts`, { cache: 'no-store' });
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <div className="container my-3">
        <div>
        <div class="container-nav-brand-table-title">
              <div class="nav-brand-table-title-animated">
                <h3>Sản phẩm mới </h3>
              </div>
            </div>
          
          <div className="row">
            <ProductCard data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
