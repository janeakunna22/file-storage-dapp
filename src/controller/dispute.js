import { RollupStateHandler } from "../shared/rollup-state-handler";
import { disputeStorage } from "../storage/dispute";

export class DisputeController {
  /**
   * ### DisputeController resolveDispute
   * @description resolves disputes over file ownership or integrity.
   * @param {*} data {fileId: UUID, owner: address, disputeDetails: object}
   */
  async resolveDispute(data) {
    const { fileId, owner, disputeDetails } = data;

    return await RollupStateHandler.advanceWrapper(() => {
      disputeStorage.addOne({ fileId, owner, disputeDetails });

      return {
        ok: true,
        message: "Dispute registered successfully!",
        data: { fileId, owner, disputeDetails },
      };
    });
  }
}
