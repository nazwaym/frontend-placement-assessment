import { useEffect, useReducer, useState } from "react";
import questions from "../data/questions.json";
import { shuffleQuestionOrder } from "../lib/randomize";
import { loadSession, saveSession, clearSession } from "../lib/storage";
import { QuizContext } from "./quiz-context";

const initialState = {
  sessionId: null,
  status: "idle", // idle | in-progress | submitted
  biodata: null,
  questionIds: [],
  currentIndex: 0,
  answers: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "RESTORE_SESSION":
      return action.session ? { ...initialState, ...action.session } : state;

    case "START_SESSION":
      return {
        ...initialState,
        sessionId: crypto.randomUUID(),
        status: "in-progress",
        biodata: action.biodata,
        questionIds: shuffleQuestionOrder(questions),
        currentIndex: 0,
        answers: {},
      };

    case "SELECT_ANSWER":
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.optionIndex },
      };

    case "GO_TO_QUESTION":
      return { ...state, currentIndex: action.index };

    case "SUBMIT":
      return { ...state, status: "submitted" };

    case "RESET_SESSION":
      return initialState;

    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const session = loadSession();
    if (session?.sessionId) dispatch({ type: "RESTORE_SESSION", session });
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated || state.status === "idle") return;
    saveSession(state);
  }, [state, hasHydrated]);

  function startSession(biodata) {
    dispatch({ type: "START_SESSION", biodata });
  }

  function selectAnswer(questionId, optionIndex) {
    dispatch({ type: "SELECT_ANSWER", questionId, optionIndex });
  }

  function goToQuestion(index) {
    dispatch({ type: "GO_TO_QUESTION", index });
  }

  function submit() {
    dispatch({ type: "SUBMIT" });
  }

  function resetSession() {
    clearSession();
    dispatch({ type: "RESET_SESSION" });
  }

  const value = {
    ...state,
    hasHydrated,
    questions,
    startSession,
    selectAnswer,
    goToQuestion,
    submit,
    resetSession,
  };

  return <QuizContext value={value}>{children}</QuizContext>;
}
