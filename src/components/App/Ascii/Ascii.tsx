import React from "react";
import figlet from "figlet";
import { Text } from "ink";

type AsciiProps = {
  font?: figlet.Fonts;
  theme?: string;
  horizontalLayout?: figlet.KerningMethods;
  verticalLayout?: figlet.KerningMethods;
  text?: string;
};

export function Ascii({
  font = "Slant Relief",
  theme = "Monokai Dimmed",
  text = "",
  ...props
}: AsciiProps) {
  return <Text>{figlet.textSync(text, props)}</Text>;
}
