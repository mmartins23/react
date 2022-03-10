import React, { useEffect } from 'react'
import { useState } from 'react';
import './Todo.css'
import List from './components/List'
import TodoForm from './components/TodoForm'
import Item from './components/Item'
import Modal from './components/Modal';

const SAVED_ITEMS = 'savedItems'

const Todo = () => {
    const [showModal, setShowModal] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems) {
            setItems(savedItems);
        }

    },[])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {

        let item = new Item(text);
        setItems([...items, item])
        onHideModal();
    }

    function onItemDeleted(item) {
        // For each item inside items, only return it.id that are different than item.id
        let filteredItems = items.filter(it => it.id !== item.id);

        setItems(filteredItems);
        console.log(filteredItems);
    }

    function onDone(item) {

        let updateItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })

        setItems(updateItems);
    }

    function onHideModal(e) {
        setShowModal(false);
    }

    return (
        <div className='container'>
            <header className='header'><h1>Todo</h1><button onClick={() => setShowModal(true)} className='addButton'>+</button></header>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />

            <Modal show={showModal} onHideModal={onHideModal}>
            <TodoForm onAddItem={onAddItem} />
            </Modal>

        </div>)
}

export default Todo;