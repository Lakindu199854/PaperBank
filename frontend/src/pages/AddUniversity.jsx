import { useState } from 'react';
import api from '../services/api';

function AddUniversity() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/universities', { name });
      setMessage('University created successfully!');
      setName('');
    } catch (err) {
      setMessage('Error creating university');
    }
  };

  return (
    <div>
      <h2>Add University</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="University Name" />
        <button type="submit">Create</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default AddUniversity;
