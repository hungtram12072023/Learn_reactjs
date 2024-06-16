import React from 'react';
import styled from "styled-components";

// phai viet ngoai component
// const StyleCard  = styled.tag
//` ben trong se viet css in js`
const StyleCard = styled.div`
    position: relative;
    margin: 20px;
    width: 400px;
`;
const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius:8px;

`;
const CardImg = styled.img`
    display: block;
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius: inherit;
`;
const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 10;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    bottom: 0;
    width: calc(100% - 36px);
`;
const CardAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    margin-right: 30px;
`
const CardContainer = styled.div`
    display: flex;
    align-items: center;
`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

`;
const UserName = styled.span`
    margin-left: -20px;
`;
const Discrip = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Price = styled.span`
    font-size: 16px;
    background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
    -webkit-background-clip: text;
    font-weight: bold;
    color: transparent;
`;
const Card = () => {
    return (
        <StyleCard>
            <CardImage>
            <CardImg src="https://cdn.dribbble.com/userupload/10359937/file/original-5de5e5f152d2b7b04903fd27ff92616c.png?resize=450x338&vertical=center" alt="" />
            </CardImage>
            <CardContent>    
                <CardTop>
                    <CardContainer>
                        <CardAvatar src="https://cdn.dribbble.com/userupload/10359937/file/original-5de5e5f152d2b7b04903fd27ff92616c.png?resize=450x338&vertical=center" alt="" />
                        <UserName>@zdzon</UserName>
                    </CardContainer>
                    <div>250</div>
                </CardTop>
                <Discrip>
                    <h4>Cosmic Perspective</h4>
                    <Price>12,000 PSL</Price>
                </Discrip>
            </CardContent>
        </StyleCard>
        
    );
};

export default Card;