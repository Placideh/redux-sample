
export const depositAction=(amount)=> {
  return (dispatch)=>{
    dispatch({
      type:"deposit",
      payload:amount
    })
  }
}
