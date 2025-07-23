import Link from "next/link";
import Image from "next/image"; // Biarkan ini jika ada gambar lain di footer, meskipun avatar dihapus

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container" id="contact">
          <div className="footer-1 bg-gray-850 border-gray-800">
            <div className="row">
              {/* Kolom Kiri: Deskripsi & Alamat */}
              <div className="col-lg-6 mb-30">
                {" "}
                {/* Ubah col-lg-4 menjadi col-lg-6 */}
                <p className="mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp">
                  Punya pertanyaan, saran, atau ingin berkolaborasi? Jangan ragu
                  untuk menghubungi kami melalui kontak yang tersedia. Kami
                  senang mendengar dari Anda!
                </p>
              </div>

              {/* Kolom Kanan: Kontak (Email, Telepon, Alamat) */}
              <div className="col-lg-6 mb-30">
                {" "}
                {/* Ubah col-lg-4 menjadi col-lg-6 */}
                <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                  Contact Me
                </h4>
                <ul className="menu-footer">
                  <li className="wow animate__animated animate__fadeInUp">
                    <Link
                      className="color-gray-500"
                      href="mailto:rolasagusta3@gmail.com"
                    >
                      Email: rolasagusta3@gmail.com
                    </Link>
                  </li>
                  <li className="wow animate__animated animate__fadeInUp">
                    <Link
                      className="color-gray-500"
                      href="tel:+62 0896 2994 4399"
                    >
                      Phone: +62 896 2994 4399
                    </Link>
                  </li>
                  {/* Kamu bisa juga menambahkan tautan ke Google Maps untuk alamat */}
                  <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                    Address
                  </h4>
                  <li className="wow animate__animated animate__fadeInUp">
                    <Link
                      className="color-gray-500"
                      href="https://maps.app.goo.gl/8e1YSngFh8dTN37q7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Perum Tanjung Raya Permai, Tanjung Senang, Kec. Pematang
                      Wangi, Kota Bandar Lampung, Lampung 35141
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bagian Footer Bottom (Copyright dan Sosial Media) tetap ada */}
            <div className="footer-bottom border-gray-800">
              <div className="row">
                <div className="col-lg-5 text-center text-lg-start">
                  <p className="text-base color-white wow animate__animated animate__fadeIn">
                    © 2025 Created by{" "}
                    <span className="copyright">RolasAgusta</span>{" "}
                  </p>
                </div>
                <div className="col-lg-7 text-center text-lg-end">
                  <div className="box-socials">
                    <div
                      className="d-inline-block mr-30 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <Link
                        className="icon-socials icon-linked color-gray-500"
                        href="https://www.linkedin.com/in/rolasagusta/"
                      >
                        LinkedIn
                      </Link>
                    </div>
                    <div
                      className="d-inline-block wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <Link
                        className="icon-socials icon-insta color-gray-500"
                        href="https://www.instagram.com/rolas_agusta/"
                      >
                        Instagram
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
