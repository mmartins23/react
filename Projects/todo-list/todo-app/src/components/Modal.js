import Card from './Card'

const Modal = (props) => {

    function hideModal(e) {
        let target = e.target;
        if (target.id === 'modal') {
            props.onHideModal()
        }
    }

        return ( 
        // If show is true return modal, if false return modal and hideModal
       <div id='modal' onClick={hideModal} className={props.show ? 'modal': 'modal hideModal'}>
       <Card className='cardModal'>
           {props.children}
       </Card>

       </div>
     );
}
 
export default Modal;