
export default (state = [], action) => {
	console.log(action);
 switch (action.type) {
   case 'LOAD_USERS' :
   {
   	//console.log("action payload" , action.payload);
   	return state.concat(action.payload)
   }
   
  default:
   return state
 }
}