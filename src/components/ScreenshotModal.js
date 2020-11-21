import React from 'react';
import Modal from "react-modal";
import AwIcon from "awicons-react";

import "../style/ScreenshotModal.scss"

/**
 * Creates a Modal containing the screenshot to show.
 *
 * @param isModalOpen is a boolean indicating if the modal should be shown or not
 * @param closeModal is a function of the action to be done when the user want to close the modal
 * @param screenshot is the blob of the image to show
 * @returns {JSX.Element}
 *
 * @author Federico Rispo
 */
export default function ScreenshotModal({isModalOpen, closeModal, screenshot}) {
  return (
    <Modal
      className={'screenshotModal'}
      overlayClassName={'overlayScreenshotModal'}
      isOpen={isModalOpen}
      onClose={closeModal}
      onRequestClose={closeModal}
    >
      <AwIcon
        iconName="times"
        className={"closeScreenshotModal"}
        onClick={closeModal}
      />
      <img src={screenshot} alt="generated screenshot"/>
    </Modal>
  );
}