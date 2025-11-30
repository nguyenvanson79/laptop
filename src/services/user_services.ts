import getConnection from "../config/data";

const handleCreateUser = async (
  fullname: string,
  email: string,
  address: string
) => {
  try {
    const connection = await getConnection();

  const sql = 'INSERT INTO `users`(`name`, `email` , `address`) VALUES (?, ?,?)';
  const values = [fullname, email, address];

  const [result, fields] = await connection.execute(sql, values);

    return result;
    
  } catch (err) {
    console.log(err);
    return null;
  }
};


// lấy dữ liệu từ database
const getAllUser = async () => {
  // tạo kết nối tới MySQL
  const connection = await getConnection();

  try {
    // thực hiện câu query lấy tất cả user
    const [results, fields] = await connection.query(
      "SELECT * FROM `users`"
    );

    // trả kết quả về cho service/controller
    return results;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { handleCreateUser, getAllUser };
