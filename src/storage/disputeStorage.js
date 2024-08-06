export class DisputeStorage {
    disputes;

    constructor() {
        this.disputes = new Map();
    }

    /**
     * ### DisputeStorage getAll
     * @description get all stored disputes.
     * @returns {*} list DisputeModel[]
     */
    getAll() {
        return Array.from(this.disputes.values());
    }

    /**
     * ### DisputeStorage addOne
     * @description store a single dispute.
     * @param {*} dispute DisputeModel
     */
    addOne(dispute) {
        this.disputes.set(dispute.id, dispute);
    }

    /**
     * ### DisputeStorage getOneById
     * @description get a single dispute given an id.
     * @param {*} id UUID
     * @returns DisputeModel | undefined (not found)
     */
    getOneById(id) {
        return this.disputes.get(id);
    }

    /**
     * ### DisputeStorage updateOne
     * @description update a single dispute.
     * @param {*} dispute DisputeModel
     */
    updateOne(dispute) {
        this.disputes.set(dispute.id, dispute);
    }
}

export const disputeStorage = new DisputeStorage();
