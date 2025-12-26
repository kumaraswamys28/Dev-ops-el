import LanguageSelector from './LanguageSelector';

const Header = ({ language, onLanguageChange,onSave, onRun, isLoading,  }) => {
  
  return (
    <header className="flex items-center justify-between p-3 border-b border-border bg-secondary shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <h1 className="text-xl font-bold text-text-primary hidden sm:block">Texmate</h1>
        </div>
        <LanguageSelector language={language} onSelect={onLanguageChange} />
      </div>

      <div className="flex items-center gap-4">
        {(language!= 'note')?<button
          onClick={onRun}
          disabled={isLoading}
          className="px-4 py-2 font-semibold text-white bg-accent rounded-md hover:bg-accent-hover transition-colors disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <span>{isLoading ? "Running..." : "Run"}</span>
        </button> : 
        <button
          onClick={onSave}
          disabled={isLoading}
          className="px-4 py-2 font-semibold text-white bg-accent rounded-md hover:bg-accent-hover transition-colors disabled:bg-opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <span>{isLoading ? "Saving..." : "Save"}</span>
        </button> }

      </div>
    </header>
  );
};

export default Header;