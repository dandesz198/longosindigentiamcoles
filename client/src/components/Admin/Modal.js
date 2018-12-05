import React, { Component } from "react";
import { view } from "react-stax";
import styled from "styled-components";
import ReactModal from "react-responsive-modal";
import modalStore from "../../stores/modal";

const Wrapper = styled.div`
  .overlay {
    background-color: pink;
  }
  .modal {
    color: pink !important;
  }
`;

const store = modalStore;
class Modal extends Component {
  onOpenModal = () => {
    setTimeout(function() {
      store.shown = true;
    }, 20000);
  };

  onClose = () => {};

  render() {
    return (
      <Wrapper>
        <ReactModal
          open={store.shown}
          showCloseIcon={false}
          closeOnOverlayClick={false}
          onClose={this.onClose}
          center
          styles={{
            overlay: {
              backgroundColor: "transparent",
              maxWidth: "300px",
              maxHeight: "100px",
              position: "absolute",
              bottom: "10px",
              right: "10px",
              top: "auto",
              left: "auto"
            },
            modal: {
              backgroundColor: "#2f3542",
              color: "white",

              maxWidth: "300px",
              fontSize: ".7rem",
              padding: "0 1rem"
            }
          }}
        >
          <p>{store.head}</p>
          <h2>{store.body}</h2>
        </ReactModal>
      </Wrapper>
    );
  }
}

const trigger = function(error) {
  if (error.response) {
    if (error.response.data.email) {
      modalStore.show(
        error.response.data.email,
        "Something is not right. Please try again later!"
      );
    } else if (error.response.data.password) {
      modalStore.show(
        error.response.data.password,
        "Something is not right. Please try again later!"
      );
    }
  }
};

export default view(Modal);
export { trigger };
