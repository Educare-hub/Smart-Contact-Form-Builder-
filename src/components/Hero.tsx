// import { NavLink } from "react-router"
import homeIMG from "../assets/images/home-image.png"

export const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between gap-8 h-fit p-4 md:p-8">
                <div className="w-full md:w-1/2 border-2 border-gray-300 rounded-lg text-gray-600 p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-600 ">Welcome to Smart Contact Form Builder!</h1>
                    <p className="mb-4 text-gray-700 text-base md:text-lg">
                        Simplify communication with Smart Contact Form Builder — a tool designed to help you create, customize, and manage contact forms effortlessly.
                    </p>
                    <p className="mb-4 text-gray-700 text-base md:text-lg">
                        Connect forms directly to your email, track submissions in your dashboard, and enjoy seamless backend integration with Express and MS SQL.
                    </p>
                    <p className="mb-4 text-gray-700 text-base md:text-lg">
                        Build smarter forms today — reliable, responsive, and ready for any website!
                    </p>
                </div>

                <div className="w-full md:w-1/2 items-center">
                    <img src={homeIMG} alt="home-image" />
                </div>
                {/* <NavLink to="https://www.google.com/">Vist Google</NavLink>
                <a href="https://www.google.com/">Vist Google</a> */}
            </div>
        </>
    )
}
