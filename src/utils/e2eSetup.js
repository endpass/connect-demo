import { SWControllerDuplexBridge } from '@endpass/e2e-utils';

const rafAsync = () =>
  new Promise(resolve => {
    requestAnimationFrame(resolve);
  });
const awaitElement = async selector => {
  while (!document.querySelector(selector)) {
    // eslint-disable-next-line
    await rafAsync();
  }

  return document.querySelector(selector);
};

const e2eSetup = async bus => {
  const bridgeFrame = await awaitElement('[data-endpass=frame]');
  const e2eBridge = new SWControllerDuplexBridge({
    target: bridgeFrame.contentWindow,
  });

  Object.assign(bus, {
    e2eBridge,
  });
};

export default e2eSetup;
