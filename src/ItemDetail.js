import { useParams, useNavigate } from 'react-router-dom';
import { useGetItemByIdQuery } from './store/itemsApi';
import './App.css';

function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetItemByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data.item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="item-detail">
      <span
        className="material-symbols-outlined item-detail-back"
        onClick={() => navigate('/')}
      >
        arrow_back
      </span>
      <h3>{data.item.name}</h3>
      <p>{data.item.description || 'No description available'}</p>
    </div>
  );
}

export default ItemDetail;
