import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModale.module.css";
import ReactDOM from "react-dom";


const Backdrop=(props)=>{
    return (<div className={classes.backdrop} onClick={props.onConfirm}/>);
}
const ModalOverlay=(props)=>{
    <Card className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
    <Button onClick={props.onConfirm}>okey</Button>
    </footer>
</Card>

}
const ErrorModal=(props)=>{
    return(
        <>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root"))};
        {ReactDOM.createPortal(<ModalOverlay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}></ModalOverlay>,
        document.getElementById("overlay-root"))};
        
        
        </>
            
           
        
    );
};
export default ErrorModal;