import styled from 'styled-components';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin-top: 15vh;
        width: 180px;
    }

    input {
        height: 45px;
        width: 80vw;
        border: 1px solid rgb(212, 212, 212);
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        margin: 5px auto 0 auto;
        ::placeholder{
            color: rgb(130, 130, 130);
        }
    }

    button {
        height: 45px;
        width: 80vw;
        text-align: center;
        background-color: rgb(82, 182, 255);
        color: rgb(255, 255, 255);
        border: none;
        border-radius: 5px;
        font-size: 21px;
        margin: 10px auto 0 auto;
    }

    p {
        margin: 40px auto 0 auto;
        font-size: 14px;
        color: rgb(82, 182, 255);
        text-decoration: underline rgb(82, 182, 255);
    }
`

export default Page;