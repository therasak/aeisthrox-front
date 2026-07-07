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
                        <li><a href="mailto:hello@framecode.studio" className="hover:text-white">hello@framecode.studio</a></li>
                        <li><a href="tel:+10000000000" className="hover:text-white">+1 (000) 000-0000</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10 px-6 py-6 text-center font-mono text-[11px] text-[#5C7188]">
                © {new Date().getFullYear()} Aiesthrox Studio. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer