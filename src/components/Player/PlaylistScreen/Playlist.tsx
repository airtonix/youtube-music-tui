import React from "react";
import { Box, Text } from "ink";

type PlaylistProps = {
  playlists: any[];
  isLoading?: boolean;
  error?: string;
};

export function Playlist({ playlists, error, isLoading }: PlaylistProps) {
  return (
    <Box flexGrow={1} justifyContent="center">
      <Box borderStyle="double" width="45%" flexDirection="column">
        {isLoading && <Text>loading</Text>}
        {!isLoading && error && <Text>{error}</Text>}
        {!isLoading && <Text>{playlists?.length ?? "No playlists"}</Text>}
      </Box>
    </Box>
  );
}
