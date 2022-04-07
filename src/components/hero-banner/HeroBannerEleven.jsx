import React, { useMemo } from "react";
import FormDemo from "../../components/form/FormDemo";
import BrandFive from "../../components/brand/BrandFive";
import qs from "qs";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';

const HeroBannerEleven = () => {
  const querystring = qs.parse(window.location.search, { ignoreQueryPrefix: true });
  const variant = parseInt(querystring.var);

  const { t } = useTranslation();

  const abTestText = useMemo(() => {
    console.log(variant);
    if(variant > 0 && variant < 9 && !isNaN(variant)) {
      return parse(t(`var-${variant}`));
    } else {
      return parse(t("var-2"));
    }
  }, [variant]);

  console.log(abTestText);

  return (
    <div className="hero-banner-eleven lg-container">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="hero-text-wrapper">
              {abTestText}
              {/* <h1>
                Edit & Sign <br /> PDF{" "}
                <span>
                  documents
                  <img
                    src="images/shape/line-shape-12.svg"
                    alt="shape"
                    className="cs-screen"
                  />
                </span>
                Online free.
              </h1>
              <p className="hero-sub-heading">
                Document edit, workflow, simplified
              </p> */}
              <FormDemo />
            </div>
            {/* .hero-text-wrapper */}
          </div>
          {/* End .col-xl-7 */}

          <div className="illustration-container">
            <img src="images/assets/main_screen.png" alt="illustration" />
          </div>
        </div>
        {/* Emd .row */}
      </div>
      {/* End .container */}

      <div className="partner-slider-two mt-150 md-mt-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
              <p className="text-center text-lg">
                <span>More than 8</span> of the most widely <br />used networks are supported.<br /> Soon we <span>will connect 4</span> more networks.
              </p>
            </div>
          </div>
          <div className="partnerSliderTwo">
            <BrandFive />
          </div>
        </div>
      </div>
      {/*  /.partner-slider-two */}
    </div>
    //    .hero-banner-eleven
  );
};

export default HeroBannerEleven;
