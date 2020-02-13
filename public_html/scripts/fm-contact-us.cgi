#!/usr/bin/perl
use strict;
use warnings;
use Authen::Captcha;
use CGI ;

my $cgi = new CGI ;

# this directory is not accessible via the web.
my $captcha_datadir = "/home/cluster-sites/6/c/countesswearvillagehall.co.uk/public_html/../.captcha_data";

# this directory will store the captcha images. This should
# be accessible via the web because it will be included on the page.
my $captcha_outputdir = "/home/cluster-sites/6/c/countesswearvillagehall.co.uk/public_html/scripts/img";

# This directory is the same as above, but using the web accessible
# URL path.
my $image_dir = "/scripts/img";

# This should be the location of the FormMail.cgi script.
my $formmail = "/scripts/FormMail.cgi";

# This is where the user should be taken to after submitting the form.
my $redirect = "http://countesswearvillagehall.co.uk/scripts/email_sent.html";


my $captcha = Authen::Captcha->new(
  data_folder => $captcha_datadir,
  output_folder => $captcha_outputdir,
  );

my ($md5sum, $chars) = $captcha->generate_code(4);
# eliminate ambiguous chars from $chars
my $bad_chars = 1;
while ($bad_chars) {
    if ( $chars =~ m/o|0|O|l|i|1|q|9|6|b|s|S|5|2|Z/) {
        ($md5sum, $chars) = $captcha->generate_code(4);
    } else {
        $bad_chars = 0;
    }
}
my $title      = 'Contact us' ;
my $recipient  = 'm.j.startin@googlemail.co.uk' ;
my $invitation = '
Please enter your name, your email address, a subject, your
message, and the code for humans in the boxes and click send.
We apologise for asking you to enter a code but it blocks
those electronic robots from clogging up our mailbox with spam.

Thank you.
We shall get back to you as soon as possible.
' ;
my $email    ;
my $realname  ;

print $cgi->header () ;

print << "END_OF_HTML";

<!DOCTYPE html>
<html>
<head>
<title>Contact us</title>
</head>
<body>
<h1>Contact us</h1>
<p>
Please enter your name, your email address, a subject, your
message, and the code for humans in the boxes and click send.
We apologise for asking you to enter a code but it blocks
those electronic robots from clogging up our mailbox with spam.

Thank you.
We shall get back to you as soon as possible.
</p>
<form  action="/scripts/FormMail.cgi" method='post'>
<table>
<tr><td><label>Your Name </label></td><td><input type='text' name='realname' size=40></td></tr>
<tr><td><label>Your Email </label></td><td><input type='text' name='email' size=40></td></tr>
<tr><td><label>Subject </label></td><td><input type='text' name='subject' size=60></td></tr>
<tr><td><label>Your message </label></td><td><textarea name='message' cols=64 rows=8 wrap=virtual></textarea></td></tr>

<tr><td>&nbsp;</td><td aligh='center'> <button value='Send my email'>Send my email </button></td></tr>
</table>
<p> <p>
<input type='hidden' name='title' value="Contact us" >
<input type='hidden' name='recipient' value="m.j.startin\@googlemail.co.uk" >
<input type='hidden' name='redirect' value="http://countesswearvillagehall.co.uk/scripts/email_sent.html" >
</form>

</body></html>
END_OF_HTML
