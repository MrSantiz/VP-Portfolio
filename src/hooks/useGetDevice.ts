import { useEffect, useState } from "react";

enum DevicesWidthEnum {
  MOBILE = 767,
  TABLET = 1024,
  LAPTOP = 1440,
}
enum DevicesEnum {
  MOBILE = "mobile",
  TABLET = "tablet",
  LAPTOP = "laptop",
  DESKTOP = "desktop",
}

type DeviceType =
  | DevicesEnum.MOBILE
  | DevicesEnum.TABLET
  | DevicesEnum.LAPTOP
  | DevicesEnum.DESKTOP;

const useGetDevice = (defaultValue: DeviceType | null = null) => {
  const [device, setDevice] = useState<DeviceType | null>(defaultValue);

  const handleGetDevice = () => {
    if (window.outerWidth <= DevicesWidthEnum.MOBILE) {
      setDevice(DevicesEnum.MOBILE);
    } else if (window.outerWidth <= DevicesWidthEnum.TABLET) {
      setDevice(DevicesEnum.TABLET);
    } else if (window.outerWidth <= DevicesWidthEnum.LAPTOP) {
      setDevice(DevicesEnum.LAPTOP);
    } else {
      setDevice(DevicesEnum.DESKTOP);
    }
  };

  useEffect(() => {
    handleGetDevice();
    window.addEventListener("resize", handleGetDevice, true);
    return () => {
      window.removeEventListener("resize", handleGetDevice, true);
    };
  }, []);

  return device;
};

export default useGetDevice;
