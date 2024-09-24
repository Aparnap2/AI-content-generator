// 'use client'
// import { title } from "@/components/primitives";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import {getApp} from "firebase/app"

// export default function Dashboard() {
//   const [user, setUser] = useState(null);
// const auth = 
//   useEffect(() => {
//     // Fetch user from Firebase Auth
//     getApp().((user) => {
//       setUser(user);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {user ? (
//         <>
//           <h2>Welcome, {user.displayName}</h2>
//           <div>
//             {/* List of generated content */}
//             <h3>Your Generated Content</h3>
//             <p>Blog 1, Website 1, Document 1</p>
//           </div>
//           {user.isAdmin && (
//             <div>
//               <h3>Admin Panel</h3>
//               <button onClick={() => router.push('/admin')}>Go to Admin Panel</button>
//             </div>
//           )}
//         </>
//       ) : (
//         <p>Please login to view your dashboard.</p>
//       )}
//     </div>
//   );
// }
