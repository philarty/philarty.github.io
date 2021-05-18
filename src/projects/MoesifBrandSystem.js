import React, { useState } from "react";


import Lightbox from "../components/Lighbox";
import ToggleSwitch from "../components/ToggleSwitch";
import ButtonSelect from "../components/ButtonSelect";

import logoSketch from "../images/moesif-brand-system/logo-sketches.png";

import desktopLanding from "../images/moesif-brand-system/desktop-landing.png";
import mobileLanding from "../images/moesif-brand-system/mobile-landing.png";
import desktopFeature from "../images/moesif-brand-system/desktop-feature.png";
import mobileFeature from "../images/moesif-brand-system/mobile-feature.png";
import desktopBlog from "../images/moesif-brand-system/desktop-blog.png";
import mobileBlog from "../images/moesif-brand-system/mobile-blog.png";
import desktopPost from "../images/moesif-brand-system/desktop-post.png";
import mobilePost from "../images/moesif-brand-system/mobile-post.png";

const SCREENSHOTS = {
  landing: { desktop: desktopLanding, mobile: mobileLanding },
  feature: { desktop: desktopFeature, mobile: mobileFeature },
  blog: { desktop: desktopBlog, mobile: mobileBlog },
  post: { desktop: desktopPost, mobile: mobilePost },
};

const WebsiteSection = () => {
  const [isDesktop, setToDesktop] = useState(true);
  const [page, setPage] = useState('landing');

  const device = isDesktop ? "desktop" : "mobile";

  return (
    <div>
      <div>
        Mobile
        <ToggleSwitch
          isSelected={isDesktop}
          onToggle={() => setToDesktop(!isDesktop)}
          btnColor='primary'
        />
        Desktop
      </div>
      <ButtonSelect
        options={ 
        [
          { value: "landing", label: "Landing" },
          { value: "feature", label: "Feature" },
          { value: "blog", label: "Blog" },
          { value: "post", label: "Post" },
        ]
      
      }
        value={page}
        onSelect={setPage}
      />
      <div
        className={
          "preview-wrapper" +
          (isDesktop ? " preview-wrapper--desktop" : " preview-wrapper--mobile")
        }
      >
        <div
          className={
            "preview-background" +
            (isDesktop
              ? " preview-background--desktop"
              : " preview-background--mobile")
          }
        >
          <div className="preview-container" key={page}>
            
            <img src={SCREENSHOTS[page][device]} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

const MoesifBranding = (
  <div className="project__body moesif-branding">
    <div className="project__section">
      <Lightbox>
        <img src={logoSketch} alt="" />
      </Lightbox>
    </div>
    <WebsiteSection />
  </div>
);

export default MoesifBranding;
