<?php
  require_once('../config.php');
  header('Content-Type: application/json'); 
  class product{
    private $database;

    function __construct ()
    {
      $this->database = $GLOBALS['conn'];
    }
    //GET METHOD    
    function delete_product($car_id){
      try {
              $query = "DELETE FROM car WHERE car_id =" .$car_id. ";";
              $statement = $this->database->query($query);
              $result = $statement->fetchAll(PDO::FETCH_ASSOC);
              echo json_encode(["status" => "success"]);
              return $statement->rowCount() > 0;
          } catch (PDOException $e) {
              echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
          }
    }    
  }

?>