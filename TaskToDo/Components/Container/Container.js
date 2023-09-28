import { useState } from 'react';
import Body from '../BodySection/Body';
import Footer from '../FooterSection/Footer';
import Header from '../Header/Header';
import classes from './Container.module.css';
const Container=()=>{
    const [Task,setTask]=useState([]);
    const [Search,setSarch]=useState('');
    const [ActiveList,setActiveList]=useState(null);

    // const Alltasks=["Java","Javascript","Node","React"];
    // const ActivTask=["Javscript","Node"];
    // const CompletedTask=["Java","React"];
    const ActiveTaskHandler=()=>{
        setActiveList(true);

    }


   
// const CompletedTaskHandler=()=>{
//     const Completedtask=JSON.parse(localStorage.getItem("CompletedTask"));

//     setTask(Completedtask)
// }
const SearchHandler=(event)=>{

    let data=event;
    // console.log(data);
    setSarch(data);

}


    return(
        <div className={classes.container}>
            <Header SearchHand={SearchHandler} ></Header>
            <Body data={Task} Active={ActiveList}></Body>
            <Footer   ActiveTask={ActiveTaskHandler}
           SearchValue={Search}></Footer>


        </div>
    );
};
export default Container;