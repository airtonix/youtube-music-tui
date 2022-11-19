import { useCallback, useEffect, useState } from "react";
import music from "node-youtube-music";

type UseGetPlaylistsQueryProps = { query?: string; skip?: boolean };
export function useGetPlaylistsQuery({
  query = "",
  skip,
}: UseGetPlaylistsQueryProps = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await music.searchPlaylists(query, {});
      setPlaylists(results);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      setPlaylists([]);
    }
  }, [query]);

  useEffect(() => {
    if (!!skip || isLoading) return;
    fetchPlaylists();
  }, [query, skip, isLoading]);

  return {
    isLoading,
    fetchPlaylists,
    playlists,
    error,
  };
}
