import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const TabListContent = ["All", "Development", "Plugin", "Desing", "Branding"];

const AllPortfolioItem = [
  {
    img: "img_01",
    title: "The Gang Blue",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "",
  },
  {
    img: "img_02",
    title: "Core WordPress",
    meta: "Development, Plugin",
    imgClass: "",
    dalayAnimation: "100",
  },
  {
    img: "img_03",
    title: "Platform Audit",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
  },
  {
    img: "img_04",
    title: "Medieval origins",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "0",
  },
  {
    img: "img_05",
    title: "Designer’s Checklist",
    meta: "Development, Plugin",
    imgClass: "mixL",
    dalayAnimation: "100",
  },
  {
    img: "img_06",
    title: "Motivation defining Moment",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "0",
  },
  {
    img: "img_07",
    title: "Our experience WordCamp",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "100",
  },
  {
    img: "img_08",
    title: "Lets catch up amd",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
  },
];
const Development = [
  {
    img: "img_02",
    title: "Core WordPress",
    meta: "Development, Plugin",
    imgClass: "",
    dalayAnimation: "0",
  },
  {
    img: "img_04",
    title: "Medieval origins",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "100",
  },
  {
    img: "img_08",
    title: "Lets catch up amd",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
  },
];

const Plugin = [
  {
    img: "img_03",
    title: "Platform Audit",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "0",
  },
  {
    img: "img_05",
    title: "Designer’s Checklist",
    meta: "Development, Plugin",
    imgClass: "mixL",
    dalayAnimation: "100",
  },
  {
    img: "img_07",
    title: "Our experience WordCamp",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
  },
];

const Design = [
  {
    img: "img_01",
    title: "The Gang Blue",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "0",
  },
  {
    img: "img_04",
    title: "Medieval origins",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "100",
  },
  {
    img: "img_06",
    title: "Motivation defining Moment",
    meta: "Development, Design",
    imgClass: "",
    dalayAnimation: "200",
  },
];

const Branding = [
  {
    img: "img_02",
    title: "Core WordPress",
    meta: "Development, Plugin",
    imgClass: "",
    dalayAnimation: "0",
  },
  {
    img: "img_03",
    title: "Platform Audit",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "100",
  },
  {
    img: "img_07",
    title: "Our experience WordCamp",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "200",
  },
  {
    img: "img_08",
    title: "Lets catch up amd",
    meta: "Development, Branding",
    imgClass: "",
    dalayAnimation: "300",
  },
];

const PortfolioTwo = () => {
  return (
    <SimpleReactLightbox>
      <Tabs className="portfolio-container">
        <div className="controls po-control-one text-center mb-90 md-mb-50 mt-90 md-mt-60">
          <TabList className="d-flex flex-wrap justify-content-center">
            {TabListContent.map((tab, i) => (
              <Tab key={i}>
                <button type="button" className="control">
                  {tab}
                </button>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End pc-control-one */}
        <SRLWrapper>
          <TabPanel>
            <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
              {AllPortfolioItem.map((item, i) => (
                <div
                  className={`mix ${item.imgClass}`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}
                >
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={`images/gallery/${item.img}.jpg`}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
            {/* single mixitUp-container */}
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
              {Development.map((item, i) => (
                <div
                  className={`mix ${item.imgClass}`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}
                >
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={`images/gallery/${item.img}.jpg`}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
              {Plugin.map((item, i) => (
                <div
                  className={`mix ${item.imgClass}`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}
                >
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={`images/gallery/${item.img}.jpg`}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
              {Design.map((item, i) => (
                <div
                  className={`mix ${item.imgClass}`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}
                >
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={`images/gallery/${item.img}.jpg`}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mixitUp-container gutter-space-one d-flex flex-wrap">
              {Branding.map((item, i) => (
                <div
                  className={`mix ${item.imgClass}`}
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={item.dalayAnimation}
                >
                  <div className="portfolio-block-two position-relative">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={`images/gallery/${item.img}.jpg`}
                        alt={item.meta}
                        className="w-100 h-100 tran4s img-meta"
                      />
                      <div className="fancybox">
                        <i className="fa fa-arrows-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="hover-content">
                      <h3>
                        <Link to="/portfolio-details-v1">{item.title}</Link>
                      </h3>
                      <div className="tag">{item.meta}</div>
                    </div>
                    {/* /.hover-content */}
                  </div>
                  {/* /.portfolio-block-two */}
                </div>
              ))}
            </div>
          </TabPanel>
        </SRLWrapper>
      </Tabs>
    </SimpleReactLightbox>
  );
};

export default PortfolioTwo;
