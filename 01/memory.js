//stack (primitive), heap(non-primitive)

//stack-number,booleans(we get copy)
let myyoutubename="yashahire"
anothername=myyoutubename
anothername="ahireyash"
console.log(myyoutubename)
console.log(anothername)

//heap(we get reference)
let user={
    email:"user@google.com",
    upi:"user@ybl"
}
let usertwo=user
usertwo.email="yash@google.com"
console.log(user.email)
console.log(usertwo.email)