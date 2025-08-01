// app/student/page.js
import Chatbot from "../../components/student/chatbot";
export default function StudentPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl">
        {/* You can add other components for the student page here */}
        <Chatbot />
      </div>
    </main>
  );
}