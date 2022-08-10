import React, { createContext, useReducer } from "react";
import productData from "../ProductData/data.json"

const initialState = {
    Products: productData,
    showSidebar: false
    // CartItems: [],
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "ADDTOCART":
            // var alreadyExistObj = state.Products.find(item => item?.id == payload.productID)
            // console.log(alreadyExistObj, "alreadyExistObj")

            // console.log({
            //     ...state
            // });
            return {
                ...state,
                Products: state.Products.map((item, idx) => {
                    if (payload.productID === item.id) {
                        item.count = item.count + 1
                    }
                    return item
                })
                // Products: [...state.Products, { ...alreadyExistObj, count: alreadyExistObj.count + 1 }]
            }
        case "REMOVETOCART":
            return {
                ...state,
                Products: state.Products.map((item, idx) => {
                    if (payload.productID === item.id) {
                        item.count = 0
                    }
                    return item
                })
            }
        case "MINUSQUANTITY":
            return {
                ...state,
                Products: state.Products.map((item, idx) => {
                    if (payload.productID === item.id) {
                        item.count = item.count - 1;
                    }
                    return item
                })
            }
        case "TOGGLESIDEBAR":
            return {
                ...state,
                showSidebar: !state.showSidebar
            }
        default:
            return state
    }
}

export const GlobalContext = createContext(initialState);

export const ContentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state, "state")
    function addToCart(productID) {
        dispatch({
            type: "ADDTOCART",
            payload: productID
        })
    }

    function removeFromCart(productID) {
        dispatch({
            type: "REMOVETOCART",
            payload: productID
        })
    }

    function minusQuantity(productID) {
        dispatch({
            type: "MINUSQUANTITY",
            payload: productID
        })
    }

    function toggleSidebar() {
        dispatch({
            type: "TOGGLESIDEBAR",
        })
    }

    return (
        <GlobalContext.Provider value={{
            Products: state.Products,
            showSidebar: state.showSidebar,
            addToCart,
            removeFromCart,
            minusQuantity,
            toggleSidebar,

        }}>
            {children}
        </GlobalContext.Provider >
    )
} 