const initialState = {
    min: 1,
    max: 10
}
// biome-ignore lint: <explanation>
export default function (state = initialState, action) {
    switch(action.type){
        case 'NUM_MIN_ALTERADO':
            return {
                ...state,
                min: action.payload
            }
        case 'NUM_MAX_ALTERADO':
            return {
                ...state,
                max: action.payload
            }
            default: return state
    }
    
}