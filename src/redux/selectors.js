// import { createSelector } from "@reduxjs/toolkit";

export const getShops = (state) => state.delivery.shops;
export const getProducts = (state) => state.delivery.products;
export const getCurShop = (state) => state.delivery.currentShop;
export const getOrder = (state) => state.delivery.order;

// export const getFilter = (state) => state.filter.value;

// export const getFilteredContacts = createSelector(
//     [getContacts, getFilter],

//     (contacts, filter) => {
//         return contacts.filter((contact) =>
//             contact.name.toLowerCase().includes(filter.toLowerCase())
//         );
//     }
// );

export const getIsloading = (state) => state.delivery.isLoading;
