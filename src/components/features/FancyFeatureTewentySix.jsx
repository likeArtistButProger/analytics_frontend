import React from "react";

const featuresContent = [
  {
    colorBasedClass: "color-variatin-one",
    title: "Deski eSignature",
    subTitle: `Join 1,000,000 customers & hundreds of millions of signers`,
    routerPath: "#",
    shapeOne: "222",
    shapeTwo: "223",
  },
  {
    colorBasedClass: "color-variatin-two",
    title: "Agreement Cloud",
    subTitle: `Connect and automate your entire agreement process.`,
    routerPath: "#",
    shapeOne: "224",
    shapeTwo: "225",
  },
];

const FancyFeatureTewentySix = () => {
  return (
    <div className="row">
      <div className="col-md-6 aos-init aos-animate" data-aos="fade-right">
        <div className="block-style-twentySix text-center mb-40 color-variatin-one">
          <h6>Active DeFi user?</h6>
          <h4>Check the approvals - <br />save your savings!</h4>
          <a href="#" className="try-btn">Join waitlist for check your wallet!</a>
          <img src="images/shape/222.jpg" alt="shape" className="shapes shape-one" />
          <img src="images/shape/223.jpg" alt="shape" className="shapes shape-two" />
        </div>
      </div>
      <div className="col-md-6 aos-init aos-animate" data-aos="fade-right">
        <div className="block-style-twentySix text-center mb-40 color-variatin-two">
          <h6>Collecting NFTs?</h6>
          <h4>Are you sure that your NFT's <br /> belong only to you?</h4>
          <a href="#" className="try-btn">It's time to check this!</a>
          <img src="images/shape/224.jpg" alt="shape" className="shapes shape-one" />
          <img src="images/shape/225.jpg" alt="shape" className="shapes shape-two" />
        </div>
      </div>
    </div>
    // <div className="row">
    //   {featuresContent.map((val, i) => (
    //     <div className="col-md-6" data-aos="fade-right" key={i}>
    //       <div
    //         className={`block-style-twentySix text-center mb-40 ${val.colorBasedClass}`}
    //       >
    //         <h6>{val.title}</h6>
    //         <h4>{val.subTitle}</h4>
    //         <a href={val.routerPath} className="try-btn">
    //           Try it Free
    //         </a>
    //         <img
    //           src={`images/shape/${val.shapeOne}.jpg`}
    //           alt="shape"
    //           className="shapes shape-one"
    //         />
    //         <img
    //           src={`images/shape/${val.shapeTwo}.jpg`}
    //           alt="shape"
    //           className="shapes shape-two"
    //         />
    //       </div>
    //       {/* .block-style-twentySix */}
    //     </div>
    //     // End .col
    //   ))}
    // </div>
  );
};

export default FancyFeatureTewentySix;
