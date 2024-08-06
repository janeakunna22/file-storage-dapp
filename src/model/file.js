import crypto from 'node:crypto';

export class File {
    id;
    owner;
    fileHash;
    metadata;
    uploadedAt;

    /**
     * ### File model
     * @requires owner: address
     * @requires file: buffer
     * @requires metadata: object
     */
    constructor({ owner, file, metadata }) {
        this.id = crypto.randomUUID();
        this.owner = owner;
        this.fileHash = crypto.createHash('sha256').update(file).digest('hex');
        this.metadata = metadata;
        this.uploadedAt = Date.now();
    }

    /**
     * ### File getData
     * @description return file data.
     * @returns {*}
     * file {
     * id: UUID
     * owner: address
     * fileHash: string
     * metadata: object
     * uploadedAt: number
     * }
     */
    getData() {
        return {
            id: this.id,
            owner: this.owner,
            fileHash: this.fileHash,
            metadata: this.metadata,
            uploadedAt: this.uploadedAt,
        };
    }
}
