"use client";
import Link from "next/link";
import Image from "next/image";
import { React, useState, useEffect } from "react";
// import SwitchButton from '@/components/elements/SwitchButton'

const Header = ({ handleOpen, handleRemove, openClass }) => {
  const [currentPath, setCurrentPath] = useState("");
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false); // Ini sebenarnya tidak digunakan untuk efek ini, tapi biarkan saja jika ada tujuan lain
  const [hoverDirection, setHoverDirection] = useState({}); // State baru untuk menyimpan arah hover

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Effect hook to add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  // Fungsi untuk menentukan arah kursor masuk
  const handleMouseEnter = (e, linkId) => {
    const target = e.currentTarget; // Elemen Link (<a>) yang di-hover
    const { left, width } = target.getBoundingClientRect(); // Posisi dan lebar elemen
    const mouseX = e.clientX; // Posisi kursor X

    // Hitung apakah kursor masuk dari sisi kiri (0-50% lebar) atau kanan (50-100% lebar)
    const middle = left + width / 2;

    if (mouseX < middle) {
      setHoverDirection((prev) => ({ ...prev, [linkId]: "left" }));
    } else {
      setHoverDirection((prev) => ({ ...prev, [linkId]: "right" }));
    }
  };

  // Fungsi untuk mereset arah saat kursor meninggalkan
  const handleMouseLeave = (e, linkId) => {
    setHoverDirection((prev) => ({ ...prev, [linkId]: null }));
  };

  return (
    <>
      <header
        className={
          scroll
            ? "header sticky-bar bg-gray-900 stick"
            : "header sticky-bar bg-gray-900"
        }
      >
        <div className="container">
          <div className="main-header d-flex justify-content-center">
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li>
                    <Link
                      className={`color-gray-500 ${
                        hoverDirection["homeLink"] === "left"
                          ? "hover-from-left"
                          : ""
                      } ${
                        hoverDirection["homeLink"] === "right"
                          ? "hover-from-right"
                          : ""
                      }`}
                      href="#home"
                      onMouseEnter={(e) => handleMouseEnter(e, "homeLink")}
                      onMouseLeave={(e) => handleMouseLeave(e, "homeLink")}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`color-gray-500 ${
                        hoverDirection["aboutLink"] === "left"
                          ? "hover-from-left"
                          : ""
                      } ${
                        hoverDirection["aboutLink"] === "right"
                          ? "hover-from-right"
                          : ""
                      }`}
                      href="#about"
                      onMouseEnter={(e) => handleMouseEnter(e, "aboutLink")}
                      onMouseLeave={(e) => handleMouseLeave(e, "aboutLink")}
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`color-gray-500 ${
                        hoverDirection["projectsLink"] === "left"
                          ? "hover-from-left"
                          : ""
                      } ${
                        hoverDirection["projectsLink"] === "right"
                          ? "hover-from-right"
                          : ""
                      }`}
                      href="#projects"
                      onMouseEnter={(e) => handleMouseEnter(e, "projectsLink")}
                      onMouseLeave={(e) => handleMouseLeave(e, "projectsLink")}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`color-gray-500 ${
                        hoverDirection["skillsLink"] === "left"
                          ? "hover-from-left"
                          : ""
                      } ${
                        hoverDirection["skillsLink"] === "right"
                          ? "hover-from-right"
                          : ""
                      }`}
                      href="#skills"
                      onMouseEnter={(e) => handleMouseEnter(e, "skillsLink")}
                      onMouseLeave={(e) => handleMouseLeave(e, "skillsLink")}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`color-gray-500 ${
                        hoverDirection["contactLink"] === "left"
                          ? "hover-from-left"
                          : ""
                      } ${
                        hoverDirection["contactLink"] === "right"
                          ? "hover-from-right"
                          : ""
                      }`}
                      href="#contact"
                      onMouseEnter={(e) => handleMouseEnter(e, "contactLink")}
                      onMouseLeave={(e) => handleMouseLeave(e, "contactLink")}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`burger-icon burger-icon-white ${
                  openClass && "burger-close"
                }`}
                onClick={() => {
                  handleOpen();
                  handleRemove();
                }}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
