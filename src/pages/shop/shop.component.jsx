import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      collections: SHOP_DATA //removing this internal state as we moved data to redux
    };*/
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
      
      </div>
    );
  }
}

export default ShopPage;
