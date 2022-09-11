// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [email, setEmail] = React.useState('');
//   const [message, setMessage] = React.useState('');

//   const submitHandler = async (e: any) => {
//     console.log(email, message);
//     const data = await axios.post(`/api/email`, {
//       email,
//       message,
//     });

//     return (
//       <div className="App">
//         <div>
//           <form onSubmit={submitHandler}>
//             <label htmlFor="message">your message</label>
//             <input
//               onChange={(e) => setMessage(e.target.value)}
//               type="text"
//               id="message"
//               name="message"
//               placeholder="I want to talk to you"
//             />
//             <label htmlFor="email">Your email</label>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//               name="email"
//               placeholder="example@gmail.com"
//               required
//             />

//             <button type="submit"></button>
//           </form>
//         </div>
//       </div>
//     );
//   };
// }
// export default App;
