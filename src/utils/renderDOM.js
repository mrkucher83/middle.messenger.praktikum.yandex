export default function render(query, block) {
  const root = document.querySelector(query);
  root.appendChild(block.getContent());
  block.componentDidMount();

  return root;
}