<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-Type: application/json');
require_once "../Model/News_model.php";
if($_SERVER["REQUEST_METHOD"] == "GET"){
  $new = new news();
  $new->get_new();
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
  $new = new news();
  $type = $_POST['type'];

  if($type === 'insert'){
    $description = $_POST['description'];
    $content = $_POST['content'];
    $author_name = $_POST['author_name'];
    $image = $_POST['image'];
    $new->insert_new_validate ($description, $content, $author_name, $image);
  } else if ($type === 'delete'){
    $new_id = $_POST['new_id'];
    $new->delete_new($new_id);
  } else if ($type === 'update'){
    $new_id = $_POST['new_id'];
    $description = $_POST['description'];
    $content = $_POST['content'];
    $author_name = $_POST['author_name'];
    $image = $_POST['image'];
    $new->update_new($new_id, $description, $content, $author_name, $image);
  }
}
?>