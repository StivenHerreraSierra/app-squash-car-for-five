import axios from "axios";
import Cookies from "universal-cookie";
import { APIHOST as host } from "../../app.json";

const cookies = new Cookies();

export function calculaExtraccionSesion() {
  const now = new Date().getTime();
  const newDate = now + 60 * 30 * 1000;
  return new Date(newDate);
}

export function getSession() {
  return cookies.get("_s") === undefined ? false : cookies.get("_s");
}

function renovarSesion() {
  const sesion = getSession();
  if (!sesion) {
    window.location.href = "/login";
  }

  cookies.set("_s", sesion, {
    path: "/",
    expires: calculaExtraccionSesion(),
  });

  return sesion;
}

export const request = {
  get: function (services) {
    let token = renovarSesion();
    return axios.get(`${host}${services}`, {
      headers: {
        Authorization: token,
      },
    });
  },

  getEmpleado: function (services, data) {
    let token = renovarSesion();

    return axios.post(`${host}${services}`, data, {
      headers: {
        Authorization: token,
      },
    });
  },

  post: function (services, data) {
    let token = renovarSesion();
    return axios.post(`${host}${services}`, data, {
      headers: {
        Authorization: token,
      },
    });
  },
};
