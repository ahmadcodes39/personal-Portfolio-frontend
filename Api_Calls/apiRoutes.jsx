import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export const saveUser = async (formData,textArea) => {
  try {
    const { name, email, phone} = formData;
    const message = textArea
    const response = await axios.post("/api/contact", {
      name,
      email,
      phone,
      message,
    });

    if (response.status === 200) {
      toast.success("Response sent successfully");
      console.log("success");
    } else if (response.status === 400) {
      toast.error("This email has already responded");
      console.log("error");
    } else {
      toast.error("Response not sent");
      console.log("server error");
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        toast.error("Error occured response not send ");
      } else {
        toast.error("Response not sent");
      }
    } else if (error.request) {
      toast.error("No response from server");
    } else {
      toast.error("An error occurred");
    }
    console.error("Error:", error);
  }
};
