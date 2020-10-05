import { assert } from "chai";
import path from "path";

import { useEnvironment } from "../helpers";

describe("hardhat-etherscan configuration extension", function () {
  useEnvironment(path.join(__dirname, "..", "hardhat-project-defined-config"));

  it("the etherscan field should be present", function () {
    assert.isDefined(this.env.config.etherscan);
  });

  it("the etherscan token should have value from hardhat.env.config.js", function () {
    const { etherscan } = this.env.config;

    assert.equal(etherscan.apiKey, "testtoken");
  });
});

describe("hardhat-etherscan configuration defaults in an empty project", function () {
  useEnvironment(
    path.join(__dirname, "..", "hardhat-project-undefined-config")
  );

  it("the etherscan field should be present", function () {
    assert.isDefined(this.env.config.etherscan);
  });
});