import React from 'react';
import styled from 'styled-components';
import { FacebookProvider, Comments, EmbeddedPost, Page } from 'react-facebook';


const Container = styled.div`
    display: grid;
    place-content: center;
    margin-top: 20vh;
    grid-template-columns: 5% 1fr 1fr 5% ;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    '. pages pages .'
    '. comment stopcount . ';

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        row-gap: 50px;
        grid-template-areas:
        'pages'
        'comment'
        'stopcount';

    }

    .comment {
    grid-area: comment;

    }
    .stopcount {
        grid-area: stopcount;

    }
    .pages {
        grid-area: pages;
    }

`;

const Wrapper = styled.div`
 display: grid;
 justify-content: center;
 width: 100%;
 height: 100%;
`;

const PageWrapper = styled(Wrapper)`
background-color: ${props => props.trump ? 'red' : 'blue'};
`;

const Pages = styled.div`
 display: flex;
 justify-content: center;

 @media(max-width: 600px) {
     flex-direction: column;
 }

`


const Facebook = () => {
    return (
        <Container>
            <Wrapper className='stopcount'>
                <FacebookProvider appId="1832935643512194">
                    <EmbeddedPost href="https://www.facebook.com/DonaldTrump/posts/10165764490280725" />
                </FacebookProvider>
            </Wrapper>

            <Wrapper className='comment'>
                <FacebookProvider appId="1832935643512194">
                    <Comments href="https://www.facebook.com/DonaldTrump/posts/10165764490280725" />
                </FacebookProvider>
            </Wrapper>
            <Pages className='pages'>
                <PageWrapper>
                    <FacebookProvider appId="1832935643512194">
                        <Page href="https://www.facebook.com/joebiden" tabs="timeline" />
                    </FacebookProvider>
                </PageWrapper>
                <PageWrapper trump>
                    <FacebookProvider appId="1832935643512194">
                        <Page href="https://www.facebook.com/DonaldTrump" tabs="timeline" />
                    </FacebookProvider>
                </PageWrapper>
            </Pages>
        </Container>
    );
}

export default Facebook
