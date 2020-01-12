import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionProp }) => (
          <CollectionPreview key={id} {...otherCollectionProp} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
