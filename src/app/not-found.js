import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/layout/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="cover-home3 shadow-page-404">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 ml-auto mr-auto">
              <div className="box-page-404">
                <div className="text-center mb-150 mt-100">
                  <div className="box-404 row">
                    <div className="col-lg-6">
                      <div className="image-404"><Image width={384} height={360} src="/assets/imgs/page/404/404.svg" alt="Genz" /></div>
                    </div>
                    <div className="col-lg-6">
                      <div className="info-404 text-start mt-60">
                        <h2 className="color-linear mb-20">Page not found</h2>
                        <p className="text-xl color-gray-500">The page you are looking for has slipped in to an unknown realm. Click the button below to go back to the homepage.</p>
                        <div className="mt-25"><Link className="btn btn-linear hover-up" href="/">Homepage</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
