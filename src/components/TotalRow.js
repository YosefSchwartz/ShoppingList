function TotalRow({ total }) {
  return (
    <div className="list-item list-item-total">
      <span style={{width: '10%'}}></span>
      <span className="list-item-name">Total:</span>
      <span className="list-item-price">{total} NIS</span>
      <div style={{width: '25%'}}></div>
    </div>
  );
}

export default TotalRow;
