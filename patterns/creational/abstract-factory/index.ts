import { pathToFileURL } from "node:url";
export interface Button {
  render(): string;
}
export interface Checkbox {
  render(): string;
}
export interface ThemeFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
class LightButton implements Button {
  render(): string {
    return "light button";
  }
}
class LightCheckbox implements Checkbox {
  render(): string {
    return "light checkbox";
  }
}
class DarkButton implements Button {
  render(): string {
    return "dark button";
  }
}
class DarkCheckbox implements Checkbox {
  render(): string {
    return "dark checkbox";
  }
}
export class LightThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new LightButton();
  }
  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}
export class DarkThemeFactory implements ThemeFactory {
  createButton(): Button {
    return new DarkButton();
  }
  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}
export function renderSettingsPanel(factory: ThemeFactory): string {
  return `${factory.createButton().render()} + ${factory.createCheckbox().render()}`;
}
export function runAbstractFactoryExample(): void {
  console.log(renderSettingsPanel(new DarkThemeFactory()));
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runAbstractFactoryExample();
