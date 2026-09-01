const RECOMMENDATIONS = {
  Beginner: {
    program: "Frontend Fundamental",
    focus: [
      "HTML",
      "CSS",
      "JavaScript dasar",
      "Web fundamentals",
      "Programming logic",
    ],
  },
  Intermediate: {
    program: "Frontend Development",
    focus: [
      "JavaScript",
      "Responsive UI",
      "Component-based development",
      "Data handling",
      "Frontend implementation",
    ],
  },
  Advanced: {
    program: "Advanced Frontend Development",
    focus: [
      "Advanced JavaScript",
      "Component architecture",
      "State management",
      "Performance awareness",
      "Production-oriented frontend development",
    ],
  },
};

export function getRecommendation(level) {
  return RECOMMENDATIONS[level] ?? RECOMMENDATIONS.Beginner;
}
