import E2EBridge from '@endpass/e2e-utils/E2EBridge';

const e2eSetup = bus => {
  const e2eBridge = new E2EBridge();
  Object.assign(bus, {
    e2eBridge,
  });
};

export default e2eSetup;
