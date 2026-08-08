import { pathToFileURL } from "node:url";
export class MarkerIcon {
  constructor(
    readonly type: string,
    readonly imagePath: string,
  ) {}
}
export class MarkerIconFactory {
  private readonly icons = new Map<string, MarkerIcon>();
  getIcon(type: string): MarkerIcon {
    if (!this.icons.has(type))
      this.icons.set(type, new MarkerIcon(type, `/icons/${type}.svg`));
    return this.icons.get(type)!;
  }
  count(): number {
    return this.icons.size;
  }
}
export class MapMarker {
  constructor(
    readonly latitude: number,
    readonly longitude: number,
    readonly icon: MarkerIcon,
  ) {}
}
export function runFlyweightExample(): void {
  const factory = new MarkerIconFactory();
  const markers = [
    new MapMarker(10, 20, factory.getIcon("restaurant")),
    new MapMarker(11, 21, factory.getIcon("restaurant")),
  ];
  console.log(`markers=${markers.length} icons=${factory.count()}`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runFlyweightExample();
