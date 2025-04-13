<?php
// Database connection parameters
$servername = "localhost";
$username = "olym_expl";
$password = "bafiruv@ehKD1pDr";
$database = "olym_expl";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else
{
	("success");
}

// Query to select items
$sql = "SELECT id, evenement, nom, date, temps, stades, villes FROM evenements";
$result = $conn->query($sql);

// Check if there are results
if ($result->num_rows > 0) {
    // Fetch data and encode as JSON
    $rows = array();
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    echo "No items found";
}

// Close connection
$conn->close();
?>
