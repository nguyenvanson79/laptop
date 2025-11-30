import { Request, Response } from "express";
import { getAllUser, handleCreateUser } from "services/user_services";

// hàm xử lý trang home
const getHomePage = async (req: Request, res: Response) => {
  // lấy toàn bộ user từ database
  const users = await getAllUser();
  console.log(users);

  // render ra giao diện home.ejs và truyền dữ liệu user
  return res.render("home.ejs", {
    users: users,
  });
};

// render trang tạo user
const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("create_user.ejs");
};

// xử lý form tạo user
const postCreateUser = async(req: Request, res: Response) => {
  // lấy dữ liệu từ form gửi lên
  const { fullname, email, address } = req.body;

  // gọi xử lý tạo user ở service
  await handleCreateUser(fullname, email, address);

  // dùng redirect thay cho render để quay về trang chủ
  return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUser };
