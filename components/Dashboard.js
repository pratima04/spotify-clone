import SpotifyWebApi from "spotify-web-api-node";
import { Main } from "next/document"
import { StringDecoder } from "string_decoder"
import Body from "./Body"
import Sidebar from "./Sidebar"
import Right from "./Right"

const spotifyApi = new SpotifyWebApi({})

function Dashboard() {
  return (
    <main>
      <Sidebar />
      <Body />
      <Right />
    </main>
  );
}

export default Dashboard
