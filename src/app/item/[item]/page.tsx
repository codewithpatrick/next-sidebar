import React from "react";

const ItemPage = ({ params }: { params: { item: string } }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{params.item} Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat autem
        iure optio explicabo est ipsam nulla similique quos officia tempora.
        Eius repudiandae eaque obcaecati distinctio aliquam sit, officiis error
        assumenda?
      </p>
    </div>
  );
};

export default ItemPage;
