import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthModal = ({ open, onClose, mode, setMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      setEmail("");
      setPassword("");
      onClose(); // close modal on success
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-md bg-white rounded-2xl p-8 shadow-xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-medium text-center mb-6">
          {mode === "signin" ? "Sign In" : "Create Account"}
        </h2>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Form */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-black"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-2 bg-black text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading
              ? "Please wait..."
              : mode === "signin"
              ? "Sign In"
              : "Sign Up"}
          </button>
        </div>

        {/* Switch */}
        <div className="mt-6 text-center text-sm">
          {mode === "signin" ? (
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="underline"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setMode("signin")}
                className="underline"
              >
                Sign in
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default AuthModal;
