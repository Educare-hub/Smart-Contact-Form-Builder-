import taskManager from "../../assets/images/tasks-manager.png"
import Navbar from "../nav/Navbar"
export const About = () => {
    return (
        <div>
            <Navbar />

            <div>
                <img src={taskManager} alt="task-manager" />
            </div>

            <div>
                <h1>About TodoPro</h1>
                <p> TodoPro is a powerful task management service designed to enhance team productivity and streamline project workflows.</p>
                <p> With TodoPro, you can easily create, assign, and track tasks, ensuring that your team stays organized and focused on what matters most.</p>
                <p> Whether you're managing a small project or a large team, TodoPro provides the tools you need to succeed. </p>

            </div>

        </div >
    )
}
