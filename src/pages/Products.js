import React from "react";
import ProductList from "./ProductList";
import OurBranches from "./OurBranches";

function Products() {
  return (
    <div>

      <section>
        <ProductList/>
      </section>

      
      <section >
        <OurBranches />
      </section>

    </div>

  );
};

export default Products;
