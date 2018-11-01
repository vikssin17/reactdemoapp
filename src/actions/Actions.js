
export const Users = (userData) => dispatch => {
 dispatch({
  type: 'LOAD_USERS',
  payload: userData 
 })
}
