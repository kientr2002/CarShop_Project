<?php
  require_once "database.php";

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
    }

    function get_content(){

    }

    function get_description() {

    }

    function get_author_name() {

    }

    function get_image(){

    }
  }

?>