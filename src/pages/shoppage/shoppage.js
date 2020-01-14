import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const ShopPage = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProp }) => (
        <CollectionPreview key={id} {...otherCollectionProp} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
