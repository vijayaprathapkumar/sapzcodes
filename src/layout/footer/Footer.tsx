"use client";
import React from "react";
import { FooterDetails, Footericons } from "@/config/footer";
import {
  Bootomwrapper,
  Footerwrapper,
  Iconwrapper,
  LinkStyled,
  Maindiv,
} from "./Footer.styled";
import Link from "next/link";

const FooterComponent = () => {
  const currentyear = new Date().getFullYear();

  return (
    <div className="layout-gap">
      <Footerwrapper>
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
                {subApp && <li>{subApp}</li>}
                {subWeb && <li>{subWeb}</li>}
                {subErp && <li>{subErp}</li>}
                {subout && <li>{subout}</li>}
                {subuse && <li>{subuse}</li>}
              </ul>
            </Maindiv>
          );
        })}
      </Footerwrapper>
      <hr />
      <Bootomwrapper>
        <p>Copyright © {currentyear} Sapzcodes. All Rights Reserved.</p>
        <Iconwrapper>
          {Footericons.map((item, index) => (
            <LinkStyled key={index} href={item.href}> {item.icon} </LinkStyled>
          ))}
        </Iconwrapper>
      </Bootomwrapper>
    </div>
  );
};

export default FooterComponent;
