# SOLITARIT - RestAPI Documentation

## Open Endpoints

Open endpoints require no Authentication.

### User Services

* [Create a New User](user/REGISTER.md) : `POST /register`
  * [Verify a new user](user/VERIFY_REGISTER.md) : `POST /register/verify`
* [Login](user/LOGIN.md) : `POST /login`
  * [Forgot Password (Direct here when a user cannot remember their password)](user/FORGOT_PWD.md): `POST /login/forgot_password`
  * [Change Password (Direct here when a user logged in after a temporary password)](user/CHANGE_PWD.md): `POST /login/forgot_password`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

> The data has been retrieved from the body of the request. Therefore pass the values inside the body of the request

### Shop Services

#### i. Products

* [GET](shop/products/GET.md) : `GET /shop/products`
* [POST](shop/products/POST.md) : `POST /shop/products`

#### ii. Orders

* [GET](shop/orders/GET.md) : `GET /shop/order/`
* [POST](shop/orders/POST.md) : `POST /shop/order/`

### User Services - Closed Endpoints

* [List All Users](user/USER_VIEW_ALL.md) : `GET /user/view_all`
* [Send the Warnings](user/USER_WARN.md) : `POST /user/warn`
* [Update Mobile Number](user/USER_UPDATE_MOBILE.md) : `POST /user/update/mobile_number`
* [Update Address](user/USER_UPDATE_ADDRESS.md) : `POST /user/update/address`
* [Update Email](user/USER_UPDATE_EMAIL.md) : `POST /user/update/email`
* [Update Status](user/USER_UPDATE_STATUS.md) : `POST /user/update/status`

### Tournament Services - Closed Endpoints

* [List All Tournament](tournament/TOURNAMENT_VIEW_ALL.md) : `GET /tournament/view_all`
* [List One Tournament](tournament/TOURNAMENT_VIEW_ONE.md) : `POST /tournament/view_one`
* [New Tournament](tournament/NEWTOURNAMENT.md) : `POST /tournament/`
* [Edit Tournament](tournament/edit.md) : `POST /tournament/edit`
* [Update Tournament Status](tournament/update.md) : `POST /tournament/update`

### Fixture Services - Closed Endpoints

* [List All Fixture](fixtures/VIEW_ALL.md) : `GET /fixtures/view_all`
* [List One Fixture](fixtures/VIEW_ONE.md) : `POST /fixtures/view_one`
* [New Fixture](fixtures/new.md) : `POST /fixtures/`
* [Update Fixture Status](fixtures/update.md) : `POST /fixtures/update`

### News Feed + Community Posts - Closed Endpoints

* [List All Posts](communityResponse/VIEW_ALL.md) : `GET /newpost/view_all`
* [List One Post](CommunityResponse/VIEW_ONE.md) : `POST /newpost/view_one`
* [Create a new Post](communityResponse/new.md) : `POST /newpost/`
* [Update Reaction](communityResponse/react.md) : `POST /response/react`
* [Update Comment](communityResponse/comment.md) : `POST /response/comment`
* [Approve posts](communityResponse/approve.md) : `POST /managePosts/approve`
* [Reject Posts](communityResponse/reject.md) : `POST /managePosts/reject`

### News Updates and Vacancies - Closed Endpoints

* [List All Notices](notice/VIEW_ALL.md) : `GET /notice/view_all`
* [List One Notice](notice/VIEW_ONE.md) : `POST /notice/view_one`
* [Create a new Notice](notice/new.md) : `POST /notice/`
* [Approve posts](notice/publish.md) : `POST /notice/published`
* [Reject Posts](notice/unpublished.md) : `POST /notice/unpublished`

### Memberships and Subscription - Closed Endpoints

* [Membership Update](membership/membership.md) : `POST /membership`
* [Subscriber Update](membership/subscribe.md) : `POST /membership/subscribe`

### Donation Routes - Closed Endpoints

* [View All Donations](donations/view_all.md) : `GET /donations/view_all`
* [View One Donation](donations/view_one.md) : `GET /donations/view_one`
* [New Donation](donations/new.md) : `POST /donations`
* [View By User](donations/view_by_user.md) : `GET /donations/view_by_user`
