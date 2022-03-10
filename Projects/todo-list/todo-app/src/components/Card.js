const Card = (props) => {
    return (  
        // If I have props.className and card display both, otherwise display just card
        <div className={props.className? `${props.className} card`: 'card'}>
            {props.children}
        </div>
    );
}
 
export default Card;