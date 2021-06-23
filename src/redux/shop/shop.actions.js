//import configured action types
import ShopActionTypes from './shop.types'

//action creators
export const updateCollections = (collectionMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})