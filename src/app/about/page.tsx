import React from "react";

export default function About() {
    return (
        <div className="min-h-screen px-6 sm:px-12 md:px-20">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                </header>
                <p className="text-gray-300 mb-8">
                    I have a background in web development, with experience in both frontend
                    and backend development. I've worked with various technologies such as HTML, 
                    CSS, JavaScript, PHP and popular frameworks like Node.js, Laravel. In addition to
                    web development, I have experience in DevOps practices, such as CI/CD, Docker, 
                    and cloud services like AWS and Google Cloud.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                    <div className="border-l-3 border-gray-300 mb-4">
                        <h3 className="text-xl font-semibold">Backend Development Intern at Jotform</h3>
                        <p className="text-gray-500">August 2023 - September 2023 ・ Full-time ・ Internship</p>
                        <ul className="list-disc text-gray-300 ml-5">
                            <li>Developed a REST API for the campaigns admin panel.</li>
                            <li>Implemented efficient and secure endpoints, ensuring data integrity and scalability.</li>
                            <li>Used skills: PHP, MySQL, Redis, Testing, RDS(remote development server), RestAPI.</li>
                        </ul>
                    </div>
                    <div className="border-l-3 border-gray-300 mb-4">
                        <h3 className="text-xl font-semibold">Backend Development Intern at Teknasyon</h3>
                        <p className="text-gray-500">August 2022 - September 2022 ・ Full-time ・ Internship</p>
                        <ul className="list-disc text-gray-300 ml-5">
                            <li>Built a RestAPI, MVC structure and learned about the design patterns.</li>
                            <li>Used skills: PHP, MySQL, GitHub, Docker, RestAPIs.</li>
                        </ul>
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                    <div className="border-l-3 border-gray-300 mb-4">
                       <h3 className="text-xl font-semibold">Programming Languages</h3>
                       <p className="text-gray-300">PHP, Javascript, Python, Java</p>
                    </div>
                    <div className="border-l-3 border-gray-300 mb-4">
                       <h3 className="text-xl font-semibold">Backend Frameworks & Runtimes</h3>
                       <p className="text-gray-300">Laravel, Node.js, Express.js, Spring Boot</p>
                    </div>
                    <div className="border-l-3 border-gray-300 mb-4">
                       <h3 className="text-xl font-semibold">Frontend Frameworks & Runtimes</h3>
                       <p className="text-gray-300">React.js, Next.js, Tailwind CSS, Bootstrap</p>
                    </div>
                    <div className="border-l-3 border-gray-300 mb-4">
                       <h3 className="text-xl font-semibold">Databases</h3>
                       <p className="text-gray-300">MySQL, PostgreSQL, MongoDB, Redis</p>
                    </div>
                    <div className="border-l-3 border-gray-300 mb-4">
                       <h3 className="text-xl font-semibold">Other</h3>
                       <p className="text-gray-300">Git, Docker, Swagger, Postman, Google Cloud Run, Amazon EC2, Linux, Bash</p>
                    </div>

                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    <div className="border-l-3 border-gray-300 mb-4">
                        <h3 className="text-xl font-semibold">Bachelor's Degree in Computer Engineering (%100 English)</h3>
                        <p className="text-gray-300">Bandirma Onyedi Eylul University</p>
                        <p className="text-gray-500">September 2020 - July 2024 ・ Balikesir, Turkey</p>
                    </div>
                    <div className="border-l-3 border-gray-300 mb-4">
                        <h3 className="text-xl font-semibold">Bachelor's Degree in Business Management
                        </h3>
                        <p className="text-gray-200">Istanbul University</p>
                        <p className="text-gray-500">September 2020 - Present ・ Istanbul, Turkey</p>
                        <ul className="list-disc text-gray-300 ml-5">
                            <li>As a second university. (External Degree)</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}