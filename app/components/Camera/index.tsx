import { Button, Modal, Text, View } from "react-native";
import { CameraView } from "expo-camera";

import { styles } from "./styles";

import { useQRScanner } from "@/app/hooks/useQRScanner";

export function Camera() {
  const {
    modalIsVisible,
    setModalIsVisible,
    permission,
    requestPermission,
    handleOpenModal,
    handleQrCodeRead,
  } = useQRScanner();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Allow camera access</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="QR Code" onPress={handleOpenModal} />

      <Modal
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(false)}
        style={{ flex: 1 }}
      >
        <CameraView
          style={styles.camera}
          facing="back"
          onBarcodeScanned={handleQrCodeRead}
        />
        <View style={styles.footer}>
          <Button title="Close" onPress={() => setModalIsVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
