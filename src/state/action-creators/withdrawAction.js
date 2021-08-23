
export const withdrawAction=(amount)=> {
  return (dispatch)=>{
    dispatch({
      type:"withdraw",
      payload:amount
    })
  }
}
