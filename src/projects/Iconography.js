import React from "react";
import SVG from "react-inlinesvg";

import iconHeader from "../images/iconography/icon-main.svg";

import sunnyIcon from "../images/iconography/sunny.svg";
import sunnyPeriodsIcon from "../images/iconography/sunny-periods.svg";
import sunnyIntervalIcon from "../images/iconography/sunny-intervals.svg";
import sunnyPeriodsWithShowersIcon from "../images/iconography/sunny-periods-with-showers.svg";
import sunnyIntervalsWithShowersIcon from "../images/iconography/sunny-intervals-with-showers.svg";
import fogIcon from "../images/iconography/fog.svg";
import cloudyIcon from "../images/iconography/cloudy.svg";
import overcastIcon from "../images/iconography/overcast.svg";
import lightRainIcon from "../images/iconography/light-rain.svg";
import heavyRainIcon from "../images/iconography/heavy-rain.svg";
import thunderstormIcon from "../images/iconography/thunderstorm.svg";
import windyIcon from "../images/iconography/windy.svg";
import hotIcon from "../images/iconography/hot.svg";
import warmIcon from "../images/iconography/warm.svg";
import coolIcon from "../images/iconography/cool.svg";
import coldIcon from "../images/iconography/cold.svg";

import carIcon from "../images/iconography/car.svg";
import taxiIcon from "../images/iconography/taxi.svg";
import miniBusIcon from "../images/iconography/mini-bus.svg";
import busIcon from "../images/iconography/bus.svg";
import mtrIcon from "../images/iconography/mtr.svg";
import flightIcon from "../images/iconography/flight.svg";
import peakTramIcon from "../images/iconography/peak-tram.svg";
import tramIcon from "../images/iconography/tram.svg";
import cableCarIcon from "../images/iconography/cable-car.svg";
import ferryIcon from "../images/iconography/ferry.svg";
import walkingIcon from "../images/iconography/walking.svg";
import bikingIcon from "../images/iconography/biking.svg";

import homeIcon from "../images/iconography/home.svg";
import schoolIcon from "../images/iconography/school.svg";
import libraryIcon from "../images/iconography/library.svg";
import workIcon from "../images/iconography/work.svg";
import transitIcon from "../images/iconography/transit.svg";
import urbanIcon from "../images/iconography/urban.svg";
import suburbanIcon from "../images/iconography/suburban.svg";
import natureIcon from "../images/iconography/nature.svg";
import outdoorIcon from "../images/iconography/outdoor.svg";
import indoorIcon from "../images/iconography/indoor.svg";

import billingIcon from "../images/iconography/billing.svg";
import keyboardIcon from "../images/iconography/keyboard.svg";
import qrCodeIcon from "../images/iconography/qr-code.svg";
import flashlightIcon from "../images/iconography/flashlight.svg";
import blankTemplateIcon from "../images/iconography/blank-template.svg";
import inactivityIcon from "../images/iconography/inactivity.svg";
import rateLimitErrorIcon from "../images/iconography/rate-limit-error.svg";
import reviewErrorIcon from "../images/iconography/review-error.svg";
import reviewBlockingIcon from "../images/iconography/review-blocking.svg";
import deprecatedErrorIcon from "../images/iconography/deprecated-error.svg";
import companyInfoIcon from "../images/iconography/company-info.svg";
import apiInfoIcon from "../images/iconography/api-info.svg";
import userInfoIcon from "../images/iconography/user-info.svg";
import campaignIcon from "../images/iconography/campaign.svg";
import sessionTokenIcon from "../images/iconography/session-token.svg";
import geoIcon from "../images/iconography/geo.svg";
import userAgentIcon from "../images/iconography/user-agent.svg";
import metadataIcon from "../images/iconography/metadata.svg";
import singleUserIcon from "../images/iconography/single-user.svg";
import clientIntegrationIcon from "../images/iconography/client-integration.svg";
import alertIcon from "../images/iconography/alert.svg";
import gettingStartedIcon from "../images/iconography/getting-started.svg";
import behaviorEmailIcon from "../images/iconography/behavior-email.svg";
import faqIcon from "../images/iconography/faq.svg";
import blogIcon from "../images/iconography/blog.svg";
import docsIcon from "../images/iconography/docs.svg";
import statusIcon from "../images/iconography/status.svg";
import booksIcon from "../images/iconography/books.svg";
import complianceIcon from "../images/iconography/compliance.svg";
import referenceIcon from "../images/iconography/reference.svg";
import gdpricon from "../images/iconography/gdpr.svg";
import infrastructureIcon from "../images/iconography/infrastructure.svg";
import customersIcon from "../images/iconography/customers.svg";
import integrationIcon from "../images/iconography/integration.svg";
import hackerIcon from "../images/iconography/hacker.svg";
import compareIcon from "../images/iconography/compare.svg";
import developerRelationsIcon from "../images/iconography/developer-relations.svg";
import customerSuccessIcon from "../images/iconography/customer-success.svg";
import engineeringIcon from "../images/iconography/engineering.svg";
import securityIcon from "../images/iconography/security.svg";
import productManagementIcon from "../images/iconography/product-management.svg";
import thirdpartyIcon from "../images/iconography/third-party.svg";
import growthicon from "../images/iconography/growth.svg";
import logIcon from "../images/iconography/log.svg";
import webIcon from "../images/iconography/web.svg";
import dashboardIcon from "../images/iconography/dashboard.svg";
import monitoringIcon from "../images/iconography/monitoring.svg";
import puzzleIcon from "../images/iconography/puzzle.svg";
import embeddedIcon from "../images/iconography/embedded.svg";
import analyticsIcon from "../images/iconography/analytics.svg";
import ProjectLayout from "../components/ProjectLayout";

