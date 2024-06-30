import { useSelector } from "react-redux";
import { Children, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ authentication }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect( () => {
    const authStatus = useSelector( state => state.auth.status );
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate] );

  return loader ? <h1> ... Loading </h1> : <> {Children} </>
}

export default Protected;