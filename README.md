# Shopping List

A React application for managing a shopping list. Users can view, add, edit, and delete items, with each item having a name, price, and description.

## Features

- View list of shopping items with total price
- Add new items
- Edit existing items
- Delete items with confirmation
- View item details
- Input validation (name required, price must be positive)

## Tech Stack

- React 19
- Redux Toolkit (RTK Query) for API state management
- React Router for navigation

## Project Structure

```
src/
├── components/
│   ├── ConfirmModal.js    # Delete confirmation dialog
│   ├── EditModal.js       # Create/Edit item form modal
│   ├── ListItem.js        # Single item row component
│   └── TotalRow.js        # Total price display
├── store/
│   ├── itemsApi.js        # RTK Query API slice (endpoints)
│   └── store.js           # Redux store configuration
├── App.js                 # Main app with ShoppingList component & routing
├── App.css                # All application styles
├── ItemDetail.js          # Item detail page
└── index.js               # App entry point with Redux Provider
```

## Design Decisions

- **RTK Query**: Chosen for efficient server state management with built-in caching, automatic refetching on mutations, and loading/error states out of the box.
- **Component Structure**: UI split into reusable components (ListItem, modals) to keep code organized and maintainable.
- **Single CSS File**: Kept styling in one file for simplicity given the project scope.
- **Environment Variables**: API URL is configurable via `.env` for easy deployment to different environments.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Edit `.env` and set your API URL:
```
REACT_APP_API_URL=http://localhost:3200/api
```
Change `3200` to match your backend server port.

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## API Endpoints

The app expects a REST API with the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/items | Get all items |
| GET | /api/items/:id | Get item by ID |
| POST | /api/items | Create new item |
| PUT | /api/items/:id | Update item |
| DELETE | /api/items/:id | Delete item |

## Implementation Checklist

- [x] List all items from API
- [x] Display item details (name, price, description)
- [x] Add new item with validation
- [x] Edit existing item
- [x] Delete item with confirmation
- [x] Navigate to item detail page
- [x] Total price calculation
- [x] Loading and error states
- [x] Configurable API URL via environment variable
