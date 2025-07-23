'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiperOptions = {
  modules: [Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    prevEl: ".swiper-button-prev-style-1",
    nextEl: ".swiper-button-next-style-1",
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 30 },
    575: { slidesPerView: 1, spaceBetween: 30 },
    767: { slidesPerView: 1, spaceBetween: 30 },
    991: { slidesPerView: 2, spaceBetween: 30 },
    1199: { slidesPerView: 3, spaceBetween: 30 },
    1350: { slidesPerView: 4, spaceBetween: 30 },
  },
}

const projects = [
  { title: "IoT For Smart Farming", imgBig: "/assets/imgs/page/categories/IoT.jpg" },
  { title: "Installation Panel For Smart System", imgBig: "/assets/imgs/page/categories/PLC.jpg" },
  { title: "Microcontroller For Voltage Monitoring", imgBig: "/assets/imgs/page/categories/Prototipes.jpg" },
  { title: "Design Smart Power Supply AC to DC", imgBig: "/assets/imgs/page/categories/Design.png" },
  { title: "PCB Design For Smart Ultrasonic Sensor", imgBig: "/assets/imgs/page/categories/PCB.jpg" },
  { title: "Community Teaching", imgBig: "/assets/imgs/page/categories/CIMG0593.JPG" },
]

const MyProjects = () => {
  return (
    <div id="projects" className="mt-100 mb-70" style={{ scrollMarginTop: "160px" }}>
      <div className="box-topics border-gray-800 bg-gray-850">
        <div className="row">
          <div className="col-lg-2">
            <h5 className="mb-15 color-white wow animate__animated animate__fadeInUp" data-wow-delay="0s">My Projects</h5>
            <p className="color-gray-500 mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
              Projek yang sudah ku jalani selama dunia perkuliahan.
            </p>
            <div className="box-buttons-slider position-relative wow animate__animated animate__zoomIn">
              <div className="swiper-button-prev swiper-button-prev-style-1" />
              <div className="swiper-button-next swiper-button-next-style-1" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="box-swiper">
              <div className="swiper-container swiper-group-5">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  {projects.map((item, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="card-style-1">
                        <Link href="https://www.linkedin.com/in/rolasagusta/">
                          <div className="card-image">
                            <Image width={190} height={235} src={item.imgBig} alt={item.title} />
                            <div className="card-info">
                              <div className="info-bottom">
                                <h6 className="color-white mb-5">{item.title}</h6>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
