import { useContext } from "react";
import { Image } from "react-native";
import AuthContext from "../../contexts/AuthContext";

function UserIcon() {
  const {userInfo} = useContext(AuthContext);
  return (
    <Image
      source={{ uri: userInfo?.picture }}
      style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
    />
  );
}

export default UserIcon;
