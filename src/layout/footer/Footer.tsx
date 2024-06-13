"use client";
import React, { Fragment } from 'react';
import { FooterDetails } from '@/config/footer';
import { Bootomwrapper, FacebookIcon, Footereraper, GoogleIcon, IconWrapper, InstaIcon, LinkedInIcon, Maindiv, TwitterIcon } from './Footer.styled';   

const FooterComponent = () => {
    return (
        <Fragment>
            <Footereraper>
                {FooterDetails.map((item) => {
                    const { image, title, description, subApp, subWeb, subErp, subout, subuse } = item;
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
            </Footereraper>
            <hr />
            <Bootomwrapper>
                <p>Copyright © 2024 Sapzcodes. All Rights Reserved.</p>
                <IconWrapper>
                    <FacebookIcon />
                    <GoogleIcon />
                    <InstaIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                </IconWrapper>
            </Bootomwrapper>
        </Fragment>
    );
};

export default FooterComponent;