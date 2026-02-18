function ConfirmModal({ itemName, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal modal-confirm">
        <p className="modal-confirm-text">Are you sure you want to delete "{itemName}"?</p>
        <div className="modal-confirm-actions">
          <button className="modal-button-cancel" onClick={onCancel}>Cancel</button>
          <button className="modal-button-confirm" onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
