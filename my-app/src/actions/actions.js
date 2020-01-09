/*
export const anotherAction = (name) => {
	return {
	  type: 'CHANGE_NAME',
	  payload: name
	 }
};

*/
/*
export const anotherAction = () => {
	return (dispatch)=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json()).then(data => {
				dispatch({type: 'CHANGE_NAME',payload:data[0].name})
		
		})
	 }
};*/

export const anotherAction = ()=>{
		return async (dispatch) =>{
			const awaits = await fetch('https://jsonplaceholder.typicode.com/users');
			const awaitData = await awaits.json();
			dispatch({type:'CHANGE_NAME', payload:awaitData[0].name})
		
		}
}
export const  addWishes = () => {
		return{
			
			type:"ADD_WISHES",
			payload:'Ashok  kumar'
		}
	
}
export const couterIncrement = () => {
		return {
			type:'incrementNum'
			}
	
}
export const couterDecrement = () =>{
		return {
			type: 'decrementNum'
		}
	
}
