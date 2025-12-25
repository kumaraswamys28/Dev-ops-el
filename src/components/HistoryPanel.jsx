import HistoryItem from "./HistoryItem";



const HistoryPanel = ({ history, onHistoryClick, onHistoryDelete }) => {
  if (history.length === 0) {
    return <p className="text-text-secondary text-sm">Your execution history will appear here.</p>;
  }

  return (
    <><div className="space-y-3">
      {history.map((item) => (
        
        <HistoryItem
          key={item.id}
          item={item}
          onSelect={() => onHistoryClick(item)} 
          onDelete={() => onHistoryDelete(item.id)}
        />
      ))}
    </div>
    </>
  );
};

export default HistoryPanel;