export const initState = {
    items: [],
    quantity: 0,
    total: 0
}

export function cart(state = initState, action) {
  switch (action.type) {
        case 'add_cart':
          const priceAddProduct = action.product.harga
          const quantityAddProduct = action.product.qty
          const check_index = state.items.findIndex(item => item.id === action.product.id);
          if (check_index !== -1) {
            state.items[check_index].qty += quantityAddProduct;
          } else {
            state.items.push(action.product)
          }
          state.quantity += quantityAddProduct
          state.total += priceAddProduct * quantityAddProduct
          return {...state}
        case 'remove_cart':
        const indexProduct = state.items.findIndex(item => item.id === action.product.id)
        if(indexProduct !== -1){
          const {qty, harga} = state.items[indexProduct]
          state.items.splice(indexProduct, 1);
          state.quantity -= qty
          state.total -= harga
        }
        console.log(state)
        return {...state};
        
        default:
        return state
    }
}


// createReducer function
// const createReducer = products => {
//     return (state, action) => {
//       const prodList = products;
  
//       switch (action.type) {
//         case "ADD_TO_CART":
//           // determine if valid product
//           if (prodList.find(product => product.sku === action.payload.sku)) {
//             let newState1 = [...state];
  
//             // increment cart item quantity if exists
//             if (newState1.find(item => item.product.sku === action.payload.sku)) {
//               window.console.log(`Increment ${action.payload.sku} fired`);
//               ++newState1.find(item => item.product.sku === action.payload.sku)
//                 .quantity;
//             } else {
//               window.console.log(`Pushed ${action.payload.sku} product onto cart.`);
//               newState1.push({
//                 quantity: 1,
//                 product: prodList.find(
//                   product => product.sku === action.payload.sku
//                 )
//               });
//             }
//             return newState1;
//           }
  
//           // if not valid product return previous state
//           return state;
  
//         case "SUBTRACT_FROM_CART":
//           let newState2 = [...state];
  
//           // determine if product exists
//           if (newState2.find(item => item.product.sku === action.payload.sku)) {
//             // retrieve item
//             const item = state.find(
//               item => item.product.sku === action.payload.sku
//             );
  
//             // if quantity is less than 2 remove
//             if (item.quantity < 2) {
//               window.console.log(`Pop ${action.payload.sku} from cart.`);
//               newState2 = newState2.filter(
//                 cartItem => cartItem.product.sku != item.product.sku
//               );
//             } else {
//               window.console.log(`Decrement ${action.payload.sku}`);
//               --newState2.find(item => item.product.sku === action.payload.sku)
//                 .quantity;
//             }
//             return newState2;
//           }
  
//           // if not valid product return previous state
//           return state;
  
//         case "DELETE_FROM_CART":
//           let newState3 = state.filter(
//             item => item.product.sku != action.payload.sku
//           );
//           return newState3;
  
//         default:
//           return state;
//       }
//     };
//   };
  
  