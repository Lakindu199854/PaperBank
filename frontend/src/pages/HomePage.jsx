// Import React hooks and necessary modules
import { useEffect, useState } from 'react';
import api from '../services/api'; // Axios instance with base URL
import { useNavigate } from 'react-router-dom'; // For programmatic navigation

function HomePage() {
  // State to hold the list of universities
  const [universities, setUniversities] = useState([]);

  // React Router's hook to navigate programmatically
  const navigate = useNavigate();

  // useEffect runs once when the component mounts
  // It fetches the list of universities from the backend API
  useEffect(() => {
    api.get('/universities')
      .then(res => setUniversities(res.data)) // Set response data to state
      .catch(console.error); // Log any errors in the console
  }, []);

  // Handle clicking on a university: navigate to the course page
  const handleSelect = (id) => navigate(`/university/${id}`);

  // Render the list of universities as clickable items
  return (
    <div>
      <h1>Select Your University</h1>
      <ul>
        {universities.map(u => (
          // Each university is displayed as a list item
          <li
            key={u.id}
            onClick={() => handleSelect(u.id)} // Navigate on click
            style={{ cursor: 'pointer' }} // Makes it look clickable
          >
            {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
