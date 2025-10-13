import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/",
});

// request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor to handle all edge cases
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (!error.response) {
      console.error("Network error or request was cancelled", error.message);
      toast.error("Network error. Please check your connection");
    } else {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.error("Bad Request:", data?.message || "Invalid request.");
          toast.error("Invalid request. Please check your input.");
          break;

        case 401:
          console.error(
            "Unauthorized:",
            data?.message || "Authentication failed."
          );
          toast.error("Session expired. Please log in again.");
          // Optional: redirect to login page
          // navigate("/login");
          break;

        case 403:
          console.error("Forbidden:", data?.message || "Access denied.");
          toast.error("You don't have permission to perform this action.");
          break;

        case 404:
          console.error("Not Found:", data?.message || "Resource not found.");
          toast.error("Requested resource not found.");
          break;

        case 408:
          console.error(
            "Request Timeout:",
            data?.message || "Server timed out."
          );
          toast.error("Request timed out. Please try again.");
          break;

        case 409:
          console.error("Conflict:", data?.message || "Resource conflict.");
          toast.error("Conflict occurred. Please refresh and try again.");
          break;

        case 422:
          console.error(
            "Unprocessable Entity:",
            data?.message || "Validation error."
          );
          toast.error("Validation failed. Check your input.");
          break;

        case 429:
          console.error(
            "Too Many Requests:",
            data?.message || "Rate limit exceeded."
          );
          toast.error("Too many requests. Please wait and try again later.");
          break;

        case 500:
          console.error(
            "Internal Server Error:",
            data?.message || "Something went wrong on the server."
          );
          toast.error("Server error. Please try again later.");
          break;

        case 502:
          console.error(
            "Bad Gateway:",
            data?.message || "Invalid response from upstream server."
          );
          toast.error("Server is temporarily unavailable. Try again later.");
          break;

        case 503:
          console.error(
            "Service Unavailable:",
            data?.message || "Server is down or overloaded."
          );
          toast.error("Service unavailable. Please try again later.");
          break;

        case 504:
          console.error(
            "Gateway Timeout:",
            data?.message || "Server took too long to respond."
          );
          toast.error("Server timeout. Please try again later.");
          break;

        default:
          console.error(
            "Unexpected Error:",
            data?.message || "Unknown error occurred."
          );
          toast.error("Something went wrong. Please try again.");
      }
    }
    return Promise.reject(error);
  }
);
