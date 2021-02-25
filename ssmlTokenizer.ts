import marked from 'marked'

// Override function
/*
export const tokenizer: marked.Tokenizer = {
  codespan(src: string) {
    const match = src.match(/\$+([^\$\n]+?)\$+/);
    if (match) {
      const marked: marked.Tokens.Codespan = {
        type: 'codespan',
        raw: match[0],
        text: match[1].trim()
      };
      return marked
    }
    return false
  }
}
*/