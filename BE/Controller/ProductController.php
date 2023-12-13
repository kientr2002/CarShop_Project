<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once('../Model/Product.php');
class ProductController{
  private $productModel;
    public function __construct() {
      $this->productModel = new product();
    }
    public function getProduct(){
      if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức GET.";
            return;
        }
        echo "a";
    }
    public function deleteProduct($data) {
        if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức DELETE.";
            return;
        }
        if ($data === null) {
            http_response_code(400); // Bad Request
            echo "Dữ liệu không hợp lệ.";
            return;
        }
        $car_id = $data['car_id'];
        $result = $this->productModel->delete_product($car_id);
        if ($result) {
            echo "Xóa tài khoản thành công.";
        } else {
            echo "Xóa tài khoản thất bại.";
        }
    }  
}
$a = new ProductController();
$a->getProduct();
?>