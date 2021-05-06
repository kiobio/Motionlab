import { useEffect, useState } from "react";
import FormComponent from './FormComponent'





function FetchComponent(){
    const [values, setValues] = useState({
        name:"",
        email:""
    })
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')

    const[firstResponse, setFirstResponse] = useState('')
    const[secondResponse, setSecondResponse] = useState('')
    const apiKey = "8743f41d-98c6-4578-9d7b-611af96a16ba"


    async function fetchApi(){
        const response = await fetch(`https://ralph.motionlab.io/api/interviewInfo?apiKey=${apiKey}`,{
            method: 'GET',
            headers:{
                
                'Accept': 'application/json',
                'Content-type':'aplication/json',
                'Authorziation' : 'Bearer ' + apiKey
            }
            
        })
        const data = await response.json()
        console.log(data)
        setFirstResponse(data)

    }

    async function postApi(){
       /*setValues({
            name:name,
            email:email
        })
    console.log(values)*/ 
        if (firstResponse && name){

            setValues({
                name:name,
                email:email
            })
        
        const response = await fetch('https://ralph.motionlab.io/api/interviewTest',{
            method:'POST',
            body: JSON.stringify(values),
            headers:{
                'Accept' : 'application/json',
                'Content-type' : 'application/json',
                'Authorization' : 'Bearer' + firstResponse.authorization.access_token  
            }
        })
        const data = await response.json()
        setSecondResponse(data)
        

    }
    }
    
    useEffect(()=>{
        fetchApi()

    },[])

    return(
        <div>
            
            {firstResponse ?
            <div> 
            <h2>{firstResponse.nextStepText}</h2>
            <FormComponent
            postApi={postApi}
            email={email}
            setName={setName}
            setEmail={setEmail}
           
            />

            
            <h1>{secondResponse.conformationText}</h1>
           
            </div>
            :
            <div>
                <p>Access not allowed</p>
            </div>}
        </div>
    )
}
export default FetchComponent