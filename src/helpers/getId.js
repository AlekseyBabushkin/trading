export default function getId(link) {
  return link.getAttribute('href').replace('#', '');
}
