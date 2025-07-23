"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Hero1 = () => {
    const fullText = "I'm Rolas Agusta";
    const [displayedText, setDisplayedText] = useState("");
    const [typingDone, setTypingDone] = useState(false);
    const indexRef = useRef(0);

    useEffect(() => {
        setDisplayedText("");
        setTypingDone(false);
        indexRef.current = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => {
                if (indexRef.current < fullText.length) {
                    const next = fullText.slice(0, indexRef.current + 1);
                    indexRef.current += 1;
                    return next;
                } else {
                    setTypingDone(true);
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 120);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id="home" className="banner">
                <div className="row align-items-end">
                    <div className="col-lg-6 pt-100" style={{ transform: 'translateY(-60px)' }}>
                        <h1
                            className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp"
                            style={{ fontSize: '2.8rem', fontWeight: 680 }}
                        >
                            {displayedText}
                            <span className={`typing-cursor ${typingDone ? 'blink' : ''}`}>|</span>
                        </h1>

                        {/* Deskripsi */}
                        <div className="row">
                            <div className="col-lg-9">
                                <p className="text-base color-gray-600 wow animate__animated animate__fadeInUp">
                                    Technology is more than just a field of study for me, it's my passion.
                                    I love working on IoT systems, experimenting with renewable energy tech, and developing websites
                                    that bring ideas to life.
                                </p>
                            </div>
                        </div>

                        {/* Follow me on */}
                        <div className="mt-40 mb-20 wow animate__animated animate__fadeInUp">
                            <p className="text-base color-gray-600 mb-2">Follow me on:</p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <a href="https://github.com/RolasAgusta" target="_blank" rel="noopener noreferrer">
                                    <Image src="/assets/imgs/template/icons/github-mark-white.svg" alt="GitHub" width={28} height={28} />
                                </a>
                                <a href="https://www.linkedin.com/in/rolasagusta/" target="_blank" rel="noopener noreferrer">
                                    <Image src="/assets/imgs/template/icons/linkedin-svgrepo-com.svg" alt="LinkedIn" width={29} height={29} />
                                </a>
                                <a href="https://www.instagram.com/rolas_agusta/" target="_blank" rel="noopener noreferrer">
                                    <Image src="/assets/imgs/template/icons/icons8-instagram.svg" alt="Instagram" width={29} height={29} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-30 mb-50 wow animate__animated animate__fadeInUp">
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
                                <Image src="/assets/imgs/template/icons/icons8-graph-48.png" alt="Stats Icon" width={24} height={24} />
                                <p className="text-base color-gray-600" style={{ margin: 0, fontWeight: '500' }}>Status</p>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                {/* Stat 1 */}
                                <div style={{
                                    backgroundColor: '#1f2937',
                                    padding: '20px 24px',
                                    borderRadius: '999px',
                                    color: '#fff',
                                    textAlign: 'center',
                                    minWidth: '120px'
                                }}>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>1 Years</div>
                                    <div style={{ fontSize: '0.875rem' }}>Experience</div>
                                </div>

                                {/* Stat 2 */}
                                <div style={{
                                    backgroundColor: '#1f2937',
                                    padding: '20px 24px',
                                    borderRadius: '999px',
                                    color: '#fff',
                                    textAlign: 'center',
                                    minWidth: '120px'
                                }}>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>6 Projects</div>
                                    <div style={{ fontSize: '0.875rem' }}>Total Projects</div>
                                </div>

                                {/* Stat 3 */}
                                <div style={{
                                    backgroundColor: '#1f2937',
                                    padding: '20px 24px',
                                    borderRadius: '999px',
                                    color: '#fff',
                                    textAlign: 'center',
                                    minWidth: '120px'
                                }}>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>3.65/4.00</div>
                                    <div style={{ fontSize: '0.875rem' }}>GPA</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Foto Profil */}
                    <div className="col-lg-6 text-center">
                        <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                height: '100%',
                                transform: 'translateY(-180px)',
                            }}>
                                <Image
                                    width={360}
                                    height={360}
                                    src="/assets/imgs/page/homepage1/DSCF0279.JPG"
                                    alt="Foto Profil"
                                    style={{
                                        borderRadius: '50%',
                                        border: '8px solid #fff',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                                        objectFit: 'cover',
                                        background: '#eee',
                                    }}
                                />
                            </div>
                            <div className="pattern-1">
                                <Image width={20} height={20} src="/assets/imgs/template/pattern-1.svg" alt="Genz" />
                            </div>
                            <div className="pattern-2">
                                <Image width={30} height={30} src="/assets/imgs/template/pattern-2.svg" alt="Genz" />
                            </div>
                            <div className="pattern-3">
                                <Image width={30} height={30} src="/assets/imgs/template/pattern-3.svg" alt="Genz" />
                            </div>
                            <div className="pattern-4">
                                <Image width={30} height={30} src="/assets/imgs/template/pattern-4.svg" alt="Genz" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero1;