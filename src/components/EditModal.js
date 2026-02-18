function EditModal({ item, onChange, onSubmit, onClose }) {
  const nameError = item.name.trim() === '';
  const priceError = item.price === '' || Number(item.price) <= 0;
  const isValid = !nameError && !priceError;

  const handleSubmit = () => {
    if (isValid) {
      onSubmit();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="material-symbols-outlined modal-close" onClick={onClose}>cancel</span>
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-input-wrapper">
              <input
                type="text"
                placeholder="Name"
                className={`modal-input modal-input-name ${nameError ? 'modal-input-error' : ''}`}
                value={item.name}
                onChange={(e) => onChange({ ...item, name: e.target.value })}
              />
              {nameError && <span className="modal-error">Name is required</span>}
            </div>
            <div className="modal-input-wrapper">
              <input
                type="number"
                placeholder="Price"
                className={`modal-input modal-input-price ${priceError ? 'modal-input-error' : ''}`}
                value={item.price}
                onChange={(e) => onChange({ ...item, price: e.target.value })}
                min="0"
              />
              {priceError && <span className="modal-error">Price must be positive</span>}
            </div>
          </div>
          <textarea
            placeholder="Description"
            className="modal-input modal-textarea"
            value={item.description}
            onChange={(e) => onChange({ ...item, description: e.target.value })}
          />
        </div>
        <div className="modal-actions">
          <span
            className={`material-symbols-outlined modal-button-send ${!isValid ? 'modal-button-disabled' : ''}`}
            onClick={handleSubmit}
          >
            send
          </span>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
