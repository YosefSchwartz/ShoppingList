function ListItem({ item, onItemClick, onEdit, onDelete }) {
  return (
    <div className="list-item list-item-clickable" onClick={() => onItemClick(item.id)}>
      <span className="list-item-id">{item.id}</span>
      <span className="list-item-name">{item.name}</span>
      <span className="list-item-price">{item.price} NIS</span>
      <div className='list-item-price-container' onClick={(e) => e.stopPropagation()}>
        <span className="material-symbols-outlined list-item-button" onClick={() => onEdit(item)}>
          edit
        </span>
        <span className="list-item-separator"/>
        <span className="material-symbols-outlined list-item-button" onClick={() => onDelete(item)}>
          delete
        </span>
      </div>
    </div>
  );
}

export default ListItem;
