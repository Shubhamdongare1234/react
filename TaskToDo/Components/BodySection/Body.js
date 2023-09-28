import { useEffect, useState } from 'react';
import classes from './Body.module.css';
import Datalist from './DataList/Datalist';
const Body=(props)=>{
  
  
   const data=props.data;
   const [ActiveList,setActiveList]=useState(null);
   if(props.Active){
    setActiveList(true);
   }

    const [dataList,setdataList]=useState([]);
    useEffect(()=>{
      const list=JSON.parse(localStorage.getItem("DataList"));
      
     setdataList(list);
    

    },[ActiveList]);
    console.log(dataList);
    
      
     

    const checkboxhandler=(event)=>{
      if(event.target.checked){
        let stat=event.target.value;
        console.log(stat);
        const activeList=[];
        dataList.map((item)=>{
          if(stat===item.DataValue){
           // item.Status="Active";
           let data={
            Status:"Active",
            DataValue:item.DataValue
           }
           activeList.push(data);

          }else{
            activeList.push(item);
          }

        })
        console.log(activeList);
        localStorage.setItem("DataList",JSON.stringify(activeList));
      }

    }




    return(
    
        <div className={classes.body}>
          {
            !ActiveList && 
          dataList.map((item)=>(
            <label key={item.DataValue}>  <input type='checkbox' value={item.DataValue}  onChange={checkboxhandler} />{item.DataValue}</label>
           
          ))}
          {/* <Datalist data={data} CheckBoxHand={CheckBoxHandler}></Datalist> */}
            
{
  ActiveList && 
    
      dataList.map((item)=>{
        if(item.Status==="Active"){
          (
            <label key={item.DataValue}>  <input type='checkbox' value={item.DataValue}  onChange={checkboxhandler} />{item.DataValue}</label>
          )
        }
      })

    
  
}
        </div>
    );
};
export default Body;