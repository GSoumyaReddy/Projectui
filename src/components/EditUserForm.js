import React , {useContext, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function EditUserForm(props){
     const [user,setUser] =useState(props.currentUser)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setUser({...user,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updateUser(user.userLoginId,user);
    }


   

     return (

      <Card style={{ backgroundColor:"lightGrey",width:'30rem'}}>
    <ListGroup variant="flush">
        <form onSubmit={submitHandler}>

         <Card style={{ width: '30rem' }}>
      
      <Card.Body>
        <Card.Title>Edit User form</Card.Title>
         
<label>userLoginId</label>
<h1>{props.currentUser.userLoginId}</h1>

<label>userName</label>
<input 
type='text'
name='userName'
value={user.userName}
onChange={handleInputChange}/>

<label>password</label>
<input 
type='text'
name='password'
value={user.password}
onChange={handleInputChange}/>

<label>firstName</label>
<input 
type='text'
name='firstName'
value={user.firstName}
onChange={handleInputChange}/>

<label>lastName</label>
<input 
type='text'
name='lastName'
value={user.lastName}
onChange={handleInputChange}/>

<label>contact</label>
<input 
type='number'
name='contact'
value={user.contact}
onChange={handleInputChange}/>

<label>email</label>
<input 
type='text'
name='email'
value={user.email}
onChange={handleInputChange}/>

<button>Update User</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button>
</Card.Body>
</Card>

</form>
</ListGroup>
</Card>


   );




}