import axios from "axios";
// import { notFound } from "next/navigation";

const API_ENDPOINT = "https://server-gamma-beryl-35.vercel.app/api";
export const fetchApi = async (path, method, data = null) => {
  const url = `${API_ENDPOINT}${path}`;
  // const user = localStorage.getItem("customer");
  // const token = user ? JSON.parse(user).accessToken : "";

  try {
    let response;
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // };

    switch (method) {
      case "GET":
        response = await axios.get(url, {
          cache: "no-store",
        });
        break;
      case "POST":
        response = await axios.post(url, data);
        break;
      case "PATCH":
        response = await axios.patch(url, data);
        break;
      case "PUT":
        response = await axios.put(url, data);
        break;
      case "DELETE":
        response = await axios.delete(url);
        break;
      default:
        throw new Error("Method not allowed");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    // notFound();
  }
};