export default function getAttr (e) {
  const node = e.target.nodeName.toUpperCase() === 'BUTTON' ? e.target : e.target.parentNode
  return node.getAttribute('data-id')
}
