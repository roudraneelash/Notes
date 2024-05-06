useReducer()=> use to handle multiple complex state at component Level.

// syntax

const [state,dispatch]= useReducer(reducerFunction,initialState);

const initilaState={
count:0;
}

const reducerFunction=(state,action)=>{
switch(action.type)
{
case 'increment':
return {...state,count:state.count+1};
case 'decrement':
return {...state,count:state.count-1};
case 'custom':
return {...state,count:state.count+action.payload};
default:
throw new Error("Invalid action type")
}
}

-- to access state, {state.count}
-- to dispatch action, dispatch({type:'increment', payload:5})
