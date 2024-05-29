import React from 'react';
import { AboutDiv, DetailWrapper, MainWrapper } from './Details.styled';

interface DetailComponentProps {
    reverse: boolean;
    imgSrc: string;
    index: number;
}

const DetailComponent = ({ reverse, imgSrc, index }: DetailComponentProps) => {
    return (
        <MainWrapper reverse={reverse} index={index}>
            <AboutDiv reverse={reverse} index={index}>
                <h4>Detail</h4>
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, ad!</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odit, in inventore obcaecati, vitae id provident, nihil vero voluptas eius eveniet veritatis reprehenderit rerum. Dicta reiciendis maiores quos explicabo nisi!</p>
                <button>Know more <img src='/images/Button_Arrow.png' alt='Arrow' width={27} height={13} /></button>
            </AboutDiv>
            <DetailWrapper reverse={reverse} index={index}>
                <img src={imgSrc} alt="About" />
            </DetailWrapper>
        </MainWrapper>
    );
};

export default DetailComponent;
