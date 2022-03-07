import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom';

const NewProject = () => {

    const history = useNavigate()

    const createPost = (project) => {
        
        // initialize cost and service
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/categories", {
            method: 'POST',
            headers:  {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
        console.log(data)
        // redirect
        history('/projects' , {message: 'Project created with success'})
        })  
        .catch(err => console.log(err))
    }
     

    return ( 
        <div className={styles.newproject_container}>
        <h1>Create your project</h1>
        <p>Create your project, so after you can add other services</p>
        <ProjectForm handleSubmit={createPost} btnText="Create Project" />

        </div>
     );
}
 
export default NewProject;