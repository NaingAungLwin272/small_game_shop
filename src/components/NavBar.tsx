import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSeacrch: (searchText: string) => void;
}

const NavBar = ({ onSeacrch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSeacrch={onSeacrch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
