import React from 'react'

function Alert(props) {

  const capitalize = (word)=>{
    let lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  

  return (
    <div style={{height:'50px'}}>
  {    props.alert &&  // Damn importent syntex, here it means props.alert is not null execute below code}
    <div className={`alert alert-${props.alert.Type} alert-dismissible fade show` }role="alert">
    <strong>{capitalize(props.alert.Type)} </strong> {props.alert.msg}
    {/* <button type="button" className="btn-close" onClick={props.showAlert(null,null)}></button> */}
    </div>}
    
    </div>
  )
}

export default Alert

