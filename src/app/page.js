import Layout from "@/components/layout/Layout"
import Hero1 from "@/components/sections/Hero1"
import EditorPicked from "@/components/sections/EditorPicked"
import PopularCategories from "@/components/sections/PopularCategories"
import HotTopic from "@/components/slider/HotTopic"

export default function Home() {
  return (
    <Layout>
      <div className="cover-home1">
        <div className="container">
          <div className="row">
            <div className="col-xl-1" />
            <div className="col-xl-10 col-lg-12">
              <Hero1 />
              <HotTopic />
              <EditorPicked />
              <PopularCategories />
              <div className="row mt-70">
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
