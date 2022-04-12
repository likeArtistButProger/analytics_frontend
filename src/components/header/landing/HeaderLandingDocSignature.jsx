import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useAuthorizeModal } from "../../../hooks";

Modal.setAppElement("#root");

const HeaderLandingDocSignature = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { showModal } = useAuthorizeModal();

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-five fixed"
            : "theme-main-menu sticky-menu theme-menu-five"
        }
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            height: 60
          }}
        >
          <div className="logo">
            <Link to="/">
              <img src="images/logo/deski_05.png" width={250} height={60} alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={showModal}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={["product", "feature", "story", "pricing", "faq"]}
                    currentClassName="active"
                    offset={-500}
                  >
                    {/* <li className="nav-item">
                      <a href="#product" className="nav-link">
                        Product
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#feature" className="nav-link">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#story" className="nav-link">
                        Stories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#pricing" className="nav-link">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#faq" className="nav-link">
                        FAQ’s
                      </a>
                    </li> */}
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          <div className="right-widget">
            <button className="demo-button" onClick={showModal}>
              <span>Join Waitlist</span>
              <img src="images/icon/user.svg" alt="icon" />
            </button>
          </div>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/">
            <img src="images/logo/deski_06.svg" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={showModal}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>
      </div>
      {/* Mobile Menu End */}

      {/* <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={toggleModalOne}>
              <img src="images/icon/close.svg" alt="close" />
            </button>

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “I never dreamed about success. I worked for it.”
                    </blockquote>
                    <span className="bio">—Estée Lauder</span>
                  </div>
                </div>
                <img
                  src="images/assets/ils_18.svg"
                  alt=""
                  className="illustration mt-auto"
                />
              </div>
            </div>

            <div className="right-side">
              <h2 className="form-title">Contact us</h2>
              <HeaderPopupForm />
            </div>
          </main>
        </div>
      </Modal> */}
      {/* End  Modal For Request a demo */}
    </>
  );
};

export default HeaderLandingDocSignature;
