<?php
// index.php trong thư mục BE

// Lấy phần đường dẫn sau domain
$request_uri = $_SERVER['REQUEST_URI'];
// echo $request_uri;

// Tạo một danh sách các route và controller tương ứng
$routes = [
    '/CarShop_Project/BE/Controller/test.php/account/get' => 'AccountController@getAccount',
    // Đổi PUT thành GET vì HTML không hỗ trợ trực tiếp phương thức PUT từ form
    '/CarShop_Project/BE/Controller/test.php/account/update' => 'AccountController@updateAccount',
    '/CarShop_Project/BE/Controller/test.php/account/register' => 'AccountController@registerAccount',
    '/CarShop_Project/BE/Controller/test.php/account/delete' => 'AccountController@deleteAccount',
    '/product/create' => 'ProductController@createProduct',
    // Thêm các route khác ở đây...
];

// Kiểm tra xem route có tồn tại trong danh sách không
if (array_key_exists($request_uri, $routes)) {
    // Phân tách route và tên hàm controller
    $route_parts = explode('@', $routes[$request_uri]);

    // Lấy tên file controller và tên hàm từ mảng phân tách
    $controller_file = $route_parts[0];
    $method_name = $route_parts[1];

    // Include file controller tương ứng
    // echo "include file"
    $link = __DIR__ . '/' . $controller_file . '.php';
    // echo $link;
    // require_once $link;
    require_once "./AccountController.php";
    // echo "finish include file"
    // Khởi tạo đối tượng controller
    // echo $controller_file;
    $controller = new $controller_file;
    // parse_str(file_get_contents("php://input"), $_DATA); // Đọc dữ liệu từ body của request
    $_DATA = json_decode(file_get_contents("php://input"), true);
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $controller->$method_name(); // Gọi phương thức getAccount
    }
    // Xử lý các phương thức POST và PUT
    elseif ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PUT' || $_SERVER['REQUEST_METHOD'] === 'DELETE') {
        $controller->$method_name($_DATA);
    } else {
        http_response_code(405); // Method Not Allowed
        echo 'Phương thức không được hỗ trợ.';
    }
} else {
    // Route không tồn tại, trả về lỗi 404 hoặc xử lý theo ý của bạn
    http_response_code(404);
    echo 'Route không tồn tại.';
}
?>