const ICONSSETS = [
  {
    title: "Weather Icons",
    icons: [
      { id: "Sunny", src: sunnyIcon },
      { id: "Sunny Periods", src: sunnyPeriodsIcon },
      { id: "Sunny Intervals", src: sunnyIntervalIcon },
      { id: "Sunny Periods with Showers", src: sunnyPeriodsWithShowersIcon },
      {
        id: "Sunny Intervals with Showers",
        src: sunnyIntervalsWithShowersIcon,
      },
      { id: "Fog", src: fogIcon },
      { id: "Cloudy", src: cloudyIcon },
      { id: "Overcast", src: overcastIcon },
      { id: "Light Rain", src: lightRainIcon },
      { id: "Heavy Rain", src: heavyRainIcon },
      { id: "Thunderstorms", src: thunderstormIcon },
      { id: "Windy", src: windyIcon },
      { id: "Hot", src: hotIcon },
      { id: "Warm", src: warmIcon },
      { id: "Cool", src: coolIcon },
      { id: "Cold", src: coldIcon },
      // { id: "Humid", src: coldIcon },
      // { id: "Dry", src: coldIcon },
    ],
    description: (
      <React.Fragment>
        This set of icons are designed for usage in the PRAISE HK app. These are
        translated versions of the recognized{" "}
        <a href="https://www.hko.gov.hk/textonly/v2/explain/wxicon_e.htm">
          weather icons
        </a>{" "}
        from the Hong Kong Observatory, the official government weather forecast
        agency.
      </React.Fragment>
    ),
  },
  {
    title: "Transit Icons",
    icons: [
      { id: "Car", src: carIcon },
      { id: "Taxi", src: taxiIcon },
      { id: "Mini Bus", src: miniBusIcon },
      { id: "Bus", src: busIcon },
      { id: "MTR", src: mtrIcon },
      { id: "Flight", src: flightIcon },
      { id: "Peak Tram", src: peakTramIcon },
      { id: "Tram", src: tramIcon },
      { id: "Cable Car", src: cableCarIcon },
      { id: "Ferry", src: ferryIcon },
      { id: "Walking", src: walkingIcon },
      { id: "Biking", src: bikingIcon },
    ],
  },
  {
    title: "Location Icons",
    icons: [
      { id: "Home", src: homeIcon },
      { id: "School", src: schoolIcon },
      { id: "Library", src: libraryIcon },
      { id: "Work", src: workIcon },
      { id: "Transit", src: transitIcon },
      { id: "Urban", src: urbanIcon },
      { id: "Suburban", src: suburbanIcon },
      { id: "Nature", src: natureIcon },
      { id: "Outdoor", src: outdoorIcon },
      { id: "Indoor", src: indoorIcon },
    ],
  },
  {
    title: "Moesif",
    icons: [
      { id: "Billing", src: billingIcon },
      { id: "Keyboard", src: keyboardIcon },
      { id: "QR", src: qrCodeIcon },
      { id: "Flashlight", src: flashlightIcon },
      { id: "Blank Template", src: blankTemplateIcon },
      { id: "Inactivity", src: inactivityIcon },
      { id: "Rate Error", src: rateLimitErrorIcon },
      { id: "Review Error", src: reviewErrorIcon },
      { id: "Review Blck", src: reviewBlockingIcon },
      { id: "Deprecated", src: deprecatedErrorIcon },
      { id: "API Info", src: apiInfoIcon },
      { id: "CompanyInfo", src: companyInfoIcon },
      { id: "User Info", src: userInfoIcon },
      { id: "Campaign", src: campaignIcon },
      { id: "Session Token", src: sessionTokenIcon },
      { id: "Geo", src: geoIcon },
      { id: "UserAgent", src: userAgentIcon },
      { id: "Metadata", src: metadataIcon },
      { id: "Single User", src: singleUserIcon },
      { id: "Client Integration", src: clientIntegrationIcon },
      { id: "Alert", src: alertIcon },
      { id: "Getting Started", src: gettingStartedIcon },
      { id: "Behavior Email", src: behaviorEmailIcon },
      { id: "FAQ", src: faqIcon },
      { id: "Blog", src: blogIcon },
      { id: "Docs", src: docsIcon },
      { id: "Status", src: statusIcon },
      { id: "Books", src: booksIcon },
      { id: "Compliance", src: complianceIcon },
      { id: "Reference", src: referenceIcon },
      { id: "GDPR", src: gdpricon },
      { id: "Infrastructure", src: infrastructureIcon },
      { id: "customers", src: customersIcon },
      { id: "Integration", src: integrationIcon },
      { id: "Hacker", src: hackerIcon },
      { id: "Compare", src: compareIcon },
      { id: "Developer Relations", src: developerRelationsIcon },
      { id: "Customer Success", src: customerSuccessIcon },
      { id: "Engineering", src: engineeringIcon },
      { id: "Security", src: securityIcon },
      { id: "Product Management", src: productManagementIcon },
      { id: "Third Party", src: thirdpartyIcon },
      { id: "Growth", src: growthicon },
      { id: "Log", src: logIcon },
      { id: "Web", src: webIcon },
      { id: "Dashboard", src: dashboardIcon },
      { id: "Monitoring", src: monitoringIcon },
      { id: "Puzzle", src: puzzleIcon },
      { id: "Embeddd", src: embeddedIcon },
      { id: "Analytics", src: analyticsIcon },
    ],
    description: (
      <React.Fragment>
        These icons acopmany navigation text found in the header of the{" "}
        <a href="http://www.moesif.com" target="_blank" rel="noreferrer">
          Moesif landing page
        </a>{" "}
        as well as the main app.
      </React.Fragment>
    ),
  },
];

