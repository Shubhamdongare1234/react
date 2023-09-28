import classes from './Datalist.module.css';
const Datalist=(props)=>{
    let data=props.data;
    console.log(data);
    
    return(
        <div className={classes.section}>
            {data.map((item)=>(
                <label>
                <input type='checkbox' value={item} onChange={props.CheckBoxHand} />
                {item}
                </label>

                ))}
               
            
            

        </div>
    );
};
export default Datalist;