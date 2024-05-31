import React from 'react';
import { AboutDiv, DetailWrapper, MainWrapper } from './Details.styled';

interface Detail {
    image: string;
    title: string;
    subTitle: string;
    description: string;
    objectFit?: string;
    imageAlignment: string;
    background?: string;
    border?: string;
    height: string;
    width: string;
    marginTop: string;
    button: {
        text: string;
    };
}

const DetailComponent = ({ detail }:{ detail: Detail }) => {
    const { image, title, subTitle, description, objectFit, imageAlignment,
        background, border, height, width, marginTop, button } = detail;

    return (
        <>
            <MainWrapper background={background} imageAlignment={imageAlignment}>
                <AboutDiv>
                    <h4>{title}</h4>
                    <h2>{subTitle}</h2>
                    <p>{description}</p>
                    <button>
                        {button.text} <img src='/images/Button_Arrow.png' alt='Arrow' width={27} height={13} />
                    </button>
                </AboutDiv>
                <DetailWrapper
                    objectFit={objectFit}
                    imageAlignment={imageAlignment}
                    border={border}
                    height={height}
                    width={width}
                    marginTop={marginTop}
                >
                    <img src={image} alt="About" />
                </DetailWrapper>
            </MainWrapper>
        </>
    );
};

export default DetailComponent;
