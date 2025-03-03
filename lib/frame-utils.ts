import { NextRequest } from 'next/server';

export type FrameRequest = {
  untrustedData: {
    fid: number;
    url: string;
    messageHash: string;
    timestamp: number;
    network: number;
    buttonIndex: number;
    castId: {
      fid: number;
      hash: string;
    };
  };
  trustedData?: {
    messageBytes: string;
  };
};

export enum FrameState {
  INITIAL = 'initial',
  CONNECT_WALLET = 'connect_wallet',
  REGISTRATION_FORM = 'registration_form',
  CONFIRMATION = 'confirmation',
  SUCCESS = 'success',
}

export function getFrameHtmlResponse({
  title,
  description,
  image,
  buttons,
  state,
  postUrl,
  inputText,
}: {
  title: string;
  description: string;
  image: string;
  buttons: string[];
  state: FrameState;
  postUrl: string;
  inputText?: {
    placeholder: string;
  };
}) {
  const buttonTags = buttons.map((button, i) => {
    return `<meta property="fc:frame:button:${i + 1}" content="${button}" />`;
  }).join('\n  ');

  const inputTag = inputText 
    ? `<meta property="fc:frame:input:text" content="${inputText.placeholder}" />`
    : '';

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${image}" />
    <meta property="fc:frame:post_url" content="${postUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="fc:frame:state" content="${state}" />
    ${buttonTags}
    ${inputTag}
  </head>
  <body>
    <h1>${title}</h1>
    <p>${description}</p>
  </body>
</html>
`;
}

export function parseFrameRequest(req: NextRequest): FrameRequest | null {
  try {
    return req.method === 'POST' ? req.json() : null;
  } catch (e) {
    return null;
  }
}