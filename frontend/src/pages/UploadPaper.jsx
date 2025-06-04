import { useEffect, useState } from 'react';
import api from '../services/api';

function UploadPaper() {
  const [universities, setUniversities] = useState([]);
  const [universityId, setUniversityId] = useState('');
  const [courses, setCourses] = useState([]);
  const [courseId, setCourseId] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch all universities on page load
  useEffect(() => {
    api.get('/universities')
      .then(res => setUniversities(res.data))
      .catch(() => setMessage('Failed to load universities'));
  }, []);

  // Fetch courses for selected university
  const handleUniversityChange = async (e) => {
    const selectedId = e.target.value;
    setUniversityId(selectedId);
    setCourseId('');
    setCourses([]);
    try {
      const res = await api.get(`/courses/university/${selectedId}`);
      setCourses(res.data);
    } catch (err) {
      setMessage('Failed to load courses');
    }
  };

  // Handle paper submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!courseId || !file || !year || !semester) {
      return setMessage('Please fill in all fields');
    }

    const formData = new FormData();
    formData.append('courseId', courseId);
    formData.append('year', year);
    formData.append('semester', semester);
    formData.append('file', file);

    try {
      await api.post('/papers/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage('Paper uploaded successfully!');
      setYear('');
      setSemester('');
      setFile(null);
      setCourseId('');
    } catch (err) {
      setMessage('Upload failed');
    }
  };

  return (
    <div>
      <h2>Upload Exam Paper</h2>
      <form onSubmit={handleSubmit}>
        {/* University dropdown */}
        <select value={universityId} onChange={handleUniversityChange} required>
          <option value="">Select University</option>
          {universities.map(u => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>

        {/* Course dropdown */}
        <select value={courseId} onChange={e => setCourseId(e.target.value)} required disabled={!universityId}>
          <option value="">Select Course</option>
          {courses.map(c => (
            <option key={c.id} value={c.id}>
              {c.course_code} - {c.name}
            </option>
          ))}
        </select>

        {/* Year, Semester, File */}
        <input type="number" value={year} onChange={e => setYear(e.target.value)} placeholder="Year" required />
        <input value={semester} onChange={e => setSemester(e.target.value)} placeholder="Semester" required />
        <input type="file" onChange={e => setFile(e.target.files[0])} required />

        <button type="submit">Upload</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default UploadPaper;
