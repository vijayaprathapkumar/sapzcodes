"use client";
import React from "react";
import { FooterDetails } from "@/config/footer";
import {
  Bootomwrapper,
  FacebookIcon,
  Footereraper,
  GoogleIcon,
  InstaIcon,
  LinkedInIcon,
  Maindiv,
  TwitterIcon,
} from "./Footer.styled";
import Link from "next/link";

const FooterComponent = ({ scrollToSection }: any) => {
  return (
    <div className="layout-gap">
      <Footereraper>
        {FooterDetails.map((item) => {
          const {
            image,
            title,
            description,
            subApp,
            subWeb,
            subErp,
            subout,
            subuse,
          } = item;
          return (
            <Maindiv key={title}>
              {image && <img src={image} alt="logo" />}
              <h4>{title}</h4>
              {description && <p>{description}</p>}
              <ul>
                {subApp && (
                  <li onClick={() => scrollToSection(subApp)}>{subApp}</li>
                )}
                {subWeb && (
                  <li>
                    <Link href={'/careers'}>{subWeb}</Link>
                  </li>
                )}
                {subErp && (
                  <li onClick={() => scrollToSection(subErp)}>{subErp}</li>
                )}
                {subout && (
                  <li onClick={() => scrollToSection(subout)}>{subout}</li>
                )}
                {subuse && (
                  <li onClick={() => scrollToSection(subuse)}>{subuse}</li>
                )}
              </ul>
            </Maindiv>
          );
        })}
      </Footereraper>
      <hr />
      <Bootomwrapper>
        <p>Copyright © 2024 Sapzcodes. All Rights Reserved.</p>
        <div>
          <FacebookIcon />
          <GoogleIcon />
          <InstaIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </Bootomwrapper>
    </div>
  );
};

export default FooterComponent;
