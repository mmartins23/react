import Message from "../layout/Message";
import { useLocation } from "react-router-dom";

const NewProject = () => {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }
    return ( 
        <div>
            <h1>My Projects</h1>
            <Message msg='some message'/ >
            {message && <Message type='success' msg={message}/>}
        </div>
     );
}
 
export default NewProject;