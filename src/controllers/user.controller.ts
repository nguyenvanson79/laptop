import { Request, Response } from "express";
import { getAllUser, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user_services";

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
  return res.render("admin/user/create.ejs");
};

// xử lý form tạo user
const postCreateUser = async(req: Request, res: Response) => {
  // lấy dữ liệu từ form gửi lên
  const { name, email, address } = req.body;

  // gọi xử lý tạo user ở service
  await handleCreateUser(name, email, address);

  // dùng redirect thay cho render để quay về trang chủ
  return res.redirect("/");
};

// xóa user
const postDeleteUser =async( req:Request , res: Response) => {
  const {id} = req.params ;
await handleDeleteUser(id);
  return res.redirect('/')

}

// xem chi tiết user
const getViewUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  // lấy user theo id 
  const user = await getUserById(id);
  return res.render("view-user.ejs", {
    id: id,
    user: user
  });
};

//  cập nhật 
 const postUpdateUser = async (req: Request, res: Response) => {
  const { id , email , address , name } = req.body;
  // cập nhật 
   await updateUserById(id , email , address , name);

    return res.redirect('/')
};

export { getHomePage, getCreateUserPage, postCreateUser , postDeleteUser , getViewUser , postUpdateUser };
