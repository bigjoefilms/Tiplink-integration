import { TipLink } from '@tiplink/api';

// TipLink.create().then(tiplink => {
//   console.log("link: ", tiplink.url.toString());
//   console.log("publicKey: ", tiplink.keypair.publicKey.toBase58());
//   return tiplink;
// });

// const tp = 'https://tiplink.io/i#5jC3aFcBJR4g4BQ5D';
// TipLink.fromLink(tp).then(tiplink => {
//   console.log("converted publicKey: ", tiplink.keypair.publicKey.toBase58());
//   return tiplink;
// });

// Function to create a new TipLink and log the results
const createAndLogTipLink = async () => {
    try {
      const tiplink = await TipLink.create();
      console.log("Link:", tiplink.url.toString());
      console.log("PublicKey:", tiplink.keypair.publicKey.toBase58());
      return tiplink;
    } catch (error) {
      console.error("Error creating TipLink:", error);
    }
  };
  
  const getAndLogPublicKey = async (linkString: string) => {
    try {
      const tiplink = await TipLink.fromLink(linkString);
      const publicKeyString = tiplink.keypair.publicKey.toBase58();
      console.log("PublicKey (which can be used to fund the TipLink):", publicKeyString);
    } catch (error) {
      console.error("Error getting PublicKey from TipLink:", error);
    }
  };
  
// Example usage
createAndLogTipLink().then(tiplink => {
    if (tiplink) {
      const tp = tiplink.url.toString();
      getAndLogPublicKey(tp);
    }
  });