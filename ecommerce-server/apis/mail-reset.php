<?php
    require 'vendor/autoload.php';
 
    use PHPMailer\PHPMailer\PHPMailer;
    
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 2;
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'bulbastore0@gmail.com';
    $mail->Password = 'Pass1word!';
    $mail->setFrom('ehabag15@gmail.com', 'ehab');
    $mail->addReplyTo('ehabag15@gmail.com', 'ihab');
    $mail->addAddress('ehabag15@gmail.com', 'iihab');
    $mail->Subject = 'Testing PHPMailer';
    $mail->msgHTML(file_get_contents('message.html'), __DIR__);
    $mail->Body = 'This is a plain text message body';
    //$mail->addAttachment('test.txt');
    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'The email message was sent.';
    }
?>