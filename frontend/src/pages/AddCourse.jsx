import { useEffect, useState } from 'react';
import api from '../services/api';

function AddCourse() {
  const [universities, setUniversities] = useState([]);
  const [universityId, setUniversityId] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/universities').then(res => setUniversities(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/courses', { name, universityId });
      setMessage('Course created!');
      setName('');
    } catch (err) {
      setMessage('Error creating course');
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
        <select value={universityId} onChange={e => setUniversityId(e.target.value)}>
          <option value="">Select University</option>
          {universities.map(u => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Course Name" />
        <button type="submit">Create</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default AddCourse;
