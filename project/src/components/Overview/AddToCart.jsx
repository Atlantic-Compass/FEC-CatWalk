import React, { useState } from 'react';
import SelectSize from './SelectSize.jsx';
import '../../../dist/stylesheets/OverviewStyles.css';

const AddToCart = (props) => {
  // console.log('AddToCart', props);
  var skus = [];
  var skusObject = {};

  for (var i in props.currentStyle.skus) {
    if (skusObject.hasOwnProperty(props.currentStyle.skus[i].size)) {
      skusObject[props.currentStyle.skus[i].size] +=
        props.currentStyle.skus[i].quantity;
    } else {
      skusObject[props.currentStyle.skus[i].size] =
        props.currentStyle.skus[i].quantity;
    }
  }

  skus = Object.entries(skusObject);

  var renderSkus = skus.map((sku) => {
    return <SelectSize sku={sku} key={sku[0]} />;
  });

  renderSkus.unshift(<option value='' key={'default'}>Select Size</option>)

  const [quantity, setSize] = useState('');

  var renderQuantity = [];
  var maxQuantity = quantity > 15 ? 15 : quantity

  for (var i = 1; i <= maxQuantity; i++) {
    renderQuantity.push(<option key={i}>{i}</option>);
  }

  return (
    <div>
      <select defaultValue=''
        className="size-selector"
        disabled={renderSkus.length === 1 ? true : false}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        {renderSkus.length === 1 ? <option key={'oos'}>OUT OF STOCK</option> : renderSkus}
      </select>
      <select className="quantity-selector" disabled={quantity === '' ? true : false}>
        {quantity === '' ? <option key={'none'}>-</option> : renderQuantity}
        </select>
        <p></p>
      <button className='add-to-bag'>ADD TO BAG</button>
    </div>
  );
};

export default AddToCart;
