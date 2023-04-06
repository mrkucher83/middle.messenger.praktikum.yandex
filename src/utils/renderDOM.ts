import Block from '../services/Block';

export default function render(query: string, block: Block) {
  const root = document.querySelector(query);
  root?.appendChild(block.getContent()!);
  block.componentDidMount();

  return root;
}
