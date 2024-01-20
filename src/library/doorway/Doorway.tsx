import React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";

interface DoorwayProps {
  skyColour: string;
  buildingColour: string;
}

const DOOR_CLIP_PATH =
  "polygon(71% 100%, 71% 60%, 67% 45%, 61% 45%, 57% 60%, 57% 100%)";

const Doorway = ({ skyColour, buildingColour }: DoorwayProps) => {
  const [isDesktopOrLaptop] = useMediaQuery("(min-width: 1244px)");

  return (
    <Flex
      h={isDesktopOrLaptop ? 96 : 24}
      w={"100%"}
      bg={buildingColour}
      flexGrow={0}
    >
      <Flex w={"100%"} bg={skyColour} clipPath={DOOR_CLIP_PATH} />
    </Flex>
  );
};

export { Doorway };
