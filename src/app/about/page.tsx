import React from "react";

export default function About() {
    return (
        <div className="min-h-screen px-6 sm:px-12 md:px-20">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold">About Me</h1>
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione sapiente blanditiis atque eligendi officiis eaque, officia doloremque minima. Doloribus numquam repudiandae velit soluta odio quos doloremque optio dolorem nobis?</p>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                </section>
            </div>
        </div>
    );
}