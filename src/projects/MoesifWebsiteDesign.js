import React, { useState } from "react";
import ButtonSelect from "../components/ButtonSelect";
import ToggleSwitch from "../components/ToggleSwitch";

import desktopLanding from "../images/moesif-brand-system/desktop-landing.png";
import mobileLanding from "../images/moesif-brand-system/mobile-landing.png";
import desktopFeature from "../images/moesif-brand-system/desktop-feature.png";
import mobileFeature from "../images/moesif-brand-system/mobile-feature.png";
import desktopBlog from "../images/moesif-brand-system/desktop-blog.png";
import mobileBlog from "../images/moesif-brand-system/mobile-blog.png";
import desktopPost from "../images/moesif-brand-system/desktop-post.png";
import mobilePost from "../images/moesif-brand-system/mobile-post.png";
import desktopDocs from "../images/moesif-brand-system/desktop-docs.png";
import mobileDocs from "../images/moesif-brand-system/mobile-docs.png";
import Dropdown from "../components/Dropdown";

const SCREENSHOTS = {
  landing: {
    desktop: desktopLanding,
    mobile: mobileLanding,
    url: "https://www.moesif.com",
  },
  feature: {
    desktop: desktopFeature,
    mobile: mobileFeature,
    url: "https://www.moesif.com/features/api-analytics",
  },
  blog: {
    desktop: desktopBlog,
    mobile: mobileBlog,
    url: "https://www.moesif.com/blog",
  },
  post: {
    desktop: desktopPost,
    mobile: mobilePost,
    url: "https://www.moesif.com/blog/technical/behavioral-emails/Build-vs-Buy-Behavioral-Email-Platform-for-API-Product-Companies/",
  },
  docs: {
    desktop: desktopDocs,
    mobile: mobileDocs,
    url: "https://www.moesif.com/docs",
  },
};

const WebsiteSection = () => {
  const [isDesktop, setToDesktop] = useState(true);
  const [page, setPage] = useState("landing");

  const device = isDesktop ? "desktop" : "mobile";

  return (
    <div className="project__section moesif-branding__site-preview">
      <div style={{ display: "flex" }}>
        Mobile
        <ToggleSwitch
          isSelected={isDesktop}
          onToggle={() => setToDesktop(!isDesktop)}
          btnColor="primary"
        />
        Desktop
      </div>

      <div
        className={
          "preview-wrapper" +
          (isDesktop ? " preview-wrapper--desktop" : " preview-wrapper--mobile")
        }
      >
        <div
          className={
            "preview-background box-shadow " +
            (isDesktop
              ? " preview-background--desktop"
              : " preview-background--mobile")
          }
        >
          <div className={"preview-selector" + (isDesktop
              ? " preview-selector--desktop"
              : " preview-selector--mobile")}>
            {isDesktop ? (
              <ButtonSelect
                options={[
                  { value: "landing", label: "Landing" },
                  { value: "feature", label: "Feature" },
                  { value: "blog", label: "Blog" },
                  { value: "post", label: "Post" },
                  { value: "docs", label: "Docs" },
                ]}
                block
                value={page}
                onSelect={setPage}
              />
            ) : (
              <Dropdown
                options={[
                  { value: "landing", label: "Landing" },
                  { value: "feature", label: "Feature" },
                  { value: "blog", label: "Blog" },
                  { value: "post", label: "Post" },
                  { value: "docs", label: "Docs" },
                ]}
                block
                value={page}
                onChange={setPage}
              />
            )}
          </div>
          <div className="preview-container">
            <a
              href={SCREENSHOTS[page].url}
              target="_blank"
              rel="noreferrer"
              key={page}
            >
              <img src={SCREENSHOTS[page][device]} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div>Design and build Moesif Pages to be mobile friendly.</div>
    </div>
  );
};

const MoesifBranding = (
  <div className="project__body moesif-branding">
    <div>
      <p>
        A redesign of the API ANalytics Company Moesif. refactoring hard coded
        HTML section into modular reusable components, as well as applying
        updated styling to match brand identity.
      </p>
      <p>
        Also customize a Liquid Template to suit the needs of the blog, and docs
        page.
      </p>
    </div>
    <WebsiteSection />
  </div>
);

export default MoesifBranding;
