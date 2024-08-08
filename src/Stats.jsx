// Stats Component
function Stats({ numberItem, dataPacked }) {
  if (!numberItem)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const percentage = Math.round((dataPacked / numberItem) * 100 || 0);
  return (
    <footer className="stats">
      <em />
      {percentage === 100
        ? `You got everything!Ready to go 🚀`
        : ` You have ${numberItem} items for your list, 
          and your already packed ${dataPacked} (${percentage}
            %)`}
      <em />
    </footer>
  );
}
export default Stats;
