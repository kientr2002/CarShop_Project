<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "../Model/News.php";

class NewsController
{
    private $newsModel;

    public function __construct() {
      $this->newsModel = new News();
    }
    public function getNews() {
        if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức GET.";
            return;
        }

        $newsInfo = $this->newsModel->get_new();
        if ($newsInfo) {
            header('Content-Type: application/json');
            echo json_encode($newsInfo); // Trả về thông tin tài khoản dưới dạng JSON
        } else {
            http_response_code(404); // Not Found
            // echo "Không tìm thấy thông tin tài khoản.";
        }
    }
    public function updateNews ($data){
        if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức PUT.";
            return;
        }
        // Giả sử data được truyền vào dưới dạng JSON, bạn cần giải mã nó thành mảng
        // $decodedData = json_decode($data, true);
        // echo "finish decode"
        // Kiểm tra xem dữ liệu đã được giải mã thành công hay chưa
        if ($data === null) {
            http_response_code(400); // Bad Request
            echo "Dữ liệu không hợp lệ.";
            return;
        }
     $new_id = $data['new_id'];
     $title = $data['title'];
     $description = $data['description'] ;
     $date = $data['date'];
     $content = $data['content'];
     $author_name = $data['author_name'];
     $image = $data['image'];
        // echo "finish check"
        $result = $this->newsModel->update_new($new_id, $date, $title, $description, $content, $author_name, $image);
      echo $result;
        if ($result) {
          echo "Cập nhật thành công.";
      } else {
          echo "Cập nhật thất bại.";
      }        
    }
    public function deleteNews($data) {
        if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức DELETE.";
            return;
        }
        $new_id = $data['new_id'];
        $result = $this->newsModel->delete_new($new_id);
        if ($result) {
            echo "Xóa tài khoản thành công.";
        } else {
            echo "Xóa tài khoản thất bại.";
        }
    }

    public function insertNews($data) {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405); // Method Not Allowed
            echo "Phương thức không được phép. Yêu cầu sử dụng phương thức POST.";
            return;
        }
        $description = $data['description'] ;
        $date = $data['date'];
        $title = $data['title'];
        $content = $data['content'];
        $author_name = $data['author_name'];
        $image = $data['image'];
        $result = $this->newsModel->insert_new($date, $title, $description, $content, $author_name, $image);
        if ($result) {
            echo "Đăng ký tài khoản thành công.";
        } else {
            echo "Đăng ký tài khoản thất bại.";
        }      
    }


}
?>
