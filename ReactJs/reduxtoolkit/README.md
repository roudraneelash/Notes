Redux toolkit - to handle state management at application level ,

-- store
-- configure store
-- createSlice
-- useSelector
-- useDispatch

dispatch({type: 'todo/toggleState', payload: 1})
dispatch({type: 'todo/addItem', payload: 'hello'})

-- share store using provider

// creating slice

const counterSlice= createSlice({
name:'counter',
initialState:{
count:0
},
reducers:{
increment:(state,action)=>{

},decrement:(state,action)=>{

},custom:(state,action)=>{

}
}
});

const store=configureStore({
"counter":counterSlice.reducer
})
