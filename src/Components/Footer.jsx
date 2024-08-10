export default function Footer({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items for your packing list 🚀</em>
      </p>
    );
  }
  const itemsNumb = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((itemsPacked / itemsNumb) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? `You got everything ready to go ✈️`
          : ` You have ${itemsNumb} item in your list and you already packed ${itemsPacked} 
          
         ( ${packedPercentage}%)`}
      </em>
    </footer>
  );
}