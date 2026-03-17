import { loginService } from "../services/user.service.js";

export const loginUser = (req, res) => {
    loginService();
    res.send("At login api response");
}