import { useCallback, useEffect, useState } from "react";
import music from "node-youtube-music";
import type { PlaylistPreview } from "node-youtube-music";

type UseGetPlaylistsQueryProps = { query?: string; skip?: boolean };
export function useGetPlaylistsQuery({
  query = "",
  skip,
}: UseGetPlaylistsQueryProps = {}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [playlists, setPlaylists] = useState<PlaylistPreview[]>([]);

  const fetchPlaylists = useCallback(async () => {
    setIsLoading(true);
    try {
      const results = await music.searchPlaylists(query, {});
      setPlaylists(results);
      setIsLoading(false);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Woops something went wrong fetching playlists"
      );
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
