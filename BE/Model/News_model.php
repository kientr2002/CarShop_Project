<?php
  require_once "../Config/connectDB.php";

  header('Content-Type: application/json'); 
  class news{
    public $new_id;
    public $description;
    public $content;
    public $author_name;
    public $image;

    public $database;

    function __construct ($new_id="", $description="", $content="", $author_name="", $image="")
    {
      $this->$new_id = $new_id;
      $this->description = $description;
      $this->$content = $content;
      $this->$author_name = $author_name;
      $this->image = $image;
      $this->database = new db();
      $this->database->connect();
    }
    //GET METHOD
    function get_new(){
        try {
            $query = "SELECT * FROM news;";
            $statement = $this->database->connect()->query($query);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(["status" => "success", "data" => $result]);
        } catch (PDOException $e) {
            echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
        }
    }

  //INSERT METHOD  
    function insert_new_validate($description, $content, $author_name, $image)
      {
          try {
              $query = "SELECT new_id FROM news;";
              $statement = $this->database->connect()->query($query);
              $result = $statement->fetchAll(PDO::FETCH_ASSOC);
              $max_id = $result[0]['new_id'];
              foreach ($result as $row) {
                  if ($row['new_id'] >= $max_id) {
                      $max_id = $row['new_id'];
                  }
              }
              $new_id = $max_id + 1;

              // Call the correct method within the class
              $this->insert_new($new_id, $description, $content, $author_name, $image);
          } catch (PDOException $e) {
              echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
          }
      }

    function insert_new($new_id, $description, $content, $author_name, $image)
      {
          try {
              $query = "INSERT INTO news (new_id, description, content, author_name, image) VALUES (:new_id, :description, :content, :author_name, :image)";
              $statement = $this->database->connect()->prepare($query);

              $statement->bindParam(':new_id', $new_id);
              $statement->bindParam(':description', $description);
              $statement->bindParam(':content', $content);
              $statement->bindParam(':author_name', $author_name);
              $statement->bindParam(':image', $image);

              $statement->execute();

              echo json_encode(["status" => "success", "data" => 'insert successful']);
          } catch (PDOException $e) {
              echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
          }
      }
  // DELETE METHOD
      function delete_new($new_id){
        try {
            $query = "DELETE FROM news WHERE new_id =" .$new_id. ";";
            $statement = $this->database->connect()->query($query);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(["status" => "success"]);
        } catch (PDOException $e) {
            echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
        }
    }
  // UPDATE METHOD
    function update_new($new_id, $description, $content, $author_name, $image)
      {
          try {
            $query_update = "UPDATE news SET description = :description, content = :content, author_name = :author_name, image = :image WHERE new_id = :new_id";
            $statement_update = $this->database->connect()->prepare($query_update);

            $statement_update->bindParam(':new_id', $new_id);
            $statement_update->bindParam(':description', $description);
            $statement_update->bindParam(':content', $content);
            $statement_update->bindParam(':author_name', $author_name);
            $statement_update->bindParam(':image', $image);
            $statement_update->execute();
              echo json_encode(["status" => "success", "data" => 'insert successful']);
          } catch (PDOException $e) {
              echo json_encode(["status" => "error", "data" => ["msg" => "Query failed: " . $e->getMessage()]]);
          }
      }  
  }

?>