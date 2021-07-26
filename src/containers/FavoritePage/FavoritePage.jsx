import { useSelector } from 'react-redux';

export default function FavoritePage() {
  const storeDate = useSelector(state => state.favoriteReducer);
  console.log(storeDate);
  return (
    <div>
      <h1>FavoritesPage</h1>
    </div>
  )
}
