import crypto from 'node:crypto';

export class Dispute {
    id;
    fileId;
    owner;
    disputeDetails;
    createdAt;

    /**
     * ### Dispute model
     * @requires fileId: UUID
     * @requires owner: address
     * @requires disputeDetails: object
     */
    constructor({ fileId, owner, disputeDetails }) {
        this.id = crypto.randomUUID();
        this.fileId = fileId;
        this.owner = owner;
        this.disputeDetails = disputeDetails;
        this.createdAt = Date.now();
    }

    /**
     * ### Dispute getData
     * @description return dispute data.
     * @returns {*}
     * dispute {
     * id: UUID
     * fileId: UUID
     * owner: address
     * disputeDetails: object
     * createdAt: number
     * }
     */
    getData() {
        return {
            id: this.id,
            fileId: this.fileId,
            owner: this.owner,
            disputeDetails: this.disputeDetails,
            createdAt: this.createdAt,
        };
    }
}
