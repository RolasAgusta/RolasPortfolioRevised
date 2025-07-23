'use client'

import Link from "next/link"
// Import Image tidak lagi diperlukan jika tidak ada gambar logo atau avatar
// import Image from 'next/image'
import { useState, useEffect } from "react" // useEffect tidak lagi diperlukan untuk scroll, tapi biarkan jika ada fungsi lain

const MobileMenu = ({ openClass }) => {
    // Menghapus state 'isActive' dan fungsi 'handleToggle' karena tidak ada dropdown lagi.
    // const [isActive, setIsActive] = useState({
    //     status: false,
    //     key: "",
    // });
    // const handleToggle = (key) => { ... };

    const [currentPath, setCurrentPath] = useState(''); // Tambahkan ini lagi untuk active link di mobile menu
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    // State untuk menyimpan arah hover, ini tetap kita butuhkan
    const [hoverDirection, setHoverDirection] = useState({});

    // Fungsi untuk menentukan arah kursor masuk (tetap sama)
    const handleMouseEnter = (e, linkId) => {
        const target = e.currentTarget;
        if (!target) return;
        
        const { left, width } = target.getBoundingClientRect();
        const mouseX = e.clientX;

        const middle = left + width / 2;

        if (mouseX < middle) {
            setHoverDirection(prev => ({ ...prev, [linkId]: 'left' }));
        } else {
            setHoverDirection(prev => ({ ...prev, [linkId]: 'right' }));
        }
    };

    // Fungsi untuk mereset arah saat kursor meninggalkan (tetap sama)
    const handleMouseLeave = (e, linkId) => {
        setHoverDirection(prev => ({ ...prev, [linkId]: null }));
    };

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                        {/* Home */}
                                        <li>
                                            <Link
                                                className={`color-gray-500 ${currentPath === '/' ? 'active' : ''} ${hoverDirection['homeLink'] === 'left' ? 'hover-from-left' : ''} ${hoverDirection['homeLink'] === 'right' ? 'hover-from-right' : ''}`}
                                                href="#home"
                                                onMouseEnter={(e) => handleMouseEnter(e, 'homeLink')}
                                                onMouseLeave={(e) => handleMouseLeave(e, 'homeLink')}
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        {/* About Me */}
                                        <li>
                                            <Link
                                                className={`color-gray-500 ${hoverDirection['aboutLink'] === 'left' ? 'hover-from-left' : ''} ${hoverDirection['aboutLink'] === 'right' ? 'hover-from-right' : ''}`}
                                                href="#about"
                                                onMouseEnter={(e) => handleMouseEnter(e, 'aboutLink')}
                                                onMouseLeave={(e) => handleMouseLeave(e, 'aboutLink')}
                                            >
                                                About Me
                                            </Link>
                                        </li>
                                        {/* Projects */}
                                        <li>
                                            <Link
                                                className={`color-gray-500 ${hoverDirection['projectsLink'] === 'left' ? 'hover-from-left' : ''} ${hoverDirection['projectsLink'] === 'right' ? 'hover-from-right' : ''}`}
                                                href="#projects"
                                                onMouseEnter={(e) => handleMouseEnter(e, 'projectsLink')}
                                                onMouseLeave={(e) => handleMouseLeave(e, 'projectsLink')}
                                            >
                                                Projects
                                            </Link>
                                        </li>
                                        {/* Skills */}
                                        <li>
                                            <Link
                                                className={`color-gray-500 ${hoverDirection['skillsLink'] === 'left' ? 'hover-from-left' : ''} ${hoverDirection['skillsLink'] === 'right' ? 'hover-from-right' : ''}`}
                                                href="#skills"
                                                onMouseEnter={(e) => handleMouseEnter(e, 'skillsLink')}
                                                onMouseLeave={(e) => handleMouseLeave(e, 'skillsLink')}
                                            >
                                                Skills
                                            </Link>
                                        </li>
                                        {/* Contact */}
                                        <li>
                                            <Link
                                                className={`color-gray-500 ${hoverDirection['contactLink'] === 'left' ? 'hover-from-left' : ''} ${hoverDirection['contactLink'] === 'right' ? 'hover-from-right' : ''}`}
                                                href="#contact"
                                                onMouseEnter={(e) => handleMouseEnter(e, 'contactLink')}
                                                onMouseLeave={(e) => handleMouseLeave(e, 'contactLink')}
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                {/* Menghapus bagian mobile-account dan site-copyright jika tidak diperlukan */}
                                {/* Jika kamu ingin bagian user account atau copyright tetap ada di mobile menu,
                                   kamu bisa biarkan atau sesuaikan sesuai kebutuhan.
                                   Untuk saat ini, saya asumsikan kamu ingin menghilangkannya agar bersih.
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;