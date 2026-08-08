import { pathToFileURL } from "node:url";
export type EditorMemento = Readonly<{ content: string }>;
export class TextEditor {
  private content = "";
  write(text: string): void {
    this.content += text;
  }
  read(): string {
    return this.content;
  }
  save(): EditorMemento {
    return Object.freeze({ content: this.content });
  }
  restore(memento: EditorMemento): void {
    this.content = memento.content;
  }
}
export function runMementoExample(): void {
  const editor = new TextEditor();
  editor.write("hello");
  const snapshot = editor.save();
  editor.write(" world");
  editor.restore(snapshot);
  console.log(editor.read());
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runMementoExample();
