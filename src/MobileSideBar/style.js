import styled from "styled-components";

export const Wrapper = styled.aside`
  margin-bottom: 9rem;
  background: #DB0090;
  color: #fff;
  @media (min-width: 992px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    inset: 0;
    display: flex;

    z-index: -1;
    opacity: 0;
    transform: translateX(-100%);
    transition: 0.3s ease-in-out all;
    background: transparent;
  }

  .show-sidebar {
    z-index: 9999;
    opacity: 1;
    transform: translateX(0);

    background: rgba(0, 1, 0, 0.3);
  }

  .content {
    width: 100%;
    border-radius: 10px;
    padding: 3rem 2rem;

    height: 100vh;
    overflow: scroll;
    background-color: white;
  }

  .close-btn {
    /* position: absolute;
top: 48px;
right: 20px; */
    background: transparent;
    border-color: transparent;
    font-size: 1rem;
    color: gray;
    cursor: pointer;
    font-weight: 100;
  }
`;

export const SideLink = styled.div`
    margin: 1rem 0;

    p {
        margin: 1rem 0;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
`;