import Card from "../UI/Card";
import classes from "./UserList.module.css";
function UserList(props)
{
    // // const users=props.users.map((user)=>(
         
    // ))
    // // const 
    return(
        <Card className={classes.users}>
            <ul>
                {props.users.map((user)=>(
                    <li key={user.id}>
                        {user.name} ({user.age}) year old
                    </li>

                ))}
            </ul>

        </Card>
    )
}
export default UserList;