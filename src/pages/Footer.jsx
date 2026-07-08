import React from 'react'
// import { services } from './Services'

function Footer() {
    return (
        <footer className="bg-[#0B1E3D] text-[#B9CCDC]">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-16 sm:grid-cols-4">
                <div className="col-span-2 sm:col-span-1">
                    <div className="font-display text-lg font-bold text-white">
                        Aiesthrox
                    </div>
                    <p className="mt-3 font-mono text-xs leading-relaxed text-[#7FA0B8]">
                        Design &amp; code, in-house.
                    </p>
                </div>
                <div>
                    <p className="font-mono text-xs font-semibold tracking-widest text-white">STUDIO</p>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                        <li><a href="#work" className="hover:text-white">Work</a></li>
                        <li><a href="#" className="hover:text-white">Process</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                    </ul>
                </div>
                <div>
                    <p className="font-mono text-xs font-semibold tracking-widest text-white">CONTACT</p>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="mailto:contact@aeisthrox.in" className="hover:text-white">contact@aeisthrox.in</a></li>
                        <li className="hover:text-white" onClick={() => window.open(
                            `https://wa.me/918220676875?text=${encodeURIComponent("Hi Aeisthrox Team, I would like to get in touch with you regarding a project.")}`,
                            "_blank"
                        )}>+91 82206 76875</li>
                        <li><a href="tel:+918220676875" className="hover:text-white">Aeisthrox :<br></br>5/1,Sharif nagar 7th street, Vadakarai pin 627 812</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10 px-6 py-6 text-center font-mono text-[11px] text-[#5C7188]">
                © {new Date().getFullYear()} Aeisthrox Studio. All rights reserved.
                <br />

                <span className="text-white">
                    Designed and developed by{" "}
                    <span className="inline-flex items-center gap-1">
                        <a
                            href="https://www.instagram.com/therasak.h/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            <span className="text-red-500">❤︎</span> Rasak
                        </a>

                        <a
                            href="https://www.instagram.com/therasak.h/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Rasak on Instagram"
                            className="text-pink-500 hover:text-pink-400 transition"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="13"
                                height="13"
                                fill="currentColor"
                            >
                                <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.9 1a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                            </svg>
                        </a>
                    </span>
                    .
                </span>
            </div>
        </footer>
    )
}

export default Footer