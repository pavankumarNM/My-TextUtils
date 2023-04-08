import React from 'react'

export default function Alerts(props) {

    


  return (
    <div>
        {props.alert}
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  )
}
