import * as ytMusic from "node-youtube-music";

type UseGetPlaylistsQueryProps = { query: string };
export function useGetPlaylistsQuery({ query }: UseGetPlaylistsQueryProps) {
  return ytMusic.searchPlaylists(query, {
    onlyOfficialPlaylists: true,
  });
}
