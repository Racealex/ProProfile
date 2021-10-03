import React from 'react';
import styled from 'styled-components';

const VideoSection = () => {
    return (
        <Container>
            <Wrapper>
                <Video/>
            </Wrapper>
        </Container>
    )
}

export default VideoSection;


const Video = styled.video`
width: 90%;
height: 90%;
object-fit: cover;
margin: 0 auto;
background-color: blue;
`;
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: #5f2c3e 
`;
const Wrapper = styled.div`
display: flex;
justify-content: center;
 
`;
