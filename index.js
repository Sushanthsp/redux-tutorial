const redux = require('redux')
const createStore = redux.createStore

//Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//Action creator
function buyCake()
{
    return {  
        type: BUY_CAKE,
        info : "First redux action"
    }
}
function buyIcecream()
{
    return {
        type: BUY_ICECREAM,
        info : "Second redux action"
    }
}

//Initial State
const initialState = {
    numOfCakes: 10,
    numOfIcecreams : 20
}

//Maages state transition
const reducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1,
        }

        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1,
        }
            
        default : return state
    }
}
    
const store = createStore(reducer)

console.log("Initial State ", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()