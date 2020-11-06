<?php session_start();
$uploadOk = 0;
$acceptedExt = array("png", "jpg", "jpeg", "gif");
  if(!empty($_FILES['uploaded_file']))
  {
    $path = "product-images/";
 // Count total files
 $countfiles = count($_FILES['uploaded_file']['name']);
 // Looping all files
 for ($i=0;$i<$countfiles;$i++) {
     $filename = $_FILES['uploaded_file']['name'][$i];
     $fileSize = $_FILES['uploaded_file']['size'][$i];
     $fileExt = pathinfo($path.$filename, PATHINFO_EXTENSION);
     //check for allowed file extensions
     if(!in_array(strtolower($fileExt), $acceptedExt)) {
       $uploadOk = 0;
       echo "<p class='text-warning'>Upload Failed: <span class='text-danger'>Un accepted file format ($fileExt)! </span></p>";
     }elseif(file_exists($path.$filename)) {
      $uploadOk = 0;
      echo "<p class='text-warning'>Upload Failed: <span class='text-danger'>File $filename already exists </span></p>";
  }elseif($fileSize > 2097152) {
    $uploadOk = 0;
    echo "<p class='text-warning'>Upload Failed: <span class='text-danger'>File $filename is too large</span></p>";
  }else {
    $uploadOk = 1;
      }
  
  // Attempt to Upload file      
      if ($uploadOk == 1) {
    if (move_uploaded_file($_FILES['uploaded_file']['tmp_name'][$i], $path.$filename)) {
      echo "<p class='text-success'><i class='fas fa-check-circle text-success'></i>$filename Uploaded Successfully</p>";
    } else{
    echo "<p class='text-warning'>Upload Failed: There was an error uploading the file, please try again!</p>";
    }
      }
 }
  }
