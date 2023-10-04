import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  width: 894px;
  height: 1000px;
  transform: translate(-50%, -50%);
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  font-family: "Ubuntu", sans-serif;
  .logo {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .input-login {
    position: fixed;
    top: 79%;
    left: 50%;
    letter-spacing: 0.48px;
    color: #1e252b;
    transform: translate(-50%, -50%);
    h3 {
      text-align: center;
      font-weight: 600;
    }
    input {
      background: #f3f5f6 0% 0% no-repeat padding-box;
      border-radius: 8px;
      opacity: 1;
      width: 400px;
    }
    .button-login {
      width: 120px;
      height: 40px;
      background: #5a4ca7 0% 0% no-repeat padding-box;
      border-radius: 8px;
      opacity: 1;
      display: block;
      margin: 50px auto 0;
      color: #fff;
    }
  }
`;