const IconItem = ({ id, iconSrc }) => {
  return (
    <div className="iconography-grid__icon">
      <SVG src={iconSrc} className="icon" />
      <p>{id}</p>
    </div>
  );
};

const IconGrid = ({ title, icons, description }) => {
  return (
    <ProjectLayout.Section className="icongraphy-section">
      <div className="iconography-grid">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {icons.map((icon) => (
          <IconItem key={icon.id} id={icon.id} iconSrc={icon.src} />
        ))}
      </div>
    </ProjectLayout.Section>
  );
};

const Iconography = (
  <ProjectLayout.Body>
    <ProjectLayout.Section className="iconography-header">
      <SVG src={iconHeader} alt="icon" />
      <div className="text">
        <p>
          Icons are simple images used in context to communicate. They are
          easily recognizable and memorable. It has become an essential language
          for navigation through life, both in the real world and on electronic
          devices.
        </p>
        <p>
          This series of icons are designed to be used for various projects I've
          worked on. Most of these icons draw inspiration from pre-existing
          ones, while a few are new and unique to their application. Following
          Google's Material Design Principle, the use of a 24 x 24 pixel grid
          ensures the icon aligns with display pixels on a mobile device.
          Minimum stroke weight of 2px for both positive and negative space to
          ensure legibility on a small screen. The consistent treatment also
          unifies them into a single set, allowing them to look cohesive
          existing in the same page.
        </p>
      </div>
    </ProjectLayout.Section>
    {ICONSSETS.map((set) => (
      <IconGrid
        key={set.title}
        title={set.title}
        icons={set.icons}
        description={set.description}
      />
    ))}
  </ProjectLayout.Body>
);

export default Iconography;
