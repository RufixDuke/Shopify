const cart = [];

const handleCart = (state = cart, action) => {
    // const product = action.payload;
    switch (action.type) {
        case "ADDITEM": return [
            ...state,
            action.payload
        ]
            break;

        case "DELITEM":
            return state = state.filter((x) => {
                return x.id !== action.payload.id
            })
            break;

        case "ADD":
            const exist = state.find((x) => x.id === action.payload.id);
            if (exist) {
                // Increase the Quantity
                return state.map((x) =>
                    x.id === action.payload.id ? { ...x, qty: Number(x.price) + 1 } : x
                );
                
            } else {
                // const product = action.payload;
                return [
                    ...state,
                    {
                        ...action.payload,
                        qty: 1,
                    }
                ]
            }
            

        case "MINUS":
            const exist1 = state.find((x) => x.id === action.payload.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === action.payload.id ? { ...x, qty: x - 1 } : x
                );
            }
            


        default: return state;
        // break;
    }
}

export default handleCart;