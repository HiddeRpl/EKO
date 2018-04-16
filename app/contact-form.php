<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = 'From: TangledDemo';
    $to = 'demo@tangledindesign.com';
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

if ($_POST['submit']) {
    if ($name != '' && $email != '') {
        if (mail ($to, $subject, $body, $from)) {
	        echo '<p>Your message has been sent!</p>';
	    } else {
	        echo '<p>Something went wrong, go back and try again!</p>';
	    }
	} else {
        echo '<p>You need to fill in all required fields!!</p>';
    }
}
?>