import React from 'react'
import { ArrowRight, Crosshair, Menu, X } from "lucide-react";


function CTAPage() {
    return (
        <section id="contact" className="bg-[#123C82]">
            <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
                <h3 className="font-display max-w-md text-3xl font-bold text-white sm:text-4xl">
                    Have a space to redesign, or an idea to build?
                </h3>
                <a
                    href="#"
                    className="group flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#123C82] transition-transform hover:scale-105"
                >
                    Start a project
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </section>
    );
}
export default CTAPage;