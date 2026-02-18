import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {
  useGetItemsQuery,
  useCreateItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} from './store/itemsApi';
import ItemDetail from './ItemDetail';
import ListItem from './components/ListItem';
import TotalRow from './components/TotalRow';
import EditModal from './components/EditModal';
import ConfirmModal from './components/ConfirmModal';
import './App.css';

function ShoppingList() {
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', price: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingItem, setDeletingItem] = useState(null);
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetItemsQuery();
  const [createItem] = useCreateItemMutation();
  const [updateItem] = useUpdateItemMutation();
  const [deleteItem] = useDeleteItemMutation();

  const handleSubmit = async () => {
    const itemData = {
      name: newItem.name,
      price: Number(newItem.price),
      description: newItem.description,
    };

    if (editingId) {
      await updateItem({ id: editingId, ...itemData });
    } else {
      await createItem(itemData);
    }

    setShowModal(false);
    setNewItem({ name: '', price: '', description: '' });
    setEditingId(null);
  };

  const handleEdit = (item) => {
    setNewItem({ name: item.name, price: item.price, description: item.description || '' });
    setEditingId(item.id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewItem({ name: '', price: '', description: '' });
    setEditingId(null);
  };

  const handleDelete = (item) => {
    setDeletingItem(item);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    await deleteItem(deletingItem.id);
    setShowDeleteModal(false);
    setDeletingItem(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDeletingItem(null);
  };

  const handleItemClick = (id) => {
    navigate(`/item/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading items</div>;
  }

  return (
    <div>
        <h2>
          Shopping List
        </h2>
        <div className="list-container">
          {
            data.items.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onItemClick={handleItemClick}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          }
        </div>
        {data.items.length > 0 && (
          <TotalRow total={data.items.reduce((acc, item) => acc + item.price, 0)} />
        )}
        <div className='add-item-container'>
          <button className='add-item-button' onClick={() => setShowModal(true)}>+ Add Product</button>
        </div>

        {showModal && (
          <EditModal
            item={newItem}
            onChange={setNewItem}
            onSubmit={handleSubmit}
            onClose={handleCloseModal}
          />
        )}

        {showDeleteModal && (
          <ConfirmModal
            itemName={deletingItem?.name}
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
