import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({$id, title, featuredImage}) {

  return (
    <Link to={ `/post-card/${$id}` } className="">
      <div className="border-2 border-black rounded-lg flex ">
        <img src= { service.getFilePreview(featuredImage) } alt="" />
      </div>
      <h2>
        { title }
      </h2>
    </Link>
  );
}

export default PostCard;
