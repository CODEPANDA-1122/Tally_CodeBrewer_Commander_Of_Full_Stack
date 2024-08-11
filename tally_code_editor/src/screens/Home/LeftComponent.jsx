import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { ModalContext } from '../../context/ModalContext';

const StyledLeftComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #222A68;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        position: relative;
        width: 100%;
        height: auto;
    }
`;

const ContentContainer = styled.div`
    text-align: center;
`;

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
    border-radius: 40px;
`;

const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    color: #adeee3;
    margin-bottom: 0.75rem;

    span {
        font-weight: 700;
    }
`;

const SubHeading = styled.div`
    font-size: 1.5rem;
    color: #fff;
    opacity: 0.7;
    margin-bottom: 1.5rem;
`;

const AddNewButton = styled.button`
    padding: 0.25rem 1.5rem;
    font-size: 1rem;
    border: none;
    color: #04151F;
    border-radius: 30px;
    box-shadow: 0px 0px 4px 2px #8b8b8b;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: all 0.2s ease-in-out;

    span {
        font-size: 2rem;
        font-weight: 700;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        box-shadow: 0px 0px 6px 2px #8b8b8b;
    }
`;

const NavigateButton = styled(AddNewButton)`  /* Inherit styles from AddNewButton */
    margin-top: 1rem; /* Add margin to separate from other buttons */
`;

const LeftComponent = () => {
    const { openModal } = useContext(ModalContext);
    const navigate = useNavigate(); // Use useNavigate

    return (
        <StyledLeftComponent>
            <ContentContainer>
                <Logo src={logo} alt="Tally CodeBrewer Logo" />
                <MainHeading>
                    <span>Tally_CodeBrewer</span> Code_Editor
                </MainHeading>
                <SubHeading>Code. Compile. Debug.</SubHeading>
                <AddNewButton onClick={() => openModal({
                    show: true,
                    modalType: 3,
                    identifiers: {
                        folderId: "",
                        cardId: "",
                    }
                })}>
                    <span>+</span> Create New Coding Playground
                </AddNewButton>
                <NavigateButton onClick={() => navigate('/codingArena')}>
                    <span>→</span> Go to Coding Arena
                </NavigateButton>
            </ContentContainer>
        </StyledLeftComponent>
    );
};

export default LeftComponent;
