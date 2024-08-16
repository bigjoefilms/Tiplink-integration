import { PublicKey } from "@solana/web3.js";
import { TipLink, TipLinkClient } from "@tiplink/api";

const tps = "https://tiplink.io/i#3pioueZqPqAesB1Rr"

TipLink.fromLink(tps).then( tiplink => {
    console.log("public key from link " , 
    tiplink.keypair.publicKey.toBase58())
    
})

TipLink.create().then(tiplink => {
    console.log("Link" , tiplink.url.toString())
    console.log("public key", tiplink.keypair.publicKey.toBase58())
    return tiplink;

})


const getPublicKeyString = async (link_key) => { 
    const tiplink = await TipLink.fromLink(tpi)
    return tiplink.keypair.publicKey.toBase58();

}
const tpi = "https://tiplink.io/i#3pioueZqPqAesB1Rr"

getPublicKeyString(tpi).then( (publicKeys) => {
    console.log("linkable", publicKeys)
})
