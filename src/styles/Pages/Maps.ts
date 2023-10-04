import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  color: #4e5d66;
  h2 {
    font-size: 0.9rem;
    color: #4e5d66;
  }
  h1 {
    font-size: 1.6rem;
    font-weight: bolder;
    margin-top: 30px;
  }
  h3 {
    margin-bottom: 30px;
    font-size: 1.4rem;
    color: #5a4ca7;
    font-weight: bolder;
  }
  .map-parent {
    height: 500px;
    border-radius: 4px;
    margin-top: 30px;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
  }
  .map-container {
    width: 98%;
    height: 100vh;
  }
  .tooltip {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 8px;
    button {
      margin-top: 30px;
      width: 162px;
      height: 50px;
      background: #5b4da7 0% 0% no-repeat padding-box;
      box-shadow: 5px 5px 20px #00000029;
      color: #fff;
      font-weight: normal;
      border-radius: 31px;
      opacity: 1;
      svg {
        margin-left: 20px;
        color: #9d9d9d;
        font-size: 1rem;
        width: 36px;
        height: 36px;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 5px 5px 10px #00000029;
        border-radius: 25px;
        opacity: 1;
      }
    }
    h1 {
      text-align: left;
      font-weight: normal;
      font-size: 1.5rem;
      letter-spacing: 0.88px;
      color: #2c3e50;
      opacity: 1;
    }
    &__grid {
      margin-top: 20px;
      margin-right: 20px;
      top: 472px;
      width: 154px;
      height: 94px;
      background: #f7f8fa 0% 0% no-repeat padding-box;
      border-radius: 3px;
      opacity: 1;
      p {
        text-align: left;
        font-weight: normal;
        letter-spacing: 0.64px;
        color: #2c3e50;
        opacity: 1;
        font-size: 0.8rem;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
    &__value {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 8px;
      svg {
        font-size: 1.2rem;
      }
      h2 {
        margin-left: 10px;
        font-weight: normal;
        font-size: 1.2rem;
        letter-spacing: 0.88px;
        color: #2c3e50;
        opacity: 1;
      }
    }
  }
`;
