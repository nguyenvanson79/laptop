import express from "express";

// khi ta dùng env → tự động load biến môi trường từ file .env
import "dotenv/config";
// require('dotenv').config() ;  // cách viết cũ (CommonJS)

// đưa web router vào để tách logic routes ra file riêng
import webRoutes from "./routes/web";
import initDatabase from "config/seed";

const app = express();
const port = process.env.PORT || 8080;

// thiết lập EJS làm view engine để render giao diện
app.set("view engine", "ejs");

// chú ý dùng __dirname thì mới dùng được render đúng thư mục views
app.set("views", __dirname + "/views");

// cấu hình để lấy được dữ liệu từ form (req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cấu hình thư mục public để chứa file tĩnh (css, js, images)
app.use(express.static("public"));

// tách routes ra file riêng để code gọn gàng hơn
webRoutes(app);

//   chạy data 
initDatabase() ;

// chạy server với PORT lấy từ .env hoặc 8080
app.listen(port, () => {
  console.log("my app running", port);
});
