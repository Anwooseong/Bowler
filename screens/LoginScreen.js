import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("로그인 실패", "이메일과 비밀번호를 다시 확인해주세요.");
      setIsAuthenticating(false); //이것 try catch 밖에 두면 false로 바뀔때 더이상 렌더링되지 않는 컴포넌트의 상태를 업데이트하기때문에 에러가 발생
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Login you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
