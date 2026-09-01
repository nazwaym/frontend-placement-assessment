import OptionCard from "./OptionCard";

const categoryLabels = {
  "web-fundamentals": "Web Fundamentals",
  "html": "HTML",
  "css": "CSS",
  "javascript": "JavaScript",
  "programming-logic": "Programming Logic"
};

const difficultyColors = {
  "easy": "bg-green-100 text-green-800 border-green-200",
  "medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "hard": "bg-red-100 text-red-800 border-red-200"
};

const renderQuestionText = (text) => {
  const parts = text.split('\n');
  if (parts.length === 1) return <p className="text-lg font-semibold text-text leading-relaxed">{text}</p>;

  const isCode = (line) => line.includes('const ') || line.includes(';') || line.includes('{') || line.includes('=>') || line.startsWith(' ');
  
  const elements = [];
  let codeLines = [];
  
  const pushCodeBlock = () => {
    if (codeLines.length > 0) {
      elements.push(
        <div key={`code-${elements.length}`} className="my-4 overflow-x-auto rounded-xl bg-gray-900 p-5 shadow-inner">
          <pre className="font-mono text-[13px] leading-relaxed text-gray-100">
            <code>{codeLines.join('\n')}</code>
          </pre>
        </div>
      );
      codeLines = [];
    }
  };

  parts.forEach((line, i) => {
    if (isCode(line)) {
      codeLines.push(line);
    } else {
      pushCodeBlock();
      if (line.trim()) {
        elements.push(<p key={`text-${i}`} className="text-lg font-semibold text-text leading-relaxed mb-1">{line}</p>);
      }
    }
  });
  pushCodeBlock();

  return <>{elements}</>;
};

export default function QuestionCard({ question, selectedAnswer, onSelectAnswer, validationError }) {
  const ALPHABET = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-surface p-6 shadow-sm border border-border sm:p-8 animate-fade-up">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="inline-flex items-center rounded-md bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary border border-primary/20">
          {categoryLabels[question.category] || question.category}
        </span>
        <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold border ${difficultyColors[question.difficulty] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </span>
      </div>
      
      <div className="flex flex-col gap-2">
        {renderQuestionText(question.question)}
      </div>
      
      <p className="text-sm font-medium text-text-muted mt-2">
        Pilih satu jawaban yang paling tepat.
      </p>
      
      <div className="mt-2 flex flex-col gap-3" role="radiogroup" aria-label="Pilihan jawaban">
        {question.options.map((option, index) => (
          <OptionCard
            key={option}
            label={option}
            prefix={ALPHABET[index]}
            selected={selectedAnswer === index}
            onSelect={() => onSelectAnswer(index)}
          />
        ))}
      </div>

      {/* Inline Validation Feedback */}
      {validationError && (
        <div className="flex items-center gap-2 rounded-xl bg-amber-50 border border-amber-200/80 px-4 py-3 text-xs font-medium text-amber-900 animate-pop-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 shrink-0 text-amber-600"
          >
            <path
              fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <span>{validationError}</span>
        </div>
      )}
    </div>
  );
}
