// src/api/api.js
import axios from "axios";

const API_URL = "https://tmp-se-project.azurewebsites.net";

// User Signup
export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/user/auth/signup`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// User Login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/user/auth/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// User Logout
export const logout = async (token) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/user/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};