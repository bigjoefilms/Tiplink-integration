import { TipLink, TipLinkClient } from '@tiplink/api';
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";


const API_KEY = "test_eqHNJGeZHOOQzpZE3i2mwckalxaoBknlFnotONvW";

const createCampaignAndDispenserExample = async () => {
  const client = await TipLinkClient.init(API_KEY, 1);
  const campaign = await client.campaigns.create({
    name: "Campaign test",
    description: "longer string description",
    imageUrl: '',
    active: false
  });

  const tp = await TipLink.create();
  const tp2 = await TipLink.create();

  // TODO: Fund your tiplinks here using: tp.keypair

  const tiplinks = [tp, tp2];
  await campaign.addEntries(tiplinks);

  const dispenser = await campaign.dispensers.create({
    useCaptcha: false, // optional: default true
    useFingerprint: true, // optional: default true
    unlimitedClaims: false // optional: default false // WARNING: this is global per campaign and affects all dispensers for that campaign
  });
  return dispenser.url;
}
