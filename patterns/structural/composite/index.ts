import { pathToFileURL } from "node:url";
export interface MenuComponent {
  render(indent?: number): string;
}
export class MenuItem implements MenuComponent {
  constructor(private readonly label: string) {}
  render(indent = 0): string {
    return `${" ".repeat(indent)}- ${this.label}`;
  }
}
export class MenuGroup implements MenuComponent {
  private readonly children: MenuComponent[] = [];
  constructor(private readonly label: string) {}
  add(child: MenuComponent): this {
    this.children.push(child);
    return this;
  }
  render(indent = 0): string {
    return [
      `${" ".repeat(indent)}+ ${this.label}`,
      ...this.children.map((child) => child.render(indent + 2)),
    ].join("\n");
  }
}
export function runCompositeExample(): void {
  console.log(
    new MenuGroup("Settings")
      .add(new MenuItem("Profile"))
      .add(new MenuGroup("Security").add(new MenuItem("Password")))
      .render(),
  );
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runCompositeExample();
