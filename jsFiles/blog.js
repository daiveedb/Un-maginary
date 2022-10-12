// Toggle Nav
let navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-150px";
}
// see comments button
let commentSection = document.querySelector(".comment-section");
let seeCommentsBtn = document.getElementById("see-comments-btn");
let isSeeCommentsOn = false;
seeCommentsBtn.addEventListener("click", function () {
  if (isSeeCommentsOn == false) {
    commentSection.style.height = "max-content";
    commentSection.style.padding = "20px 0";
    isSeeCommentsOn = true;
    seeCommentsBtn.textContent = "Close Comments";
  } else {
    commentSection.style.height = "0";
    commentSection.style.padding = "0";
    isSeeCommentsOn = false;
    seeCommentsBtn.textContent = "See Comments";
  }
});

// Add comments
let form = document.querySelector("#blog-form");
let userName = document.querySelector("#user-name");
let email = document.querySelector("#user-email");
let post = document.querySelector("#user-comment");
let commentsFromLocalStorage = JSON.parse(localStorage.getItem("comments"));
let comments = [];
let isFirstLoad = true;
// let j = isFirstLoad ? 0 : comments.length - 1;
let j = 0;

if (commentsFromLocalStorage) {
  comments = commentsFromLocalStorage;
  renderComments();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let commentObject = createCommentObject();
  comments.push(commentObject);
  localStorage.setItem("comments", JSON.stringify(comments));
  renderComments();
  resetInputs();
});

function createCommentObject() {
  let commentObject = {
    commentName: userName.value,
    commentEmail: email.value,
    commentText: post.value,
  };
  return commentObject;
}

function renderComments() {
  const images = [1, 2];
  let random = Math.floor(Math.random() * images.length + 1);
  for (i = j; i < comments.length; i++) {
    const div = document.createElement("div");
    let commentObject = createCommentObject();
    div.classList.add("single-comment");
    div.innerHTML = `<div class="comment-img">
                <img src="../images/user${random}.jpg" alt="" />
              </div>
              <div class="comment-text">
                <h6 class="commenter-name">${comments[i].commentName}</h6>
                <p class="comment-email">${comments[i].commentEmail}</p>
                <p class="comment-post">${comments[i].commentText}</p>
              </div>`;
    document.querySelector(".comment-section").appendChild(div);
  }

  j = comments.length;
  isFirstLoad = false;
}
function resetInputs() {
  userName.value = "";
  email.value = "";
  post.value = "";
}
// comment section

// let comments = [];
// let userName = document.getElementById("user-name");
// let userEmail = document.getElementById("user-email");
// let userComment = document.getElementById("user-comment");
// let postCommentBtn = document.getElementById("post-comment");
// let commentSection = document.getElementById("comment-section");
// let commentsFromLocalStorage = JSON.parse(localStorage.getItem("comments"));

// Comment Section Js
// console.log("guvgvyvbyu", commentsFromLocalStorage);

// if (true) {
//   comments = commentsFromLocalStorage;
//   renderComments();
// }

// function createCommentObject() {
//
// }

// function seeComments() {
//   let commentObject = createCommentObject();
//   comments.push(commentObject);
//   resetInputs();
//   localStorage.setItem("comments", JSON.stringify(comments));
//   renderComments();
// }

// function renderComments() {
//   let commentItem = "";
//   for (i = 0; i < comments.length; i++) {
//     commentItem += `<div>
//     <h4>${comments[i].commentName}</h4>
//     <h6>${comments[i].commentEmail}</h6>
//     <p>${comments[i].commentText}</p>
//     </div>`;
//   }
//   commentSection.innerHTML = commentItem;
// }

// function resetInputs() {
//
// }
