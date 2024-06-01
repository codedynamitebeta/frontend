import { jwtDecode } from "jwt-decode";
import { User } from "models/authService/entity/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  setLogin,
  loginStatus,
  selectLoginStatus,
  selectToken,
  selectCurrentUser
} from "reduxes/Auth";
import { UserService } from "services/authService/UserService";

const PersistLogin = () => {
  const selectedloginStatus = useSelector(selectLoginStatus);
  const selectedToken = useSelector(selectToken);
  const selectedUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const isTokenExpired = (token: string) => {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp !== undefined && decodedToken.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  };

  useEffect(() => {
    const getUser = async () => {
      if (selectedloginStatus && selectedToken && selectedUser) {
        return;
      }

      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");
      const provider = localStorage.getItem("provider");
      if (!accessToken || !refreshToken) {
        return;
      }
      const isExpired: boolean = isTokenExpired(accessToken);
      const decodedToken: any = jwtDecode(accessToken);

      if (!isExpired) {
        UserService.getUserByEmail(decodedToken.email)
          .then((response) => {
            const user: User = response;
            dispatch(
              setLogin({ user: user, token: accessToken, provider: provider ? provider : null })
            );
            dispatch(loginStatus(true));
          })
          .catch((error) => {
            console.error("Failed to get user by email", error);
          });
      } else {
        UserService.refreshToken(accessToken, refreshToken)
          .then((res) => {
            localStorage.setItem("access_token", res.accessToken);
            localStorage.setItem("refresh_token", res.refreshToken);

            const decodedToken: any = jwtDecode(res.accessToken);
            UserService.getUserByEmail(decodedToken.email)
              .then((response) => {
                const user: User = response;
                dispatch(
                  setLogin({
                    user: user,
                    token: res.accessToken,
                    provider: provider ? provider : null
                  })
                );
                dispatch(loginStatus(true));
              })
              .catch((error) => {
                console.error("Failed to get user by email", error);
              });
          })
          .catch((error: any) => {
            // if status Please authenticate
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            localStorage.removeItem("provider");
            console.error("Failed to get refresh token", {
              code: error.response?.code || 503,
              status: error.response?.status || "Service Unavailable",
              message: error.response?.message || error.message
            });
          });
      }
    };
    getUser();
  }, [selectedloginStatus, dispatch, selectedToken, selectedUser]);

  return <>{<Outlet />} </>;
};

export default PersistLogin;
