import { File } from '../model/file';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { fileStorage } from '../storage/file';

export class FileController {
    /**
     * ### FileController uploadFile
     * @description upload a file and its metadata.
     * @param {*} data {owner: address, file: buffer, metadata: object}
     */
    async uploadFile(data) {
        if (!data.owner || !data.file || !data.metadata) {
            return await RollupStateHandler.handleReport({
                error: 'Owner, file, and metadata must be provided.',
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newFile = new File(data);
            fileStorage.addOne(newFile);

            return {
                ok: true,
                message: `File uploaded successfully!`,
                data: newFile.getData(),
            };
        });
    }

    /**
     * ### FileController verifyFileIntegrity
     * @description verify file integrity and ownership.
     * @param {*} data {fileId: UUID, owner: address, fileHash: string}
     */
    async verifyFileIntegrity(data) {
        const { fileId, owner, fileHash } = data;

        const file = fileStorage.getOneById(fileId);

        if (!file || file.owner !== owner || file.fileHash !== fileHash) {
            return await RollupStateHandler.handleReport({
                error: 'File integrity or ownership verification failed.',
            });
        }

        return await RollupStateHandler.inspectWrapper(() => ({
            ok: true,
            message: 'File integrity and ownership verified successfully.',
        }));
    }
}
