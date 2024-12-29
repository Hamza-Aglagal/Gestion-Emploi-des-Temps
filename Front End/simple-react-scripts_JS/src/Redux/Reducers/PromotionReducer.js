

const initialState = {
    AllPromotion: [],
   
};

const PromotionReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {

        case ALL_PROMO: {
            return { ...state, AllPromotion: payload };
        }
      

        default:
            return state;
    }
};

export default PromotionReducer;