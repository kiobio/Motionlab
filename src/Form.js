



function Form(props){

    return(
        <div>
            <form method="post" onSubmit={(e) =>{
                e.preventDefault();
                props.postApi();
            }}>
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={props.email}
                onChange={(e) =>{ props.setEmail(e.target.value)
                console.log(props.email)}}/>
                <br/>

                <label htmlFor="">Name</label>
                <input type="name" name="name" value={props.name}
                onChange={(e)=> props.setName(e.target.value)}/>
                <br/>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}
export default Form