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
  const connection = await getConnection();

  try {
    const [results, fields] = await connection.query(
      "SELECT * FROM `user`"
    );
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Xóa user
const handleDeleteUser = async (id: string) => {
  try {
    const connection = await getConnection();

    const sql = "DELETE FROM `user` WHERE `id` = ?";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Lấy user theo ID
const getUserById = async (id: string) => {
  try {
    const connection = await getConnection();

    const sql = "SELECT * FROM `user` WHERE `id` = ?";
    const values = [id];

    const [result, fields] = await connection.execute(sql, values);

    return result[0];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Cập nhật user
const updateUserById = async (
  id: string,
  email: string,
  address: string,
  name: string
) => {
  try {
    const connection = await getConnection();

    const sql =
      "UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?";
    const values = [name, email, address, id];

    const [result, fields] = await connection.execute(sql, values);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export {
  handleCreateUser,
  getAllUser,
  handleDeleteUser,
  getUserById,
  updateUserById,
};
