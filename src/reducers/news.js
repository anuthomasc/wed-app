
const initialPostState = { 
    newsResult:{}
};

export default function news(state = initialPostState, action) {
    switch (action.type) {
        case 'NEWS_RESULT':
        console.log(Array.isArray(action.payload))
            return { ...state, newsResult: action.payload };
        default:
            return state;
    }
}
