import React,{useState} from 'react'
import './Signin.css'
import img from '../assests/img/img.jpg'
import postData from '../cred.json'
import {useHistory} from 'react-router-dom'

function Signin() {


    const [Uname, setUname] = useState('')
    const [Pname, setPname] = useState('')
    const [Cred,setCred] = useState([{uname : '',pname: ''}])
    //console.log(postData.password);
    //console.log(Uname);
    //console.log(Pname);
    console.log(Cred);
    let history = useHistory();
    const handlechange = (event) => {
        event.preventDefault(); 
        setCred({uname: Uname,pname : Pname})
        if(postData.username === Uname && postData.password === Pname){
            console.log('sucessfull')
            alert ("Successfully loggedinn....");  
            history.push('/Home')
        }
        else{
            console.log('fail');
            alert ("Wrong username or password");  
        }
    }



    return (
        <div className="bodyyy">
<div class="container" id="container">
	<div class="form-container sign-up-container">
		
	</div>
	<div class="form-container sign-in-container">
		<form onSubmit={handlechange}>
			<h1>Sign in</h1>
			
			<span>or use your account</span>
			<input type="email" onChange={(e)=> setUname(e.target.value)} placeholder="Email" />
			<input type="password" onChange={(i)=> setPname(i.target.value)} placeholder="Password" />
            <input className="check" type="checkbox"/>
            
			<button className=''>Sign In</button>
            <div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i>
                </a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
            

				
			</div>
			<div class="overlay-panel overlay-right">
				
            <img className = "image_section"src={img}
             alt="Simply Easy Learning" width="350" height="350"/>
            




			</div>
		</div>
	</div>
</div>
</div>


    )
}

export default Signin
