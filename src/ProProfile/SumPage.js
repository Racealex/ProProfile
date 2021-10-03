import React from 'react'
import styled from 'styled-components';
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import VidoeSection from './VideoSection'
import ContactSection from './ContactSection'
import FooterSection from './FooterSection'

const SumPage = () => {
    return(
       <Container>
           <Wrapper>
           <HeroSection/>
        <ServiceSection/>
        <VidoeSection/>
        <ContactSection/>
        <FooterSection/>
               </Wrapper>
           </Container>
    )
}

export default SumPage;

const Container = styled.div`
`;
const Wrapper = styled.div``;