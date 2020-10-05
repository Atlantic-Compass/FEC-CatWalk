import React from 'react';
import ImageGalleryContainer from '../../containers/Overview/ImageGalleryContainer.js';
import StyleSelectorContainer from '../../containers/Overview/StyleSelectorContainer.js';
import ProductInformationContainer from '../../containers/Overview/ProductInformationContainer.js';
import AddToCartContainer from '../../containers/Overview/AddToCartContainer.js';

var Overview = () => {
  return (
    <div>
      <h1>Overview Component</h1>
      <div className="overview-main-box">
        <ImageGalleryContainer />
        <div className="overview-side-box">
          <ProductInformationContainer />
          <StyleSelectorContainer />
          <AddToCartContainer />
        </div>
      </div>
    </div>
  );
};

Overview.propTypes = {};

export default Overview;
