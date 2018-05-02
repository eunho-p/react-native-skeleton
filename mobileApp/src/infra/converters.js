export const textToMarkupConvert = text => {
  const texts = text.split('\n')
  const markup = texts.map(content => `\t<p class='content-text'>${content}</p>`).join('\n')
  return `<p class='content-text-container'>\n${markup}\n</p>`
}