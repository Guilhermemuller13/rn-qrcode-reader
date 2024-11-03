import { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { BarcodeScanningResult, useCameraPermissions } from 'expo-camera';

export const useQRScanner = () => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [permission, requestPermission] = useCameraPermissions();
  const qrCodeLock = useRef<boolean>(false);

  const handleOpenModal = async () => {
    setModalIsVisible(true);
    qrCodeLock.current = false;
  };

  const handleQrCodeRead = ({ data }: BarcodeScanningResult) => {
    if (data && !qrCodeLock.current) {
      qrCodeLock.current = true;
      setModalIsVisible(false);
      Alert.alert("QR Code", data);
    }
  };

  return {
    modalIsVisible,
    setModalIsVisible,
    permission,
    requestPermission,
    handleOpenModal,
    handleQrCodeRead,
  };
};