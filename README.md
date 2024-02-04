# Mercyas

## Development cycle

### Scope

Description:
user can enter/scan receipt, the application can extract the information (business, items, and total). In addition, users can enter income as well as other information(later). The app eventually will calculate the expense and remaining.
Extra functions:
Log in/ log out
Sign up, reset user password

Log in:
	Phone #:  user table ⇒ getAllPhoneNumber() ⇒ verify existing users
Verification:
If phone# in Log in exists ⇒ send token message/email to user ⇒ 	generateToken() by hashing
Click verify ⇒ check code match ⇒ save token to database and send token to client side ⇒ saveToken() and sendToken(). Description: token will be saved if users enter correct verification number, users don’t have to verify again if tokens still exist ( no verification page), users will have to verify again if the tokens expire.
Sign up:
	Just saveUser()
Home:
	getExpenses()  getIncomes() getSaving()
	getExpenseFromTo() getIncomesFromTo() getSavingFromTo()
	
Scan:
	

Detail:

### UI/UX Wireframe
Screen 1: Flash Welcome screen
Screen 2: login ?  login : signup
Screen 3: login -> dashboard
	    Bottom navbar: Home | Enter Info | Scan | Setting
Login: Agreement: move to sign up

### Creating Prototype

### Mobile Interface Animation

(TBD)

### Software Architecture

Back end 
Relational Database Design v1: 
Lucid: [Database structure](https://lucid.app/lucidchart/d8e95557-1bcc-42f3-8a5c-0fa0db5e7284/edit?viewport_loc=-10%2C-10%2C1707%2C743%2C0_0&invitationId=inv_402a8b1d-5b92-4485-93af-fa7b2696ac5e)


Use Spring Boot for backend. This tutorial has good instruction on spring boot, react native, and Gradle even though we use maven.
Should cloud be used? Otherwise a backend server - docker

Setup:
	




Front end
Figma: [Design](https://www.figma.com/file/dyoxc4TqS17PLLcabXsxVG/Untitled?type=design&node-id=2%3A793&mode=design&t=UMqmd7dZ8keQ2GXt-1)

### Mobile App Development

(TBD)

### Mobile App Testing

(TBD)

### Launching

(TBD)


## Install React Native 

(TBD)


## Link of project:


## References:

**Frontend folder structure**: [Folder Structure for Modern Web Applications](https://dev.to/noruwa/folder-structure-for-modern-web-applications-4d11)

