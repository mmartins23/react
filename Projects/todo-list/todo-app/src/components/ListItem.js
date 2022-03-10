import './List.css';
import Card from './Card';



function DoneImg(props) {
    if (props.done) {
        return (<img alt="done" src='./assets/done.png'></img>)
    } else {
        return (<img alt="undone" src='./assets/undone.png'></img>)
    }
}

function ListItem(props) {
    return (<li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}> <DoneImg done={props.item.done} /></button>
                    <button onClick={() => { props.onItemDeleted(props.item) }}><img src='./assets/bin.png' alt="delete"></img></button>
                </div>
            </Card>
        </li>)
}

export default ListItem;