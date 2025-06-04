import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';

function PaperPage() {
  const { courseId } = useParams();
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    api.get(`/papers/course/${courseId}`)
      .then(res => setPapers(res.data))
      .catch(console.error);
  }, [courseId]);

  return (
    <div>
      <h2>Exam Papers</h2>
      <ul>
        {papers.map(p => (
          <li key={p.id}>
            {p.year} - {p.semester}:
            <a href={p.fileUrl} target="_blank" rel="noreferrer"> Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaperPage;
