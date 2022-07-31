<%@ Page Title="" Language="C#" AutoEventWireup="true" %>

<html>

<body>
    <script runat="server">

	string host = "smtp.gmail.com";
  	int port = 587;
  	string from = "idvalidation.company@gmail.com";
  	string to = "Support <idvalidation.company@gmail.com>";
  	string username = "idvalidation.company@gmail.com";
  	string password = "fqlbdb)78(";
  	bool enableSsl = true;

        protected void Page_Load(object sender, EventArgs e)
        {
	string res = "OK";
	try
	{
		string name = Request.Form["name"] ?? "no name";
		string company = Request.Form["company"] ?? "no company";
		string email = Request.Form["email"] ?? "no mail";
		string phone = Request.Form["phone"] ?? "no phone";
		string reference = Request.Form["reference"] ?? "no reference";
		string topic = Request.Form["topic"] ?? "no topic";
		string message = Request.Form["message"] ?? "no message";

		System.Net.Mail.SmtpClient c = new System.Net.Mail.SmtpClient(host, port);

		c.EnableSsl = enableSsl;
		c.UseDefaultCredentials = false;
		c.Credentials = new System.Net.NetworkCredential( username, password);
		c.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
		System.Net.ServicePointManager.ServerCertificateValidationCallback += delegate { return true; };

		string subject = "Subject: "+ topic;
		string body = "Name: <strong>" +name + "</strong><br />"+
 			"Company: <strong>"+ email + "</strong><br />"+
 			"eMail: <strong>"+ email + "</strong><br />"+
			"Phone: <strong>" +phone + "</strong><br />"+
 			"Reference: <strong>"+ reference + "</strong><br />"+
 			"Topic: <strong>"+ topic + "</strong><br />"+
			"Message: " +message;

		System.Net.Mail.MailMessage msg = new System.Net.Mail.MailMessage(from, to, subject, body);
		msg.IsBodyHtml = true;

		c.Send(msg);
	}
	catch(Exception ex)	{
		res=ex.Message;
		//res=ex.ToString();
	}

	Response.Write(res);
	Response.End();
        }
    </script>

    <form runat="server">
    </form>
</body>
</html>
