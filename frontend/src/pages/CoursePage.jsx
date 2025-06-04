import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';

function CoursePage() {
  const { universityId } = useParams();
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/courses/university/${universityId}`)
      .then(res => setCourses(res.data))
      .catch(console.error);
  }, [universityId]);

  const handleSelect = (id) => navigate(`/course/${id}`);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id} onClick={() => handleSelect(c.id)} style={{ cursor: 'pointer' }}>
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursePage;
