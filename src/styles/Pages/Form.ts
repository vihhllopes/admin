import styled from "styled-components";

export const Container = styled.div`
  height: 230vh;
  margin: 0;
  color: #4e5d66;
  h2 {
    font-size: 0.9rem;
    color: #4e5d66;
  }
  h1 {
    font-size: 1.6rem;
    font-weight: normal;
    margin-top: 30px;
  }
  h3 {
    margin-bottom: 30px;
    font-size: 1.4rem;
    color: #5a4ca7;
    font-weight: bolder;
  }
  .simple-grid {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-form {
    margin-top: 50px;
    padding: 12px 30px;
    height: 115vh;
    width: 90%;
    border-radius: 20px;
  }
  .form-products {
    h2 {
      font-size: 1.2rem;
      letter-spacing: 0.8px;
      opacity: 1;
    }
    .input-products {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      input {
        width: 250px;
        height: 37px;
        background: #f3f5f6 0% 0% no-repeat padding-box;
        border-radius: 9px;
        opacity: 1;
      }
      label {
        text-align: left;
        font: normal normal normal 16px/30px Ubuntu;
        letter-spacing: 0.32px;
        color: #4e5d66;
        opacity: 1;
      }
      select {
        width: 330px;
        height: 37px;
        background: #f3f5f6 0% 0% no-repeat padding-box;
        border-radius: 9px;
        opacity: 1;
        color: #4e5d66;
      }
      select option {
        content: "Texto Personalizado";
        font-style: italic;
        color: red;
      }
    }
  }
  .input-specification {
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
    input {
      width: 90%;
      height: 37px;
      background: #f3f5f6 0% 0% no-repeat padding-box;
      border-radius: 9px;
      opacity: 1;
    }
    label {
      text-align: left;
      font: normal normal normal 16px/30px Ubuntu;
      letter-spacing: 0.32px;
      color: #4e5d66;
      opacity: 1;
    }
    .largeTextField {
      background: #f3f5f6 0% 0% no-repeat padding-box;
      border-radius: 9px;
      width: 95%;
      height: 100px;
      float: left;
    }
  }
  .card-itens {
    margin-top: 50px;
    padding: 12px 30px;
    height: 50vh;
    width: 90%;
    border-radius: 20px;
    h2 {
      font-size: 1.2rem;
      letter-spacing: 0.8px;
      opacity: 1;
    }
  }
  .grid-itens {
    width: 40%;
  }
  .head-itens {
    justify-content: space-between;
  }
  .button-itens {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-right: 10px;
  }
  .input-itens {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    hr {
      flex-grow: 1;
      height: 1px;
      border: none;
      border-top: 1px solid #b5b5b5;
    }
    input {
      width: 81%;
      padding-right: 30px;
      height: 37px;
      background: #f3f5f6 0% 0% no-repeat padding-box;
      border-radius: 9px;
      opacity: 1;
    }
    label {
      text-align: left;
      font: normal normal normal 16px/30px Ubuntu;
      letter-spacing: 0.32px;
      color: #4e5d66;
      opacity: 1;
    }
    p {
      font-size: 0.2rem;
      display: flex;
    }
    &__tamanho {
      width: 5%;
      margin-right: 5px;
      padding-left: 30px;
      height: 37px;
      background: #f3f5f6 0% 0% no-repeat padding-box;
      border-radius: 9px;
      opacity: 1;
    }
  }
  .button-form {
    margin-top: 80px;
    &__submit {
      font-weight: normal;
      left: 1020px;
      width: 120px;
      height: 40px;
      background: #c0d7e5 0% 0% no-repeat padding-box;
      border-radius: 8px;
      opacity: 1;
    }
    &__cancel {
      font-weight: normal;
      left: 1000px;
      width: 120px;
      height: 40px;
      background: #8b9ca7 0% 0% no-repeat padding-box;
      border-radius: 8px;
    }
  }
`;
