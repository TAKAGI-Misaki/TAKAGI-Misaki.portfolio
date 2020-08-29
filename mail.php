<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>無題ドキュメント</title>
</head>

<body>
<?php

$request_param = $_POST;

$request_datetime = date("Y年m月d日 H時i分s秒");


$mailto = $request_param['email'];
$to = "t7111misaki@gmail.com";
$mailfrom = "t7111misaki@gmail.com";
$subject = "お問い合わせ、ありがとうございます。";

$content = "";
$content .= $request_param['name']. "様\r\n";
$content .= "お問い合わせ、ありがとうございます。\r\n";
$content .= "=================================\r\n";
$content .= "お名前　 　　　　　　" . htmlspecialchars($request_param['name'])."\r\n";
$content .= "メールアドレス　 　　" . htmlspecialchars($request_param['email'])."\r\n";
$content .= "お問い合わせ内容　 　" . htmlspecialchars($request_param['text'])."\r\n";
$content .= "お問い合わせ日時　 　" . $request_datetime."\r\n";
$content .= "=================================\r\n";

//管理者確認用メール
$subject2 = "お問い合わせがありました。";
$content2 = "";
$content2 .= "お問い合わせがありました。\r\n";
$content2 .= "=================================\r\n";
$content2 .= "お名前　 　　　　　" . htmlspecialchars($request_param['name'])."\r\n";
$content2 .= "メールアドレス　 　" . htmlspecialchars($request_param['email'])."\r\n";
$content2 .= "お問い合わせ内容　 " . htmlspecialchars($request_param['text'])."\r\n";
$content2 .= "お問い合わせ日時   " . $request_datetime."\r\n";
$content2 .= "================================="."\r\n";

mb_language("ja");
mb_internal_encoding("UTF-8");
//mail 送信
if($request_param['token'] === '1234567'){
if(mb_send_mail($to, $subject2, $content2, $mailfrom)){
   mb_send_mail($mailto,$subject,$content,$mailfrom);
   ?>
   <script>
       window.location = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox";
   </script>
   <?php
} else {
   header('Content-Type: text/html; charset=UTF-8');
 echo "メールの送信に失敗しました";
};
} else {
echo "メールの送信に失敗しました（トークンエラー）";
}

?>
</body>
</html>