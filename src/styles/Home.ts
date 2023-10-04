import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  color: #4e5d66;
  .card-container-grafic {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
  }
  .card-container {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
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
  .cards-home {
    margin-right: 40px;
    margin-bottom: 20px;
    width: 222px;
    height: 160px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 12px;
    margin-top: 30px;
    .cards-body-home {
      padding: 20px 20px;
      padding-top: 0px;
      .alerts {
        color: red;
      }
      .grownt {
        width: 47px;
        height: 23px;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 0px 20px #0000001a;
        border-radius: 12px;
      }
      p {
        font-size: 0.7rem;
        color: #109e8e;
        font-weight: 500;
        margin-bottom: 10px;
      }
      h4 {
        color: #4e5d66;
        font-weight: normal;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        margin-right: 5px;
        margin-left: 5px;
        justify-content: space-between;
      }
    }
  }
  .cards-grafic {
    padding: 10px 20px;
    padding-top: 0px;
    margin-bottom: 30px;
    justify-content: space-around;
    margin-right: 35px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 12px;
  }
  .input-grafic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: right;
    margin-top: 10px;
    h2 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    select {
      width: 150px;
      height: 37px;
      background: #f3f5f6 0% 0% no-repeat padding-box;
      border-radius: 9px;
      opacity: 1;
      float: right;
      color: #4e5d66;
    }
  }
  .card-products {
    width: 70%;
    padding: 40px 70px;
    margin-top: 40px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 12px;
    h2 {
      font-size: 1.5rem;
      font-weight: normal;
    }
  }
  .search {
    background: #f3f5f6 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    button {
      background-color: transparent;
      padding: 0;
      svg {
        margin-right: 20px;
      }
    }
  }
`;
