import { prisma } from "config/data_comfig";
import getConnection from "../config/data";
import { PrismaClient } from "@prisma/client";

// Tạo mới user
const handleCreateUser = async (
  name: string,
  email: string,
  address: string
) => {
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      address: address,
    },
  });
};

// Lấy dữ liệu từ database
const getAllUser = async () => {
const users = await prisma.user.findMany()
return users ;
};

// Xóa user
const handleDeleteUser = async (id: string) => {
 const deleteUser = await prisma.user.delete({
  where :{id : +id}
 })
};

// Lấy user theo ID
const getUserById = async (id: string) => {
 const user = await prisma.user.findUnique({
  where :{id : +id }
 })
 return user ;
};

// Cập nhật user
const updateUserById = async (
  id: string,
  email: string,
  address: string,
  name: string
) => {
const updateUser = await prisma.user.update({
  where :{
    id :+id
  } ,
  data :{
    email : email ,
    address :address ,
    name : name ,
  }
})
};

export {
  handleCreateUser,
  getAllUser,
  handleDeleteUser,
  getUserById,
  updateUserById,
};
