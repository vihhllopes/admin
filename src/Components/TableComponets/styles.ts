import styled from "styled-components";

export const Container = styled.div`
  .grid-products {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }
  .table-products {
    width: 100%;
    margin-bottom: 40px;
    justify-content: space-between;
    display: block;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
  }
  .border-table {
    background-color: #4e5d66;
    border-radius: 9px;
    width: 100%;
    th {
      color: #ffff;
      font-size: 0.8rem;
      border-right: 2px solid #fff;
      padding-right: 170px;
      text-align: left;
    }
  }
  .table-infor {
    color: #4e5d66;
    font-weight: 400;
    width: 100%;
    padding: 0;
    word-wrap: break-word;
    white-space: normal;
    .td-space {
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .td-space-description {
      max-width: 400px;
      word-wrap: break-word;
      white-space: normal;
      padding: 0;
    }
  }
  .button-next-page {
    float: right;
    font-weight: normal;
    color: #667a86;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      color: #000;
      font-size: 1.5rem;
    }
  }
`;
