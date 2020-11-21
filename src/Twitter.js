import React from 'react'
import styled from 'styled-components'
import { TwitterTimelineEmbed, TwitterTweetEmbed} from 'react-twitter-embed';



 const Wrapper = styled.div`
 display: flex;
 width: 100%;
 height: 100%;
 padding: 20px;
 background-color: ${props => props.trump ? 'red' : 'blue'};
 justify-content: space-evenly;
 `;


const Twitter = () => {
    return (
        <>

            <Wrapper trump>
                <h1>Trump</h1>
            </Wrapper>
            <Wrapper trump>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="realDonaldTrump"
                options={{height: 400}}
            />
                <TwitterTweetEmbed tweetId={'1323864823680126977'} />
            </Wrapper>


            <Wrapper>
                <h1>Biden</h1>
            </Wrapper>
            <Wrapper>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="DrBiden"
                options={{height: 400}}
            />
                <TwitterTweetEmbed tweetId={'1323868327744253952'} />
            </Wrapper>
        </>
    )
}

export default Twitter;
