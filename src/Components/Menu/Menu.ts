import styled from "styled-components";

export const Container = styled.div`
  font-family: "Ubuntu", sans-serif;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 30px;
  top: 0;
  img {
    width: 80px;
  }
  span {
    margin-left: 10px;
    color: #fff;
  }
  .avatar {
    border-radius: 50%;
  }
`;

export const Options = styled.div`
  padding: 0px 20px;
  .menu-button {
    width: 80%;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #cccc;
    padding: 19px 30px;
    cursor: pointer;
    svg {
      font-size: 1.3rem;
    }
  }

  .menu-options {
    text-align: center;
    width: 80%;
    list-style-type: none;
    margin-bottom: 30px;
    margin: 0;
    padding: 0;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
  }

  .menu-option-item {
    padding: 19px 30px;
    cursor: pointer;
    text-align: center;
    svg {
      font-size: 1.3rem;
    }
    .active-icon {
      background: #5a4ca7 0% 0% no-repeat padding-box;
      border-radius: 3px;
      opacity: 1;
      color: #fff;
    }
  }

  .menu-option-item:hover {
    background-color: #f7fafc;
  }
`;
