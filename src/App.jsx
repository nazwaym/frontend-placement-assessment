import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import LandingPage from "./pages/LandingPage";
import AssessmentIntroPage from "./pages/AssessmentIntroPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

export default function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/introduction" element={<AssessmentIntroPage />} />
          <Route path="/assessment" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}
