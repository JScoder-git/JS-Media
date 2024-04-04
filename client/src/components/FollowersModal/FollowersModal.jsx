import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from "../FollowersCard/FollowersCard";

const FollowersModal = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  return (
    <Modal
     overlayColor={
  theme.colorScheme === "dark"
    ? `linear-gradient(106.23deg, #fc02fc 0%, #04bbf8 100%)`
    : theme.colors.gray[2]
}


      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >

    <FollowersCard location='modal'/>
    </Modal>
  );
};

export default FollowersModal;
