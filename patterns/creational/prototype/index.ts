import { pathToFileURL } from "node:url";
export type Campaign = {
  name: string;
  audience: string;
  channels: string[];
  budgetUsd: number;
};
export class CampaignPrototype {
  constructor(private readonly campaign: Campaign) {}
  clone(overrides: Partial<Campaign> = {}): Campaign {
    return {
      ...this.campaign,
      ...overrides,
      channels: [...(overrides.channels ?? this.campaign.channels)],
    };
  }
}
export function runPrototypeExample(): void {
  console.log(
    new CampaignPrototype({
      name: "Base",
      audience: "developers",
      channels: ["email"],
      budgetUsd: 5000,
    }).clone({ name: "Launch" }).name,
  );
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runPrototypeExample();
