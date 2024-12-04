type EmailData = {
  email: string;
  message: string;
  name: string;
};

export const getHtmlMessage = (data: EmailData): string => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Contact Message</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 5px;
    }
    .header {
      background-color: #007BFF;
      color: #ffffff;
      padding: 10px;
      text-align: center;
      border-radius: 5px 5px 0 0;
    }
    .content {
      padding: 20px;
    }
    .content p {
      line-height: 1.6;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #777777;
      margin-top: 20px;
    }
    .info {
      margin-bottom: 15px;
    }
    .info label {
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
    }
    .info span {
      display: block;
    }
    a {
      color: #007BFF;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Message</h2>
    </div>
    <div class="content">
      <div class="info">
        <label>Name:</label>
        <span>${data.name}</span>
      </div>
      <div class="info">
        <label>Email:</label>
        <span><a href="mailto:douglasbiomed3@gmail.com">${data.email}</a></span>
      </div>
      <div class="info">
        <label>Message:</label>
        <span>${data.message}</span>
      </div>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;
};
