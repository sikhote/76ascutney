export default function getMetadata(page, params) {
  const divider = ' · ';
  const name = '76 Ascutney';
  let description = `Notes for staying at ${name}`;
  let title = description;

  switch (page) {
    case 'pages':
      if (params.id) {
        const pageLower = params.id.split('-').join(' ');
        const page = pageLower.charAt(0).toUpperCase() + pageLower.slice(1);
        title = `${page}${divider}${name}`;
      }
      break;
  }

  return { title, description };
}
