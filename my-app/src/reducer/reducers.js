
/*export const nameReducer = (state='',action )=>{
		if(action.type ==='CHANGE_NAME'){
			return{
				...state,
				name : action.payload
			}
			
		}
	return state;
}
export const arrayReducer = (state = [], action)=>{
	if(action.type==='CHANGE_NAME'){
		return{
			...state,
			name : action.payload
		}
	}
	return state;
	
}
*/

export const nameReducer = (state='',action )=>{
		if(action.type ==='CHANGE_NAME'){
			return action.payload
			
		}
	return state;
}

export const arrayReducer = (state = [], action)=>{
	if(action.type === 'ADD_WISHES'){
		return [...state, action.payload]
	}
	return state;
	
}

export const couterReducer = (state = 1,action) => {
		switch(action.type){
			case 'incrementNum':
			return state + 1;
			case 'decrementNum':
			return state - 1;
			default: return state
		}
}
