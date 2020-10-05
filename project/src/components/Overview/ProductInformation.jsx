import React from 'react';

const ProductInformation = (props) => {
  console.log('Product Information', props);

  if (props.currentStyle.sale_price === '0') {
    var price = <p>{props.currentStyle.original_price}</p>;
  } else {
    var price = (
      <div>
        <p className="sale-price">
          {props.currentStyle.sale_price}{' '}
          <strike>{props.currentStyle.original_price}</strike>
        </p>
      </div>
    );
  }

  return (
    <div className="product-information-box">
      <h2>ProductInformation Section</h2>
      <h3>Star Rating Placeholder</h3>
      <h4>
        <a href="#question-and-answers">
          Read all {props.reviews.length} Reviews
        </a>
      </h4>
      <p className="product-category">{props.primaryProduct.category}</p>
      <p className="product-name">{props.primaryProduct.name}</p>
      {price}
      <p className="product-description">{props.primaryProduct.description}</p>
      <p>Share On Social Media Placeholder</p>
    </div>
  );
};

export default ProductInformation;
