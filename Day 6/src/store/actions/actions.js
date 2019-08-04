export const increment=()=>{
    return{
        type:'INCREMENT'
    };
};

export const decrement=()=>{
    return{
        type:'DECREMENT'
    };
};

export const add=(val)=>{
    return{
        type:'ADD',
        value: val
    };
};

export const subtract=(val)=>{
    return{
        type:'SUBTRACT',
        value: val
    };
};

export const saveResult=(result)=>{
    return{
        type:'STORE',
        val:result
    };
    
}

export const store=(result)=>{
    return function(dispatch){
        setTimeout(()=>{
            dispatch(saveResult(result))
        },3000);
    }
    
};

export const deleteId=(id)=>{
    return{
        type:'DELETE',
        value: id
    };
};


