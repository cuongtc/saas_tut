class ContactMailer < ActionMailer::Base
  default to: 'cuongtranctc@gmail.com'
  
  def contact_email(name, email, body)
    @name = name
    @email = email
    @body = body
    
    mail(from: email, sunject: 'Contact Form Message')
  end
end