import { useSelector } from "react-redux";
import Container from "../container/Container";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const authStatus = useSelector( (state) => {
    return state.status;
  } )

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ];

  return <header>
    <Container>
      <nav className="flex" >
        <div className="mr-5">
          <Link >
            <Logo className='w-16' />
          </Link>
        </div>

        <ul className="flex ml-auto" >
          {
            navItems.map( item =>
              item.active && <li key={item.slug} className="" >
                <Link >
                  <button
                    onClick={ () => navigate(item.slug) } >
                    {item.name}
                  </button>
                </Link>
              </li>
            )
          }
        </ul>
      </nav>
    </Container>
  </header>
}

export default Navbar;