import axios from "axios";

const URL = "https://damp-silence-67221.pktriot.net/api/";

export const getMethod = async (endpoint) => {
  try {
    const token = localStorage.getItem("token");
    const resp = await axios(URL + endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (resp.status === 200 && resp.statusText === "OK") {
      return {
        data: resp?.data,
        status: resp.status,
        message: resp.statusText?.toLocaleLowerCase(),
      };
    } else {
      return resp?.err;
    }
  } catch (err) {
    return err;
  }
};

export const postMethod = async (endpoint, data) => {
  try {
    const token = localStorage.getItem("token");

    const resp = await axios(URL + endpoint, {
      headers: {
        Authorization: `Bearer ${"gAAAAABlYLyYMES8e_6N2Q7iBWXILcrjCMQ-IKAR5bji3nijBfGnEn1oCQvZgLnU0jI0tp4RskFjr-OXteBhU2dWX5366ZjZTQ=="}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      data,
    });
    if (resp.status === 200 && resp.statusText === "OK") {
      return {
        data: resp?.data,
        status: resp.status,
        message: resp.statusText?.toLocaleLowerCase(),
      };
    } else {
      return resp?.err;
    }
  } catch (err) {
    return err;
  }
};

export const getDelete = async (endpoint, data) => {
  try {
    const resp = await axios(URL + endpoint, {
      headers: {
        Accept: "application/json",
        Authorization: `Beraer ${null}`,
      },
      method: "DELETE",
      data,
    });
    return resp;
  } catch (err) {
    return err;
  }
};
