import React from 'react';
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component';
import {connect} from 'react-redux'
import selectCollectionsForPreview from '../../redux/shop/shop.selectors'
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionOverview = ({collections}) => {
    <CollectionsOverviewContainer>
     {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}

    </CollectionsOverviewContainer>
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);

//wrapped to higher order comp and just using the state not dispatch