/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com

This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/

import ContractWrapper from './contract_wrapper';

export default class ShelteringWrapper extends ContractWrapper {
  get getContractName() {
    return 'sheltering';
  }

  async isSheltering(bundleId) {
    const contract = await this.contract();
    return contract.methods.isSheltering(bundleId, this.defaultAddress).call();
  }

  async shelteringExpirationDate(bundleId) {
    const contract = await this.contract();
    return contract.methods.getShelteringExpirationDate(bundleId, this.defaultAddress).call();
  }

  async getBundleUploadBlockNumber(bundleId) {
    const contract = await this.contract();
    const uploadBlockNumber = await contract.methods.getBundleUploadBlockNumber(bundleId).call();
    return uploadBlockNumber === '0' ? null : uploadBlockNumber;
  }

  async getBundleUploader(bundleId) {
    const contract = await this.contract();
    return contract.methods.getBundleUploader(bundleId).call();
  }
}
