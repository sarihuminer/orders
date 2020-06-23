import React,{Component} from 'react'
import Input  from'../Input'


class register extends Component{

    state={
        form:{
            firstName:{
                elementType:'input',
                label:'שם פרטי',
                value:"",
                valid:false,
                touched:false,
            },
            lastName:{
                elementType:'input',
                label:'שם משפחה',
                value:"",
                valid:false,
                touched:false,
            },
            city:{
                elementType:'input',
                label:'עיר',
                value:"",
                valid:false,
                touched:false,
            },
            email:{
                elementType:'input',
                label:'כתובת מייל',
                value:"",
                valid:false,
                touched:false,
            },
            phone:{
                elementType:'input',
                label:'מספר טלפון',
                value:"",
                valid:false,
                touched:false,
            },
            userName:{
                elementType:'input',
                label:'שם משתמש',
                value:"",
                valid:false,
                touched:false,
            },
            password:{
                elementType:'input',
                label:'סיסמה',
                value:"",
                valid:false,
                touched:false,
            }
        },
        valid:false
    }
    inputChange=(event,id)=>{
        const newform={...this.state.form};
        const formChange=newform[id];
        formChange.value=event.target.value;
        formChange.value.length > 5 ? formChange.valid = true : formChange.valid = false;
        newform[id]=formChange;
this.setState({form:newform});
}
clicked=(event)=>{
    //what is it?//
    event.preventDefault();
    const arr={};
    for(let key in this.state.form)
    arr[key]=this.state.form[key].value
    console.log(arr);
}
    render (){
        const arr =[];
        for(let x in this.state.form){
            arr.push({id:x,config:this.state.form[x]})
        }
        return <form onSubmit={this.clicked}>
    {
        arr.map(x=><Input
        key={x.id}
        placeholder={x.id}
        val={x.config.value}
        label={x.config.label}
        cls={x.config.valid?"Valid":"NotValid"}
        changed={(event)=>this.inputChange(event,x.id)} />)}
       
        <button type="submit">save</button>
     
    
        </form>
    }
    
        
}export default register;
