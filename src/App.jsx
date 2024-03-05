import  { useState } from 'react';
import './App.css';

import EditCard from './Components/EditCard';
import Card from './Components/Card';

function App() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Add save logic here if needed
  };

  return (
    <div className='  flex justify-center items-center h-screen'>
     <div>
     {isEditing ? (
        <EditCard onSaveClick={handleSaveClick} />
      ) : (
        <Card onEditClick={handleEditClick} />
      )}
     </div>
    </div>
  );
}

export default App;
