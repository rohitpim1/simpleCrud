import React from 'react'
import {Link} from 'react-router-dom'
const List = (props) =>{
  const {name , value , birth ,age,id } = props.ele;
 
    return(
     
      <div className="card" style={{width: "18rem",marginRight:"20px",marginTop:"20px"}}>
     <div className="card-body">
        <h5 className="card-title">{name} {value}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{birth}</h6>
        <p className="card-text">{age}</p>
       <button className="btn btn-danger" onClick={props.del}>delete</button>
       <Link to={`/view/${name}`}>View</Link>
      </div> 
    </div>

    
    )
}

export default List;