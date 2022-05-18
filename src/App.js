import React,{useState} from 'react'
import List from './List'
import Navbar from './Navbar'
import Login from './Login'
import Signup from './Signup'
import View from './View'
import {Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () =>{
  const[inp ,setInp] = useState('');
  const[des,setDes] = useState('');
  const[birth,setBirth] = useState('');
  const[age,setAge] = useState('');

  const[arr,setArr] = useState([{
    name:"",value:"",birth:"",age:""

  }])
 
  const[cnt,setcnt] = useState(arr.length-1);
  const chnge = (e) =>{
    setInp(e);
  }
  const chnge1 = (e) =>{
    setDes(e);
  }
  const chnge2 = (e) =>{
    setBirth(e);
  }
  const chnge3 = (e) =>{
    setAge(e);
  }

  const sub = (e) =>{
    e.preventDefault();
    if(inp==="" && des==="" && birth==="" && age==="") return alert("fill entries");
    let count=0;

    setArr([...arr,{name:inp,value:des,birth:birth,age:age}]);
     setInp("");
    setDes("");
    setBirth("");
    setAge("");
    for(let i=0; i<=arr.length;i++){
      ++count;
     setcnt(count);
    }
    
  }

  const delete1 = (e) =>{
    let count=0;
    setArr(arr.filter((arr)=>arr.name!==e));
   
    fcnt(arr);
    
  }

  const fcnt = (arr) =>{
    setcnt(arr.length-1);
  }
  return(
   <div className="container-fluid">
    <header className=" bg-dark"><h1 className="text-center text-white">Crud App</h1>
    <button type="button" className="btn btn-primary position-relative" style={{ top: "-35px",
    left: "1000px", borderRadius:"50%"}}>
  Task
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cnt}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
    </header>
    <Navbar/>
    <div className="main container-fluid bg-light">
      <div className='frm mt-5 d-flex justify-content-center'>
        <form className='mt-5 mb-5'>
         <div>
           <label>first name</label>&nbsp;&nbsp;&nbsp;
         <input type="text" placeholder="enter text" value={inp} onChange={(e)=>chnge(e.target.value)}></input>
         </div>  
         <div className="mt-2">
         <label>last name</label>&nbsp;&nbsp;&nbsp;    
          <input type="text" value={des} onChange={(e)=>chnge1(e.target.value)}></input>
          </div> 
          <div className="mt-2">
         <label>birthdate</label>&nbsp;&nbsp;&nbsp;    
          <input type="date" value={birth} onChange={(e)=>chnge2(e.target.value)}></input>
          </div> 
          <div className="mt-2">
         <label>age</label>&nbsp;&nbsp;&nbsp;    
          <input type="text" value={age} onChange={(e)=>chnge3(e.target.value)}></input>
          </div> 
          <div className="mt-2 mx-5" >
          <button className="btn btn-danger" onClick={(e)=>sub(e)} style={{border:"none",outline:"none"}}>add to list</button>
          </div>
        </form>
      </div>
    </div>
    <div className="article row container-fluid mt-5 bg-light" style={{width:"100%",height:"auto"}}>
     
      
      <div className='col-lg-12 col-md-12 col-sm-10 col-10 mx-auto'>
      <div className="cardParent" style={{display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center", flexWrap:"wrap"}}>
        
       { arr.length > 0 &&
         arr.map((element,index)=>{ return(
           <List ele={element} id={index} del={()=>delete1(element.name)}/>
         )})
       }
      
       </div>
       
      </div>
    </div>
    <div className='footer mt-5'>
      <p className="text-center">@copywright</p>
    </div>

    <Routes>
     <Route path="/login" element={<Login/>} exact></Route>
     <Route path="/signup" element={<Signup/>} exact></Route>
     <Route path="/view/:name" element={<View />} exact></Route>
     </Routes>
   </div>

 
  )
}
export default App;