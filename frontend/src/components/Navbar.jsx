import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/admin/university" style={{ marginRight: '15px' }}>Add University</Link>
      <Link to="/admin/course" style={{ marginRight: '15px' }}>Add Course</Link>
      <Link to="/admin/upload" style={{ marginRight: '15px' }}>Upload Paper</Link>
    </nav>
  );
}

export default Navbar;
