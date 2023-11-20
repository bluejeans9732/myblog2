import Code from "@editorjs/code";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header"

export const EDITOR_TOOLS = {
  code: Code,
  header: {
      class: Header,
      config: {
        placeholder: 'Enter a Header',
        levels: [2, 3, 4],
        defaultLevel: 2
    }
  },
  paragraph: Paragraph,
  embed: Embed,
  image: Image,
  inlineCode: InlineCode,
  link: Link,
  simpleImage: SimpleImage,
};