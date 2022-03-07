import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import { useEffect, useState } from 'react'
import styles from './ProjectForm.module.css'


const ProjectForm = ({ handleSubmit, btnText, projectData }) => {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState([projectData || {}]);


    useEffect(() => {
        // request to API
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    const handleCategory = (e) => {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }


    return (

        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Project Name"
                name="name"
                placeholder="Insert the name of the project"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
                 />

            <Input
                type="number"
                text="Project Name"
                name="budget"
                placeholder="Insert total budget"
                handleOnChange={handleChange} 
                value={project.budget ? project.budget : ''}
                />

            <Select
                name="category_id"
                text="Select a category"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''} />


            <SubmitButton text={btnText} />
        </form>

    );
}

export default ProjectForm;