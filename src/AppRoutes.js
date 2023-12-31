import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmotionLearningGame from "./pages/EmotionLearningGame";
import Chatbot from "./pages/Chatbot";
import EmotionGame from "./pages/EmotionGame";
import Correct from "./pages/Correct";
import Incorrect from "./pages/Incorrect";
import LearningMad from "./pages/LearningMad";
import LearningJoy from "./pages/LearningJoy";
import LearningPeaceful from "./pages/LearningPeaceful";
import LearningPowerful from "./pages/LearningPowerful";
import LearningSad from "./pages/LearningSad";
import LearningScared from "./pages/LearningScared";
import QuizCorrect from "./pages/QuizCorrect";
import QuizIncorrect from "./pages/QuizIncorrect";
import Congrats from "./pages/Congratulations";

const AppRoutes = () => {
  const location = useLocation();

  // Get the emotion prop from the location state
  const emotion = location.state?.emotion;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/EmotionLearningGame" element={<EmotionLearningGame />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/emotiongame" element={<EmotionGame />} />
      <Route path="/correct" element={<Correct emotion={emotion} />} />
      <Route path="/incorrect" element={<Incorrect emotion={emotion} />} />
      <Route path="/learningMad" element={<LearningMad />} />
      <Route path="/learningJoy" element={<LearningJoy />} />
      <Route path="/LearningPeaceful" element={<LearningPeaceful />} />
      <Route path="/LearningPowerful" element={<LearningPowerful />} />
      <Route path="/LearningSad" element={<LearningSad />} />
      <Route path="/LearningScared" element={<LearningScared />} />
      <Route path="/quizCorrect" element={<QuizCorrect emotion={emotion} />} />
      <Route
        path="/quizIncorrect"
        element={<QuizIncorrect emotion={emotion} />}
      />
      <Route path="/congrats" element={<Congrats />} />
    </Routes>
  );
};

export default AppRoutes;
