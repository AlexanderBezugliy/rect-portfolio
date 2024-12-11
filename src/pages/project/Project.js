import { useParams } from 'react-router-dom';
import BtnGitHub from '../../components/btnGitHub/BtnGitHub';
import { projectsList } from '../../dataProjects/projectsList';



const Project = () => {
    const {id} = useParams();
    const project = projectsList[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                        <div className="project-details__desc">
                            <p>{project.skill}</p>
                        </div>

                    <BtnGitHub link="https://github.com" />

                </div>
            </div>
        </main>
    );
}

export default Project;