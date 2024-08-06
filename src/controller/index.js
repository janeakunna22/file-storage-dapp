import { FileController } from './file';
import { DisputeController } from './dispute';

const fileController = new FileController();
const disputeController = new DisputeController();

export const controller = {
    uploadFile: fileController.uploadFile,
    verifyFileIntegrity: fileController.verifyFileIntegrity,
    resolveDispute: disputeController.resolveDispute,
};
