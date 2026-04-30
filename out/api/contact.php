<?php
// CORS Headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($input['name']) || empty($input['email']) || empty($input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

// Sanitize input
$name = htmlspecialchars($input['name'] ?? '');
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($input['phone'] ?? '');
$company = htmlspecialchars($input['company'] ?? '');
$service = htmlspecialchars($input['service'] ?? '');
$budget = htmlspecialchars($input['budget'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Email content for office
$officeEmailContent = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; }
        h2 { color: #0f172a; }
        .info-box { background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .message-box { background: #f8fafc; padding: 20px; border-left: 4px solid #00b4d8; border-radius: 4px; }
        .footer { font-size: 12px; color: #94a3b8; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; }
        p { line-height: 1.6; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>Noua solicitare de contact</h2>
        
        <div class='info-box'>
            <p><strong>Nume:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            " . (!empty($phone) ? "<p><strong>Telefon:</strong> $phone</p>" : "") . "
            " . (!empty($company) ? "<p><strong>Companie:</strong> $company</p>" : "") . "
            " . (!empty($service) ? "<p><strong>Serviciu interesat:</strong> $service</p>" : "") . "
            " . (!empty($budget) ? "<p><strong>Buget estimat:</strong> $budget</p>" : "") . "
        </div>
        
        <div class='message-box'>
            <h3 style='margin-top: 0; color: #0f172a;'>Mesaj:</h3>
            <p>" . nl2br($message) . "</p>
        </div>
        
        <p class='footer'>
            Mesaj trimis automat de la formular de contact pe " . date('Y-m-d H:i:s') . "
        </p>
    </div>
</body>
</html>
";

// Email content for client
$clientEmailContent = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; }
        h2 { color: #0f172a; }
        .info-box { background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0; }
        p { line-height: 1.6; color: #475569; }
        .footer { font-size: 12px; color: #94a3b8; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>Mulțumim pentru solicitarea ta!</h2>
        
        <p>Salut $name,</p>
        
        <p>Am primit cu succes solicitarea ta de contact. Echipa noastră va reveni la tine în cel mai scurt timp posibil, de preferință în următoarele 24 de ore.</p>
        
        <div class='info-box'>
            <h3 style='margin-top: 0; color: #0f172a;'>Informații de contact rapid:</h3>
            <p style='margin: 8px 0;'><strong>Telefon:</strong> +40 785 277 566</p>
            <p style='margin: 8px 0;'><strong>Email:</strong> office@fxf.ro</p>
            <p style='margin: 8px 0;'><strong>Program:</strong> Luni – Vineri, 10:00 – 18:00</p>
        </div>
        
        <p>Dacă ai întrebări urgent, poți apela direct la numărul de telefon de mai sus.</p>
        
        <p>Cu plăcere,<br><strong>Echipa FXF Creative Agency SRL</strong></p>
        
        <p class='footer'>
            Acesta este un email automat. Te rugăm să nu răspunzi la acest mesaj.
        </p>
    </div>
</body>
</html>
";

// Send email to office
$to = "office@fxf.ro";
$subject = "Noua solicitare de contact de la $name";
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

$officeEmailSent = mail($to, $subject, $officeEmailContent, $headers);

// Send confirmation email to client
$clientSubject = "Confirmare primire solicitare - FXF Creative Agency SRL";
$clientHeaders = "MIME-Version: 1.0\r\n";
$clientHeaders .= "Content-type: text/html; charset=UTF-8\r\n";
$clientHeaders .= "From: office@fxf.ro\r\n";

$clientEmailSent = mail($email, $clientSubject, $clientEmailContent, $clientHeaders);

// Response
if ($officeEmailSent && $clientEmailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email trimis cu succes!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Eroare la trimitere email'
    ]);
}
?>
