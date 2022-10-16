import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav
      id='sidebar'
      className='nav flex-column justify-content-start align-items-start navbar'
    >
      <div id='user-info'>
        <img
          className='me-2'
          src='https://i0.wp.com/www.startsmallmedia.com/wp-content/uploads/2019/07/blog-post-vs-article-1920-x-.png?fit=1920%2C1080'
          alt=''
        />
        <p>{localStorage.email}</p>
      </div>
      <hr />
      <ul className='navbar-nav nav'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <Link to='/posts' className='nav-link nav-menu'>
              <i className='fa-solid fa-table-columns'></i>&nbsp; All Post
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/add' className='nav-link nav-menu'>
              <i class='fa-sharp fa-solid fa-newspaper'></i>&nbsp; Add New
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='payment' className='nav-link nav-menu'>
              <i class='fa-solid fa-file-invoice'></i>&nbsp; Preview
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Sidebar;
