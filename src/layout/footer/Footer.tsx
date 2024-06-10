import React, { Fragment } from 'react';
import { FooterDetails } from '@/config/footer';
import { Bootomwrapper, FacebookIcon, Footereraper, GoogleIcon, IconWrapper, InstaIcon, LinkedInIcon, Maindiv, TwitterIcon } from './Footer.styled';

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();

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
                <p>Copyright © {currentYear} Sapzcodes. All Rights Reserved.</p>
                <IconWrapper>
                    <a href="https://www.facebook.com">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.google.com">
                        <GoogleIcon />
                    </a>
                    <a href="https://www.instagram.com">
                        <InstaIcon />
                    </a>
                    <a href="https://twitter.com">
                        <TwitterIcon />
                    </a>
                    <a href="https://www.linkedin.com">
                        <LinkedInIcon />
                    </a>
                </IconWrapper>
            </Bootomwrapper>
        </Fragment>
    );
};

export default FooterComponent;