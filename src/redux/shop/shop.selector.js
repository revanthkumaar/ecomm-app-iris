import {createSelector} from 'reselect';

/*
createSelector is a function that takes two arguments:
Selector(s) — if you have multiple selectors they can be inputted as a comma separated (like shown above) or as an array.
A tranformer function that takes the values of the selectors from the first arguments and uses them to select or derive relevant data
*/

const selectShop = state => state.shop;


export const selectCollections = createSelector([selectShop],shop=>shop.collections)


export const selectCollectionPreview = createSelector([selectCollections],
    collections => Object.keys(collections).map(key => collection(key))
    )