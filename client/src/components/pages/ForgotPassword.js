// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import M from 'materialize-css';
// import Footer from '../layout/Footer';

// const ForgotPassword = () => {
//   const history = useHistory();
//   const [email, setEmail] = useState('');
//   const PostData = () => {
//     if (
//       !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         email
//       )
//     ) {
//       M.toast({ html: 'invalid email', classes: '#c62828 red darken-3' });
//       return;
//     }
//     fetch('/resetpassword', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           M.toast({ html: data.error, classes: '#c62828 red darken-3' });
//         } else {
//           M.toast({ html: data.message, classes: '#43a047 green darken-1' });
//           history.push('/login');
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <>
//       <div className="containerF border p-5">
//         <div className="fs-3 text-center">Reset Password</div>
//         <div className="col-md-4 pt-4 text-center mx-auto">
//           <label htmlFor="aptSuite" className="form-label">
//             Enter Email
//           </label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="form-control radius"
//           ></input>
//         </div>
//         <div className="col-md-4 d-grid mx-auto mt-4">
//           <button
//             type="submit"
//             onClick={() => PostData()}
//             className="btn btn-outline-primary radius"
//           >
//             Reset Password
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ForgotPassword;
