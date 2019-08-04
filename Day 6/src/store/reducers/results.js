

const initialState={
    
    results:[]
}

const reducer= (state=initialState,action) =>{
    switch(action.type){
        
        case 'STORE':
            return{
                ...state,
                results:state.results.concat({value:action.val, id:new Date()})
            }
        case 'DELETE':
           // const updateArray=[...state.results]
            //updateArray.splice(action.value,1)
           // console.log(action.value);
           // console.log(updateArray);
           const updateArray=state.results.filter(result=>result.id!==action.value)
            return{
                ...state,
                results:updateArray
            }                   

    }
  
    return state;

};

export default reducer;