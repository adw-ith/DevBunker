// "use client";

// import React, { useState } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "@/lib/firebaseConfig";

// export default function Login() {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [userData, setUserData] = useState<any>(null);

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const token = await result.user.getIdToken();

//       const response = await fetch("/api/auth/firebase", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token }),
//       });

//       if (!response.ok) {
//         throw new Error("Backend authentication failed");
//       }
//       const data = await response.json();
//       setUserData(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem", textAlign: "center" }}>
//       <h1>Sign In</h1>
//       <button
//         onClick={handleGoogleSignIn}
//         style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
//       >
//         Sign in with Google
//       </button>
//       {userData && (
//         <div style={{ marginTop: "1rem" }}>
//           <h2>Welcome, {userData.username}!</h2>
//           <p>Email: {userData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { user, signInWithGoogle } = useAuth();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Sign In</h1>
      <button
        onClick={signInWithGoogle}
        style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
      >
        Sign in with Google
      </button>
      {user && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}
