import { createAgent, IResolver } from "@veramo/core";

import { DIDResolverPlugin } from "@veramo/did-resolver";
import { getResolver as ethrDidResolver } from "ethr-did-resolver";
import { getResolver as webDidResolver } from "web-did-resolver";

// You will need to get a project ID from infura https://www.infura.io
const INFURA_PROJECT_ID = "b748ea5ec4074c07b6fb4c251ffb0e7f"; // my infura key

export const agent = createAgent<IResolver>({
  plugins: [
    new DIDResolverPlugin({
      ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID }),
      ...webDidResolver(),
    }),
  ],
});
