import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
 

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
   
     this.state = {
       loading:false
     }
  }

  render() {
 
    return (
      <div className='shop-page'>
      <CollectionsOverview/>
      </div>
    );
  }
}

export default ShopPage;
