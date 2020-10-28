const breadCrumb = document.createElement('div');
breadCrumb.classList.add('breadcrumb');
const navElement = document.createElement('nav')
breadCrumb.appendChild(navElement);
const olElement = document.createElement('ol');
olElement.classList.add('breadcrumb');
navElement.appendChild.add(olElement);
const liElementOne = document.createElement("li");
liElementOne.classList.add('breadcrumb-item')
liElementOne.textContent = 'Home'
liElementTwo.classList.add('breadcrumb-item active')
liElementTwo.textContent = 'Library'


olElement.appendChild(liElementOne)
olElement.appendChild(liElementTwo)






// {/* <div class="breadcrumb">
// <nav aria-label="breadcrumb">
//     <ol class="breadcrumb">
//       <li class="breadcrumb-item"><a href="#">Home</a></li>
//       <li class="breadcrumb-item active" aria-current="page">Library</li>
//     </ol>
//   </nav>
// </div> */}

// const form = document.createElement('form');
// {/* <div class="form-group">
//         <label for="exampleInputEmail1">Email address</label>
//         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//     </div> */}
// const divElement = document.createElement('div');
// divElement.classList.add('form-group');
// const emailLabel = document.createElement('label');
// emailLabel.setAttribute('for', 'exampleInputEmail1');
// emailLabel.textContent = 'Email address';
// // append to div
// divElement.appendChild(emailLabel);