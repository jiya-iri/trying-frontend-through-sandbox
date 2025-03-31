import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Mail, ToggleLeft as Google } from "lucide-react";

interface AuthFormProps {
  onAuthSuccess: () => void;
}

export default function AuthForm({ onAuthSuccess }: AuthFormProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication (Replace with actual auth logic)
    if (email && password) {
      onAuthSuccess();
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <Card className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isSignUp ? "Create an Account" : "Welcome Back!"}
        </h2>

        <form onSubmit={handleAuth} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <Input
              type="email"
              placeholder="Email address"
              className="pl-10 w-full bg-gray-700 border-none focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
            <Input
              type="password"
              placeholder="Password"
              className="pl-10 w-full bg-gray-700 border-none focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700" type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="px-2 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        <Button 
          variant="outline"
          className="w-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center gap-2" 
          onClick={() => alert("Google Sign-In Clicked")}
        > 
          <Google size={18} />
          Sign in with Google
        </Button>

        <p className="text-center text-sm mt-4 text-gray-400">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="text-purple-400 hover:underline ml-1"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </Card>
    </div>
  );
}
