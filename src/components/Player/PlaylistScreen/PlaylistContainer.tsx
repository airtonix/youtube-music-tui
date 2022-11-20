import React from "react";

import { Playlist } from "./Playlist";
import { useGetPlaylistsQuery } from "../../../services/Api/useGetPlaylistsQuery";

export function PlaylistContainer() {
  const { isLoading, playlists, error } = useGetPlaylistsQuery({
    query: "Max Cooper",
  });
  return <Playlist isLoading={isLoading} playlists={playlists} error={error} />;
}
