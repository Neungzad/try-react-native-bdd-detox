import detox from "detox/internals";

class DetoxCucumberAdapter {
  constructor(detox) {
    this.detox = detox;
  }

  async beforeEach(context) {
    await this.detox.onTestStart({
      title: context.pickle.name,
      fullName: context.pickle.name,
      status: "running",
    });
  }

  async afterEach(context) {
    await this.detox.onTestDone({
      title: context.pickle.name,
      fullName: context.pickle.name,
      status: this._mapStatus(context, true),
      timedOut: context.result.duration,
    });
  }

  _mapStatus(context) {
    switch (context.result.status) {
      case "passed":
        return "passed";
      case "failed":
        return "failed";
      default:
        return "failed";
    }
  }
}
export default new DetoxCucumberAdapter(detox);
