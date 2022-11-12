import { ERROR_BAD_QUERY_SYNTAX } from "https://deno.land/std@0.153.0/node/internal_binding/_winerror.ts";
import * as ytMusic from "node-youtube-music";

type UseGetPlaylistsQueryProps = { query: string };
export function useGetPlaylistsQuery({ query }: UseGetPlaylistsQueryProps) {
  return ytMusic.searchPlaylists(query, {
    onlyOfficialPlaylists: true,
  });
}
