import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState(null);
  const data = useLoaderData();
  return (
    <div className="github-data">
      <p> username : {data?.username} </p>
      <p> followers : {data?.followers} </p>
    </div>
  )
}

export default Github;

async function githubInfo() {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  const parsedResponse = await response.json();
  return parsedResponse;
}

export { githubInfo };