import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../components/header/landing/HeaderLandingDocSignature";
import HeroBannerEleven from "../../components/hero-banner/HeroBannerEleven";
import FancyFeatureTewentySix from "../../components/features/FancyFeatureTewentySix";
import CallToActionSix from "../../components/call-to-action/CallToActionSix";
import CopyRightThree from "../../components/footer/CopyRightThree";

const DocSignatureLanding = () => {
  return (
    <div className="main-page-wrapper font-gordita">
      <Helmet>
        <title>
          {" "}
          Check Your Wallet | Manage your approvals
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header Landing Doc Signature */}

      <HeroBannerEleven />
      {/* End Hero Banner Eleven */}

      {/* =============================================
		Fancy Feature Twenty Six
		==============================================  */}
      <div className="fancy-feature-twentySix lg-container pt-160 md-pt-100">
        <div className="container">
          <FancyFeatureTewentySix />
        </div>
      </div>
      {/* End .Fancy Feature Twenty Six */}

      {/* =============================================
            Fancy Feature Twenty Seven
        ============================================== */}
        <div className="fancy-feature-twentySeven lg-container pt-120  md-pt-60" id="product">
          <div className="container">
            <div className="title-style-twelve text-center mb-70 md-mb-20">
              <div className="row">
                <div className="col-xl-10 col-lg-11 m-auto">
                  <div className="upper-title">
                    Free and secure
                  </div>
                  <h2>
                    <span>
                      Check your wallet <br />for a dangerous approvals <img src="images/shape/line-shape-13.svg" alt="line-shape"/>
                    </span>
                  </h2>
                  <p className="mt-40 md-mt-30">
                    We developed this service specifically to make DeFi users feel safe using their wallets.<br />So that you know for sure that only you have access to your funds.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 aos-init" data-aos="fade-up" data-aos-delay="">
                <div className="block-style-twentySeven">
                  <div className="icon d-flex align-items-end justify-content-center">
                    <img src="images/icon/144.svg" alt="icon" />
                    </div>
                    <h4 className="font-gordita">
                      Approvals
                    </h4>
                    <p>CheckYourWallet displays all approvals in all networks.</p>
                  </div>
                </div>
              <div className="col-lg-3 col-sm-6 aos-init" data-aos="fade-up" data-aos-delay="100">
              <div className="block-style-twentySeven">
                <div className="icon d-flex align-items-end justify-content-center">
                  <img src="images/icon/145.svg" alt="icon" />
                </div>
                <h4 className="font-gordita">Stay informed</h4>
                <p>Convenient notifications on all events with the wallet.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 aos-init" data-aos="fade-up" data-aos-delay="200">
              <div className="block-style-twentySeven">
                <div className="icon d-flex align-items-end justify-content-center">
                  <img src="images/icon/146.svg" alt="icon" />
                </div>
                <h4 className="font-gordita">Easy manage</h4>
                <p>User-friendly interface for managing approvals</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 aos-init" data-aos="fade-up" data-aos-delay="300">
            <div className="block-style-twentySeven">
              <div className="icon d-flex align-items-end justify-content-center">
                <img src="images/icon/147.svg" alt="icon" />
              </div>
              <h4 className="font-gordita">Stay safe</h4>
              <p>Don't let outside projects have access to your assets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <div
        className="fancy-feature-twentySeven lg-container pt-120  md-pt-60"
        id="product"
      >
        <div className="container">
          <div className="title-style-twelve text-center mb-70 md-mb-20">
            <div className="row">
              <div className="col-xl-10 col-lg-11 m-auto">
                <div className="upper-title">Working Process</div>
                <h2>
                  <span>
                    Works the way you already do{" "}
                    <img
                      src="images/shape/line-shape-13.svg"
                      alt="line-shape"
                    />
                  </span>
                </h2>
                <p className="mt-40 md-mt-30">
                  Together with useful notifications, collaboration insights,
                  and improvement tips – it’s time for your documents to start
                  working for you.
                </p>
              </div>
            </div>
          </div>
          <FancyFeatureTewentySeven />
        </div>
      </div> */}
      {/* /.fancy-feature-twentySeven */}

      {/* =============================================
            Video Box Two
        ==============================================  */}
      {/* <div className="video-box-two lg-container mt-200 md-mt-100">
        <div className="container">
          <FancyVideoFour />
        </div>
      </div> */}
      {/* /.video-box-two */}

      {/* =====================================================
            Fancy Text block Twenty Three
        ===================================================== */}
      {/* <div
        className="fancy-text-block-twentyThree lg-container pt-200 mt-30 md-pt-90"
        id="feature"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-last" data-aos="fade-left">
              <div className="text-wrapper pl-xl-5">
                <div className="cl-text">
                  Over <span>150,000+</span> client
                </div>
                <div className="title-style-twelve">
                  <h2>Signture that work Smoothly.</h2>
                  <p className="mt-35 mb-60 md-mb-40">
                    Commonly used in the graphic, prit quis due & publishing
                    indust for previewing lightly visual mockups.
                  </p>
                </div>
                <a href="#" className="theme-btn-eight">
                  Start Free Trial
                </a>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-right">
              <div className="img-container position-relative md-mt-60">
                <img
                  src="images/assets/screen_30.png"
                  alt="screen"
                  className="main-screen"
                />
                <img
                  src="images/assets/screen_31.png"
                  alt="screen"
                  className="screen-one"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-90 md-mt-50">
          <div className="container">
            <FancyFeatureTewentyEight />
          </div>
        </div>
      </div> */}
      {/* /.fancy-text-block-twentyThree --> */}

      {/* =====================================================
            Useable Tools Four
        ===================================================== */}
      {/* <div className="useable-tools-section-four lg-container mt-200 md-mt-100">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-wrapper">
                  <div className="title-style-nine">
                    <h2>Integrate Any Tools Seamlessly.</h2>
                  </div>
                  <p>
                    Commonly used in the graphic, print quis & publishing
                    industris for previewing nor visual layout and mockups.
                  </p>
                  <a href="#" className="theme-btn-ten">
                    See all integrations{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 ml-auto">
                <div className="logo-container h-100">
                  <div className="inner-wrapper">
                    <BrandSix />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* /.useable-tools-section-four */}

      {/* =============================================
            Fancy Feature Twenty Eight
        ==============================================  */}
      {/* <div
        className="fancy-feature-twentyEight lg-container pt-150 mt-50 md-pt-70"
        id="story"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto" data-aos="fade-up">
              <div className="title-style-twelve text-center pb-80 md-pb-30">
                <div className="upper-title">Customer Stories</div>
                <h2>
                  <span>
                    1,000,000+{" "}
                    <img src="images/shape/line-shape-13.svg" alt="shape" />
                  </span>{" "}
                  organizations are already becoming more agreeable.
                </h2>
              </div>
            </div>
          </div>
          <FancyFeatureTewentyNine />
          <div className="text-center mt-80 md-mt-50">
            <a href="#" className="theme-btn-ten">
              Read all customer stories{" "}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div> */}
      {/* /.fancy-feature-twentyEight */}

      {/* =====================================================
            Pricing Section Eight
        ===================================================== */}
      {/* <div
        className="pricing-section-eight lg-container mt-150 md-mt-100"
        id="pricing"
      >
        <div className="container">
          <div className="border-top pt-150 md-pt-100">
            <div className="title-style-twelve text-center pb-120 md-pb-60">
              <h2>
                <span>
                  Get your plan
                  <img src="images/shape/line-shape-13.svg" alt="line-shape" />
                </span>
              </h2>
              <p className="mt-40 md-mt-20">
                Get access to the largest library of legal forms and easily
                integrate deski into your apps
              </p>
            </div>
          </div>

          <PricingEight />
        </div>
      </div> */}
      {/* /.Pricing Section Eight */}

      {/* =====================================================
            Faq Section Five
        ===================================================== */}
      {/* <div
        className="faq-section-five lg-container pt-200 mt-25 md-pt-80"
        id="faq"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="title-style-twelve">
                <div className="upper-title">FAQ</div>
                <h2>Any Questions find here.</h2>
                <p className="pt-25 pb-40 md-pb-30">
                  Find your answers here. if you don’t find it here, please
                  contact us.
                </p>
                <Link className="theme-btn-eight" to="/contact-doc">
                  {" "}
                  Contact us
                </Link>
              </div>
            </div>
            <div className="col-lg-6 ml-auto">
              <FaqClassicThree />
            </div>
          </div>
        </div>
      </div> */}
      {/* /.fqa-section-five */}

      {/* =====================================================
            Fancy Short Banner Thirteen
        ===================================================== */}
      <div className="fancy-short-banner-thirteen mt-200 md-mt-130">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 m-auto">
                <CallToActionSix />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-short-banner-thirteen */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven md-mt-100">
        <div className="lg-container">
          {/* <div className="container inner-btn-black">
            <FooterSeven />
          </div> */}

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default DocSignatureLanding;
