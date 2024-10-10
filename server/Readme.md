# How i started Working on this project
> ## Creating model Schema
>  ### 1. *User*
>   - First Name 
>   - Last Name
>   - Email
>   - Password
>   - Confirm password
>   - Account Type
>   - Additonal Detail -> profile schema
>   - Courses Owned -> courses schema 
>   - profile Image 
>   - course Progress -> courseProgress schema
>### 2. *Profile* 
>   - Gender
>   - Date of Birth
>  - bio 
>  - phone no
>  - social media Links
>
>### 3. *Course Progress* 
>- Course Id
>- Completed videos -> Section Schema
>
>### 4. *Sub Section*
>- Title
>- Time Duration
>- Description
>- video Url
>
>### 5. *Courses* 
>- Name
>- banner
>- Description
>- Instructor -> user Schema
>- what you will learn
>- course content : Section -> schema
>- Rating & Reviews : Rating&Review -> Schema
>- Price
>- category -> categorySchema
>- Tags 
>- Student Enrolled : user -> schema
>
>### 6.  *Section* 
>- Name
>- Sub section : subSection -> schema
>
>### 7.  *Rating & review* 
>- user name : user -> schema
>- user profile : user -> schema
>- rating 
>- review
>
>### 8. *Category*
>- name 
>- description
>- course : course -> schema
>
>### 9. *Otp - Schema*
>- email
>- otp
>- created at  
>  ---
---    
> # Node mailer
> *A Package which is used to send email*  
> + Node maliler consist of a transporter which uses create __Transport Method__ containing __Host Name,Host email and Host Password__
> + Second thing we need to do is create an instance variable which store the information regarding whom to send mail with what message. It uses transporter's method __Send mail__  having "*to , from , subject & html (body of mail)*".
> ### Code snippet : (send mail)    
> ```javascript   
> const mailer = require('nodemailer')
> const  transporter = mailer.createTransport({
>           host:MAIL_Host,
>           auth:{
>               user:MAIL_User,
>               pass:MAIL_Pass,
>           }
>       })
> const info = await transporter.sendMail({
>          from:sender_Detail,
>          to:receiver_Detail,
>          subject:subject_to_Send,
>          html:body_of_Mail,
> });
>```
> After this you need to run a pre middleware for this function which run before saving o documnet into db. This is more used when you want to do some verification work like otp sending etc..
>```javascript   
> schema.pre('save',function(next){
>   const response = await send_mail(details)
>   next();
> })
>```
> # Cookies 
> *Cookies are used to either store data of user or to authenticate user to use various router according to the route*
> #### __sending response from backend__
>```javascript
>      let options = {
>       expires: time_of_expiration,
>        httpOnly:true
>      }
>   res.cookie("token_name",token_value,options).status(200).json({
>        // data to sent in key value pairs
>      })
>```
> #### __receiving response from backened__
>```javascript
>   const token = req.cookies.token
>```



