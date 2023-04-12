import React from "react";
import TopSection from "../TopSection";
import PrivacyRules from "./PrivacyRules";

const PrivacyPolicy = () => {
  document.title = "Privacy Policy"
  return (
    <div className="privacy-section1" id="privacy">
      <TopSection title={"privacy policy"} />
      <div className="privacy-section2">
        <div className="rules-container">
        <div className="privacy-text-box">
          <h1 className="privacy-heading">
            Private Data We Receive And Collect
          </h1>
          <p className="privacy-paragraph">
            FUNR also automatically collects and receives certain information
            from your computer or mobile device, including the activities you
            perform on our Website, the Platforms, and the Applications, the
            type of hardware and software you are using (for example, your
            operating system or browser), and information obtained from cookies.
            For example, each time you visit the Website or otherwise use the
            Services, we automatically collect your IP address, browser and
            device type, access times, the web page from which you came, the
            regions from which you navigate the web page, and the web page(s)
            you access (as applicable).
          </p>
        </div>
        <div className="privacy-text-box">
          <h1 className="privacy-heading">
          How We Use FUNR Landing Page Data
          </h1>
          <p className="privacy-paragraph">
          FUNR SaaS Landing Page Template uses visitors’ data for the following general purposes:
          </p>
          <PrivacyRules />
        </div>
        <div className="privacy-text-box">
          <h1 className="privacy-heading">
          What rights you have over your data
          </h1>
          <p className="privacy-paragraph">
          FUNR landing page template tool. By its nature, Services enable our customers to promote their products and services integrate with hundreds of business applications that they already use, all in one place.Services help our customers promote their products and services, marketing and advertising; engaging audiences; scheduling and publishing messages; and analyze the results.
          </p>
        </div>
        <div className="privacy-text-box">
          <h1 className="privacy-heading">
          Consent Of Using FUNR Landing Page
          </h1>
          <p className="privacy-paragraph">
          By using any of the Services, or submitting or collecting any Personal Information via the Services, you consent to the collection, transfer, storage disclosure, and use of your Personal Information in the manner set out in this Privacy Policy. If you do not consent to the use of your Personal Information in these ways, please stop using the Services.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
