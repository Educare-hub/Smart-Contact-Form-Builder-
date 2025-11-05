import taskManager from '../../assets/images/tasks-manager.jpg';

const About = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between gap-8 h-fit p-4 md:p-8">
                <div className="w-full md:w-1/2 flex items-center">
                    <img
                        src={taskManager}
                        alt="task-manager"
                        className="w-full h-48 md:h-full object-cover rounded-lg shadow-lg"
                    />
                </div>


                <div className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg p-6 md:p-8 mb-6 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-600">
                        About Smart Contact Form Builder
                    </h1>
                    <p className="mb-4 text-gray-700 text-base md:text-lg">
                        Smart Contact Form Builder is a focused tool that lets users design, embed, and manage contact forms quickly and reliably.
                    </p>
                    <p className="mb-2 text-gray-700 text-base md:text-lg">
                        It provides seamless form-to-email integration, a submissions dashboard, and secure backend handling so messages reach you instantly.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg">
                        Whether you’re a freelancer, small business, or developer, Smart Contact Form Builder helps you capture leads and communicate with users effectively.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About
