
import classes from './Footer.module.css';
const Footer=(props)=>{
    
    let Search=props.SearchValue.trim();
    const AddTask=()=>{
        
        let Data=[];
       Data=JSON.parse(localStorage.getItem("DataList"));
       
        if(Search.length>0){
            
             
            let item={
                Status:"",
                DataValue:Search
            }
            Data.push(item);
            localStorage.setItem("DataList",JSON.stringify(Data));
        
    }
    console.log(Data);
     
    // const ActiveTask=()=>{
    //     let data=localStorage.getItem("DataList");
        

    // }
        
        // localStorage.setItem("Alltasks",JSON.stringify(CompletedTask));
        

    }
    return(
        <div className={classes.footer}>
            <div>
                <button onClick={AddTask}>Add</button>
                <button  >Search</button>
            </div>
            <div>
                <button onClick={props.AllTask}>All</button>
                <button onClick={props.ActiveTask}>Active</button>
                <button onClick={props.CompletedTask}>Completed</button>
            </div>

        </div>
    );
};
export default Footer;