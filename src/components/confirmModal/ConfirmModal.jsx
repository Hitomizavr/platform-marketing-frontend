const ConfirmModal = ({ closeModal }) => {
  return (
    <div className="confirm-modal">
      <p className="confirm-modal-text-notification">
        Thank you, please wait for the letter. Check your mail - the letter will
        arrive within 5 minutes (usually instantly).
      </p>
      <span className="button-icon-close" title="Закрыть" onClick={closeModal}>
        ×
      </span>
    </div>
  );
};

export default ConfirmModal;
