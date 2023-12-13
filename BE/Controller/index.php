<?php
// // index.php trong thư mục BE

// // Lấy phần đường dẫn sau domain
// $request_uri = $_SERVER['REQUEST_URI'];
// // echo $request_uri;
// // Tạo một danh sách các route và controller tương ứng
// // $temp = "/CarShop_Project/BE/index.php/";
// $routes = [
//     '/CarShop_Project/BE/Controller/index.php/account/get' => 'AccountController@getAccount',
//     '/CarShop_Project/BE/Controller/index.php/account/register' => 'AccountController@registerAccount',
//     '/CarShop_Project/BE/Controller/index.php/account/update' => 'AccountController@updateAccount',
//     '/CarShop_Project/BE/Controller/index.php/account/delete' => 'AccountController@deleteAccount',
//     '/product/create' => 'ProductController@createProduct',
//     // Thêm các route khác ở đây...
//     //news
//     '/CarShop_Project/BE/Controller/index.php/news/get' => 'NewsController@getNews',
//     '/CarShop_Project/BE/Controller/index.php/news/update' => 'NewsController@updateNews',
//     '/CarShop_Project/BE/Controller/index.php/news/delete' => 'NewsController@deleteNews',
//     '/CarShop_Project/BE/Controller/index.php/news/insert' => 'NewsController@insertNews',
// ];

// // Kiểm tra xem route có tồn tại trong danh sách không
// if (array_key_exists($request_uri, $routes)) {
//     // Phân tách route và tên hàm controller
//     $route_parts = explode('@', $routes[$request_uri]);

//     // Lấy tên file controller và tên hàm từ mảng phân tách
//     $controller_file = $route_parts[0];
//     $method_name = $route_parts[1];
//     // echo $controller_file;
//     // echo $method_name;
//     $link = __DIR__ . '/' . $controller_file . '.php';
//     // Include file controller tương ứng
//     require_once $link;
//     // Khởi tạo đối tượng controller
//     // echo "Start controller";
//     $controller = new $controller_file; // Chọn đối tượng controller cần khởi tạo

//     // Gọi phương thức trong controller
//     // echo "Start method";
//     $controller->$method_name();
// } else {
//     // Route không tồn tại, trả về lỗi 404 hoặc xử lý theo ý của bạn
//     http_response_code(404);
//     echo 'Route không tồn tại.';
// }

?>
